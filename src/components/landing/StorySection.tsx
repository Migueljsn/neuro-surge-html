import { motion } from "framer-motion";
import storyImage from "@/assets/William-2.png";

const StorySection = () => {
  return (
    <section className="bg-deep-blue py-16 md:py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-glow-purple/5 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <span className="text-glow-purple text-sm font-bold uppercase tracking-widest">
              Quem está por trás
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mt-3">
              A história de <span className="text-gradient">Willian Amorim</span>
            </h2>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-6 md:p-8 border border-glow-purple/10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Texto */}
              <div className="w-full lg:w-1/2">
                <p className="text-primary-foreground/80 text-lg leading-relaxed mb-4">
                  Willian Amorim é farmacêutico e proprietário da{" "}
                  <strong className="text-primary-foreground">Drogaria América</strong>,
                  referência em Teresina há anos.
                </p>

                <p className="text-primary-foreground/80 text-lg leading-relaxed mb-4">
                  Depois de anos vendo clientes comprando magnésio sem resultado,
                  ele decidiu trazer para Teresina a forma mais avançada e
                  cientificamente comprovada: o{" "}
                  <strong className="text-primary-foreground">Magnésio L-Treonato</strong>.
                </p>

                <p className="text-primary-foreground/80 text-lg leading-relaxed">
                  "Eu não podia mais ver pessoas gastando dinheiro com magnésio que
                  não funciona. O Treonato é outra categoria. E agora ele está
                  acessível aqui em Teresina."
                </p>

                <div className="mt-6 pt-6 border-t border-glow-purple/10 flex items-center gap-4">
                  <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                    W
                  </div>

                  <div>
                    <p className="text-primary-foreground font-bold">Willian Amorim</p>
                    <p className="text-glow-purple text-sm">
                      Farmacêutico — Drogaria América
                    </p>
                  </div>
                </div>
              </div>

              {/* Imagem */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src={storyImage}
                  alt="Willian Amorim"
                  className="w-full max-w-sm md:max-w-md lg:max-w-full rounded-2xl object-cover shadow-2xl"
                  width={600}
                  height={700}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;