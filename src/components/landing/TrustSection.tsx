import { motion } from "framer-motion";
import { ShieldCheck, Lock, Truck, Award } from "lucide-react";

const seals = [
  { icon: ShieldCheck, text: "Produto Original" },
  { icon: Lock, text: "Compra Segura" },
  { icon: Truck, text: "Frete Grátis Teresina" },
  { icon: Award, text: "Qualidade Garantida" },
];

const TrustSection = () => {
  return (
    <section className="bg-muted py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {seals.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center p-4">
              <s.icon className="w-8 h-8 text-primary" />
              <span className="text-foreground text-sm font-semibold">{s.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
