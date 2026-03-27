import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PLAYER_ID = "ifr_69c6ed2d3a29b825b3af6b71";
const TARGET_TIME = 390; // 6 minutos e 30 segundos

interface VSLSectionProps {
  onVideoTimeReached?: () => void;
}

/** Tenta extrair o currentTime de qualquer formato de mensagem do converteai */
function extractTime(data: unknown): number | null {
  if (!data || typeof data !== "object") return null;
  const d = data as Record<string, unknown>;

  // Formatos conhecidos do converteai / vturb
  const candidates = [
    d.currentTime,
    d.time,
    d.position,
    (d.data as Record<string, unknown>)?.currentTime,
    (d.data as Record<string, unknown>)?.time,
  ];

  for (const v of candidates) {
    if (typeof v === "number" && v > 0) return v;
  }
  return null;
}

const VSLSection = ({ onVideoTimeReached }: VSLSectionProps) => {
  const reachedRef = useRef(false);
  const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // SDK do smartplayer
    const SDK_SRC = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    if (!document.querySelector(`script[src="${SDK_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SDK_SRC;
      script.async = true;
      document.head.appendChild(script);
    }

    const unlock = () => {
      if (reachedRef.current) return;
      reachedRef.current = true;
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
      onVideoTimeReached?.();
    };

    const handleMessage = (event: MessageEvent) => {
      // Aceita mensagens de qualquer origem (converteai usa subdomínios variados)
      let data = event.data;
      if (typeof data === "string") {
        try { data = JSON.parse(data); } catch { return; }
      }

      // Detecta início do vídeo para acionar o fallback por timer
      if (!fallbackTimerRef.current && !reachedRef.current) {
        const isPlaying =
          (data as Record<string, unknown>)?.event === "play" ||
          (data as Record<string, unknown>)?.type === "play" ||
          (data as Record<string, unknown>)?.event === "timeupdate" ||
          (data as Record<string, unknown>)?.type === "timeupdate" ||
          (data as Record<string, unknown>)?.type === "PLAYER_TIME_UPDATE";

        if (isPlaying) {
          // fallback: libera após TARGET_TIME segundos a partir do início
          fallbackTimerRef.current = setTimeout(unlock, TARGET_TIME * 1000);
        }
      }

      // Verifica o tempo diretamente
      const time = extractTime(data);
      if (time !== null && time >= TARGET_TIME) {
        unlock();
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    };
  }, [onVideoTimeReached]);

  return (
    <section className="bg-deep-blue py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-glow-purple font-bold text-sm uppercase tracking-widest mb-4">
            Apresentação exclusiva
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-8">
            Assista até o final para entender
          </h2>

          <div className="max-w-3xl mx-auto">
            <div id={`${PLAYER_ID}_wrapper`} style={{ margin: "0 auto", width: "100%" }}>
              <div style={{ position: "relative", paddingTop: "56.25%" }} id={`${PLAYER_ID}_aspect`}>
                <iframe
                  id={PLAYER_ID}
                  allowFullScreen
                  referrerPolicy="origin"
                  src="about:blank"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                  onLoad={(e) => {
                    const iframe = e.currentTarget;
                    if (iframe.src === "about:blank") {
                      iframe.src =
                        "https://scripts.converteai.net/0b256e8c-1ea0-49a1-a6c2-4aa9d6840568/players/69c6ed2d3a29b825b3af6b71/v4/embed.html" +
                        (location.search || "?") +
                        "&vl=" +
                        encodeURIComponent(location.href);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VSLSection;
