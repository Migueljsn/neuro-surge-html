const benefits = [
  {
    icon: "🔬",
    title: "Alta Densidade Sináptica",
    desc: "Aumenta o número e a proximidade das conexões entre neurônios — mais velocidade e precisão mental.",
  },
  {
    icon: "⚡",
    title: "Plasticidade Cerebral",
    desc: "O cérebro se torna mais adaptável, ágil e capaz de aprender e reter informações com facilidade.",
  },
  {
    icon: "😴",
    title: "Regulação do Sistema Nervoso",
    desc: "Reduz cortisol, estabiliza o humor e promove sono profundo e reparador.",
  },
];

const MechanismSection = () => {
  return (
    <section className="nm-gradient-deep py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <span className="nm-badge-purple inline-block px-4 py-1.5 rounded-full text-xs font-mono-sci uppercase tracking-wider mb-6">
            Descoberta Científica
          </span>
          <h2 className="font-headline font-extrabold text-3xl md:text-[48px] md:leading-tight mb-6">
            Por Que Outros Magnésios Falham — E O Que Faz o Mente Blindada Ser Diferente
          </h2>
        </div>

        <div className="nm-section-card rounded-2xl p-6 md:p-10 mb-10">
          <p className="text-sm md:text-base leading-relaxed nm-text-muted mb-6">
            Seu cérebro tem uma proteção chamada <span className="nm-text-purple font-semibold">Barreira Hematoencefálica (BHE)</span> — uma muralha microscópica que filtra o que entra e o que fica de fora.
          </p>
          <p className="text-sm md:text-base leading-relaxed nm-text-muted mb-6">
            A maioria dos magnésios (cloreto, quelado, dimalato) bate nessa muralha e fica do lado de fora. Eles ajudam o resto do corpo, mas deixam o cérebro sem o magnésio que precisa.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-foreground">
            O Magnésio L-Treonato foi a primeira forma de magnésio desenvolvida especificamente para <span className="nm-text-green font-semibold">ATRAVESSAR</span> essa barreira — chegando diretamente aos neurônios, aumentando a densidade sináptica e a plasticidade cerebral de forma mensurável.
          </p>
        </div>

        {/* CSS Diagram */}
        <div className="font-mono-sci text-sm md:text-base space-y-4 mb-12 max-w-lg mx-auto">
          <div className="flex items-center gap-3">
            <span className="nm-text-muted whitespace-nowrap">Magnésio Comum</span>
            <span className="nm-text-muted">→</span>
            <span className="px-3 py-1 border nm-border-purple rounded text-xs nm-text-purple">BARREIRA</span>
            <span className="text-red-500 font-bold">✗</span>
            <span className="nm-text-muted text-xs italic">(não chega)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="nm-text-green font-semibold whitespace-nowrap">Mente Blindada L-Treonato</span>
            <span className="nm-text-green">→</span>
            <span className="px-3 py-1 border nm-border-green rounded text-xs nm-text-green">BARREIRA</span>
            <span className="nm-text-green font-bold">✓</span>
            <span className="text-base">🧠</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="nm-section-card rounded-2xl p-6 border border-muted/20">
              <span className="text-3xl mb-4 block">{b.icon}</span>
              <h3 className="font-headline font-bold text-lg mb-2 nm-text-green">{b.title}</h3>
              <p className="nm-text-muted text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
