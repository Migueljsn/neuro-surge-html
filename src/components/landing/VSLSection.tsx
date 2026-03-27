import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const VSLSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const SDK_SRC = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    if (!document.querySelector(`script[src="${SDK_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SDK_SRC;
      script.async = true;
      document.head.appendChild(script);
    }

    if (iframeRef.current) {
      const search = location.search || "?";
      const vl = encodeURIComponent(location.href);
      iframeRef.current.src = `https://scripts.converteai.net/0b256e8c-1ea0-49a1-a6c2-4aa9d6840568/players/69c6ed2d3a29b825b3af6b71/v4/embed.html${search}&vl=${vl}`;
    }
  }, []);

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

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
            <div style={{ margin: "0 auto", width: "100%" }}>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <iframe
                  ref={iframeRef}
                  id="ifr_69c6ed2d3a29b825b3af6b71"
                  allowFullScreen
                  allow="autoplay; fullscreen"
                  referrerPolicy="origin"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              </div>
            </div>

            <motion.button
              onClick={scrollToOffer}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#5040a0] text-white font-extrabold text-lg px-10 py-4 rounded-full animate-pulse-glow hover:bg-[#3e3380] transition shadow-lg shadow-[#5040a0]/40"
            >
              👉 Quero Meu Amevit Agora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VSLSection;
