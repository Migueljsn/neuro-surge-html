import { useState } from "react";

const faqs = [
  {
    q: "Qual a diferença do Mente Blindada para outros magnésios?",
    a: "A diferença está na absorção cerebral. Magnésios comuns (cloreto, quelado, dimalato) não conseguem atravessar a barreira hematoencefálica — chegam ao sangue, mas não ao cérebro. O Magnésio L-Treonato foi desenvolvido especificamente para ultrapassar essa barreira, aumentando os níveis de magnésio diretamente nos neurônios, onde os benefícios cognitivos de fato acontecem.",
  },
  {
    q: "Em quanto tempo começo a sentir resultados?",
    a: "Resultados variam de pessoa para pessoa. Muitos usuários relatam melhora no sono e na disposição já na primeira semana. Benefícios mais profundos de memória e foco geralmente são percebidos entre 4 e 12 semanas de uso contínuo — o que os estudos científicos também confirmam.",
  },
  {
    q: "Posso combinar com outros suplementos?",
    a: "Sim. O Magnésio L-Treonato combina muito bem com Ômega-3 (potencializa o efeito cognitivo), Vitamina D3 (já presente na fórmula Mente Blindada) e B-Complex. Evite combinar com doses muito altas de cálcio sem orientação médica.",
  },
  {
    q: "Qual a dose recomendada?",
    a: "A dose do Mente Blindada é de 2 cápsulas ao dia. A faixa segura de Magnésio L-Treonato vai de 350mg a 1.500mg por dia, dependendo do uso mental e necessidade individual. Pessoas que demandam muito da mente (cirurgiões, advogados, programadores, executivos) tendem a se beneficiar de doses maiores. Consulte seu médico.",
  },
  {
    q: "E se eu não sentir resultados?",
    a: "Oferecemos garantia de 7 dias com dinheiro de volta, sem perguntas. Se você usar corretamente e não perceber qualquer diferença, basta entrar em contato com nosso suporte e realizamos o reembolso integral. Nosso compromisso é com o seu resultado.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="nm-section-light py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <h2 className="font-headline font-extrabold text-3xl md:text-[42px] text-center mb-12" style={{ color: "hsl(var(--nm-bg-dark))" }}>
          Perguntas Frequentes
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4"
                style={{ color: "hsl(var(--nm-bg-dark))" }}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-sm md:text-base">{faq.q}</span>
                <span className={`text-xl transition-transform duration-300 flex-shrink-0 ${openIndex === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === i ? "300px" : "0" }}
              >
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base leading-relaxed" style={{ color: "hsl(219 19% 40%)" }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
