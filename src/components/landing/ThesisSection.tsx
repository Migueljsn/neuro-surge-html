import { motion } from "framer-motion";

const ThesisSection = () => {
  return (
    <section className="bg-deep-blue py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-glow-purple/5 rounded-full blur-[100px]" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-6">
            O problema <span className="text-gradient">não é o cansaço…</span>
          </h2>
          <div className="space-y-6 text-left">
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Você não está cansado porque trabalha demais. Você não tem "preguiça".
              Seu corpo está pedindo socorro.
            </p>
            <div className="gradient-primary rounded-xl p-6">
              <p className="text-primary-foreground font-bold text-lg">
                O magnésio comum NÃO atravessa a barreira hematoencefálica.
                Ou seja: ele não chega onde mais precisa — no seu cérebro.
              </p>
            </div>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              É por isso que você toma magnésio e continua com a mente acelerada,
              dormindo mal e sem foco. Não é culpa sua.{" "}
              <strong className="text-primary-foreground">
                É o tipo errado de magnésio.
              </strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThesisSection;
