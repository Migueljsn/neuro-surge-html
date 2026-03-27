import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5586999999999?text=Olá!%20Quero%20pedir%20o%20Amevit%20Treonato";

const StickyCTA = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-deep-blue/95 backdrop-blur border-t border-glow-purple/20 md:hidden"
    >
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="gradient-cta text-accent-foreground font-extrabold text-base w-full py-3.5 rounded-full block text-center animate-pulse-glow"
      >
        👉 Pedir Agora — R$64,90
      </a>
    </motion.div>
  );
};

export default StickyCTA;
