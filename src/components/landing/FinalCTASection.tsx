import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5586999999999?text=Olá!%20Quero%20pedir%20o%20Amevit%20Treonato";

const FinalCTASection = () => {
  return (
    <section className="gradient-hero py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-glow-purple/10 rounded-full blur-[100px]" />
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
            Seu corpo não está falhando…
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-3">
            Ele só precisa do <strong className="text-primary-foreground">nutriente certo, na forma certa.</strong>
          </p>
          <p className="text-primary-foreground/60 mb-8">
            Não deixe mais um dia passar com a mente cansada. Comece hoje.
          </p>

          <motion.button
            onClick={() => {
              document.getElementById("oferta")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#5040a0] text-white font-extrabold text-xl px-12 py-5 rounded-full inline-block animate-pulse-glow hover:bg-[#3e3380] transition shadow-lg shadow-[#5040a0]/40"
          >
            👉 Quero Meu Amevit Agora
          </motion.button>

          <p className="text-primary-foreground/40 text-sm mt-4">
            Frete grátis para Teresina • Entrega rápida
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
