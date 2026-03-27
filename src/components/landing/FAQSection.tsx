import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "O que é o Magnésio L-Treonato?",
    a: "É a única forma de magnésio comprovada cientificamente que atravessa a barreira hematoencefálica, chegando diretamente ao cérebro para melhorar foco, memória e qualidade do sono.",
  },
  {
    q: "Em quanto tempo vou sentir diferença?",
    a: "A maioria dos nossos clientes relata melhoras perceptíveis entre 5 a 14 dias de uso contínuo. Os benefícios se acumulam com o tempo.",
  },
  {
    q: "Tem contraindicação?",
    a: "O Magnésio L-Treonato é um suplemento seguro para a maioria das pessoas. Gestantes, lactantes e pessoas com condições médicas devem consultar um profissional de saúde.",
  },
  {
    q: "Como tomar?",
    a: "Tomar 2 cápsulas ao dia, preferencialmente à noite, cerca de 1 hora antes de dormir.",
  },
  {
    q: "O frete é realmente grátis?",
    a: "Sim! Para pedidos em Teresina (PI) o frete é 100% grátis. Entregamos diretamente na sua porta.",
  },
  {
    q: "Como faço para comprar?",
    a: "É só clicar no botão 'Pedir Agora' que você será redirecionado para nosso WhatsApp. Lá finalizamos seu pedido de forma rápida e segura.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-4 shadow-card"
              >
                <AccordionTrigger className="text-foreground font-bold text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
