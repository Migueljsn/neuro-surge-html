import { motion } from "framer-motion";
import { Brain, Moon, Zap, Heart, Eye, Shield, Smile, BatteryCharging } from "lucide-react";

const benefits = [
  { icon: Brain, text: "Melhora foco e concentração" },
  { icon: Moon, text: "Sono profundo e reparador" },
  { icon: Zap, text: "Mais energia e disposição" },
  { icon: Heart, text: "Reduz ansiedade e estresse" },
  { icon: Eye, text: "Clareza mental no dia a dia" },
  { icon: Shield, text: "Protege a saúde do cérebro" },
  { icon: Smile, text: "Melhora o humor naturalmente" },
  { icon: BatteryCharging, text: "Recuperação muscular" },
];

const BenefitsSection = () => {
  return (
    <section className="gradient-primary py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-3">
            O que o Amevit faz por você
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-primary-foreground/10 backdrop-blur rounded-xl p-4 text-center border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
            >
              <b.icon className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
              <p className="text-primary-foreground text-sm font-semibold">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
