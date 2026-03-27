import { motion } from "framer-motion";
import { Brain, Zap, Moon } from "lucide-react";
import productImage from "@/assets/Product3.png";
import heroBg from "@/assets/BG-8.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background image */}
      <img
        src={heroBg}
        alt="Background da seção principal"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />

      {/* Overlay for readability */}
      

      <div className="container relative z-10 py-12 md:py-20 text-lg">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Copy */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                <span className="bg-[#5040a0] text-white text-xs font-bold px-3 py-1 rounded-full">
                  FRETE GRÁTIS PARA TODA TERESINA🚚
                </span>

                <span className="bg-[#5040a0]/10 text-[#5040a0] text-xs font-bold px-3 py-1 rounded-full border border-[#5040a0]/30">
                  R$64,90
                </span>
              </div>

              <h1 className="font-bebas text-4xl md:text-6xl tracking-wide leading-tight text-primary-foreground mb-4">
                Você pode estar tomando magnésio…{" "}
                <span className="text-[#5040a0]">
                e mesmo assim seu cérebro continua cansado
                </span>
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0">
                O problema não é falta de magnésio — é que ele{" "}
                <strong className="text-primary-foreground">
                  não chega no seu cérebro
                </strong>
              </p>

              {/* Pain points */}
              <div className="flex flex-col gap-3 mb-8">
                {[
                  { icon: Moon, text: "Acorda cansado mesmo dormindo" },
                  { icon: Brain, text: "Mente acelerada o dia inteiro" },
                  { icon: Zap, text: "Falta de foco e energia" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="flex items-center gap-3 justify-center lg:justify-start"
                  >
                    <div className="gradient-primary w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-primary-foreground/90 font-medium">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-primary-foreground/80 font-semibold text-base md:text-lg flex items-center gap-2 justify-center lg:justify-start"
              >
                <span className="text-xl">👇</span> Veja esse vídeo rápido abaixo
              </motion.p>
            </motion.div>
          </div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="relative z-10 w-80 md:w-[800px] lg:w-[500px] animate-float drop-shadow-2xl" />

              <img
                src={productImage}
                alt="Amevit Treonato - Magnésio L-Treonato"
                className="relative z-10 mx-auto w-[280px] md:w-[450px] lg:w-[550px] animate-float drop-shadow-2xl"
                width={800}
                height={1024}
              />

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;