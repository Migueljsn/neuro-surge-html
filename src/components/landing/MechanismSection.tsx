import { motion } from "framer-motion";
import { Brain, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Atravessa a barreira cerebral",
    desc: "O Magnésio L-Treonato é a ÚNICA forma comprovada que chega diretamente ao cérebro.",
  },
  {
    icon: Zap,
    title: "Ativa sinapses neurais",
    desc: "Aumenta a densidade sináptica, melhorando foco, memória e clareza mental.",
  },
  {
    icon: Shield,
    title: "Protege o sistema nervoso",
    desc: "Reduz a excitotoxicidade, acalmando a mente sem causar sonolência.",
  },
];

const MechanismSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            Por que o Amevit é <span className="text-gradient">diferente?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A ciência por trás da única forma de magnésio que realmente funciona para o cérebro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border text-center group hover:shadow-glow transition-shadow duration-300"
            >
              <div className="gradient-primary w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
