const painPoints = [
  "Você começa uma tarefa e perde o fio da meada em segundos",
  "Sente que sua memória \"derreteu\" comparada há 5 anos atrás",
  "Seu cérebro trava no meio de conversas ou apresentações",
  "Dorme, mas acorda ainda cansado — sem clareza mental",
  "Ansiedade que não passa, humor instável, irritação fácil",
  "Sente que está operando \"no piloto automático\" — sem brilho",
];

const ProblemSection = () => {
  return (
    <section className="nm-section-light py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <h2 className="font-headline font-extrabold text-3xl md:text-[42px] md:leading-tight text-center mb-4">
          Você Reconhece Algum Desses Sintomas?
        </h2>
        <p className="text-center nm-text-muted mb-12 text-base md:text-lg" style={{ color: "hsl(219 19% 50%)" }}>
          Se sim, seu cérebro está sofrendo com deficiência de magnésio — e ninguém te contou.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {painPoints.map((point) => (
            <div key={point} className="nm-card-pain rounded-xl p-5 flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg mt-0.5">✗</span>
              <span className="text-sm md:text-base leading-relaxed" style={{ color: "hsl(var(--nm-bg-dark))" }}>{point}</span>
            </div>
          ))}
        </div>

        <div className="nm-section-dark rounded-2xl p-6 md:p-8 border-l-4 nm-border-green">
          <p className="nm-text-warn font-headline font-bold text-lg mb-3">⚡ DADO ALARMANTE</p>
          <p className="text-sm md:text-base leading-relaxed text-foreground">
            Estimativas científicas apontam que mais de 80% da população tem algum grau de deficiência de magnésio — e a maioria nunca descobre, porque o exame de sangue comum não detecta. (99% do magnésio do corpo está DENTRO das células, não no sangue.)
          </p>
        </div>

        <p className="text-center mt-10 text-base md:text-lg italic" style={{ color: "hsl(219 19% 40%)" }}>
          "A boa notícia: existe uma forma de magnésio que foi desenvolvida especificamente para resolver isso. E ela vem do MIT."
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
