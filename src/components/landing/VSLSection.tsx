import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PLAYER_ID = "ifr_69c6ed2d3a29b825b3af6b71";
const TARGET_TIME = 390; // 6 minutos e 30 segundos

interface VSLSectionProps {
  onVideoTimeReached?: () => void;
}

const VSLSection = ({ onVideoTimeReached }: VSLSectionProps) => {
  const reachedRef = useRef(false);

  useEffect(() => {
    // SDK do smartplayer
    const SDK_SRC = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    if (!document.querySelector(`script[src="${SDK_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SDK_SRC;
      script.async = true;
      document.head.appendChild(script);
    }

    // Recebe eventos de tempo via postMessage do iframe
    const handleMessage = (event: MessageEvent) => {
      if (reachedRef.current) return;
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        const time = data?.currentTime ?? data?.time ?? data?.position;
        if (typeof time === "number" && time >= TARGET_TIME) {
          reachedRef.current = true;
          onVideoTimeReached?.();
        }
      } catch {
        // ignora mensagens não-JSON
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
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
