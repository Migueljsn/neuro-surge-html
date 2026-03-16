const studies = [
  {
    icon: "🏛️",
    institution: "MIT — Massachusetts Institute of Technology",
    text: "Pesquisadores liderados pelo Dr. Guosong Liu desenvolveram o Magnésio L-Treonato especificamente para elevar os níveis de magnésio no cérebro. Os resultados mostraram aumento significativo na densidade sináptica e melhora na memória de curto e longo prazo.",
  },
  {
    icon: "🏛️",
    institution: "Harvard University",
    text: "Estudos independentes confirmaram os efeitos do Magnésio L-Treonato na prevenção e retardo de declínio cognitivo, incluindo benefícios observados em pacientes com quadros iniciais de demência.",
  },
  {
    icon: "🧪",
    institution: "Comprovação por Neuroimagem",
    text: "Em estudos comparativos de 12 semanas, participantes que usaram Magnésio L-Treonato apresentaram sulcos cerebrais mais bem formados e adensamento neuronal visível em ressonância magnética, comparados ao grupo controle.",
  },
];

const badges = ["MIT", "Harvard", "Peer-Reviewed", "Neuroimagem", "12 semanas"];

const ScienceSection = () => {
  return (
    <section className="nm-section-light py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <h2 className="font-headline font-extrabold text-3xl md:text-[42px] text-center mb-12" style={{ color: "hsl(var(--nm-bg-dark))" }}>
          Não é Marketing. É Ciência.
        </h2>

        <div className="space-y-6 mb-10">
          {studies.map((s) => (
            <div key={s.institution} className="nm-card-study rounded-xl p-6 md:p-8">
              <p className="font-mono-sci text-sm nm-text-purple font-semibold mb-3">
                {s.icon} {s.institution}
              </p>
              <p className="text-sm md:text-base leading-relaxed text-foreground">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((b) => (
            <span key={b} className="nm-badge-purple px-4 py-1.5 rounded-full text-xs font-mono-sci uppercase tracking-wider">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
