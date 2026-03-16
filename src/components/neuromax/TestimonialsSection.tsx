const testimonials = [
  {
    name: "Carlos Gabriel",
    handle: "@diamantinaacosta",
    source: "YouTube",
    verified: "Verificado",
    text: "Cumpre o que promete e um pouco mais...",
  },
  {
    name: "Francisca R.",
    handle: "",
    source: "E-commerce",
    verified: "Compra verificada — Piracuruca, PI",
    text: "Moro em Piracuruca e achei que ia demorar a chegar, mas chegou em 3 dias. Estou no segundo frasco e a diferença no meu foco e na memória é clara. Recomendo demais pra quem é daqui da região.",
  },
  {
    name: "Bethania P.",
    handle: "@bethaniapereira",
    source: "YouTube",
    verified: "Verificado",
    text: "Após 1 ano de magnésio L-treonato, a minha depressão recorrente desde a adolescência acabou! Sem falar na memória e disposição!",
  },
  {
    name: "Anna B.",
    handle: "@annabrito",
    source: "YouTube",
    verified: "Verificado",
    text: "Meu esposo estava esquecido, lento, distraído. Há 2 meses tomando — está simplesmente curado. Antes não lembrava como fazia arroz. Hoje lembra de tudo. Estou muito agradecida.",
  },
  {
    name: "Bruno B.",
    handle: "",
    source: "E-commerce",
    verified: "Compra verificada",
    text: "Muito muito bom, agradeço pela atenção.",
  },
  {
    name: "Maria Clara A.",
    handle: "",
    source: "E-commerce",
    verified: "Compra verificada",
    text: "Eu estava muito desanimada, não queria falar com ninguém. Só queria ficar deitada. Meu filho insistiu para que eu tomasse. Já no 4º dia estava mais animada. Hoje, meses depois, estou outra pessoa. Emagreci 13kg, ganhei ânimo. Estou muito bem e feliz.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="nm-section-dark py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <h2 className="font-headline font-extrabold text-3xl md:text-[42px] md:leading-tight text-center mb-12">
          O Que Acontece Quando o Cérebro Finalmente Recebe o Que Precisa
        </h2>

        {/* ── DEPOIMENTO COM FOTOS DE PROVA SOCIAL ── */}
        <div className="nm-card-testimonial rounded-2xl p-6 mb-5 border-2" style={{ borderColor: "hsl(var(--nm-accent-green) / 0.4)" }}>
          <div className="nm-stars text-lg mb-3">⭐⭐⭐⭐⭐</div>

          {/*
            FOTOS DE PROVA SOCIAL
            Coloque 2 imagens em:
              public/prova-social-1.jpg  (ex: print de conversa, resultado, comprovante)
              public/prova-social-2.jpg  (ex: foto do cliente usando o produto)
            Sugestão de tamanho: 600x400px ou 1:1
          */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <div className="flex-1 rounded-xl overflow-hidden bg-muted/20 aspect-[4/3] flex items-center justify-center relative">
              <img
                src={`${import.meta.env.BASE_URL}prova-social-1.jpeg`}
                alt="Prova social 1"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = "none";
                  const label = el.nextElementSibling as HTMLElement;
                  if (label) label.style.display = "flex";
                }}
              />
              <span className="absolute inset-0 hidden items-center justify-center text-xs nm-text-muted flex-col gap-1 border border-dashed border-muted/40 rounded-xl">
                <span className="text-2xl">📷</span>
                <span>public/prova-social-1.jpeg</span>
              </span>
            </div>
            <div className="flex-1 rounded-xl overflow-hidden bg-muted/20 aspect-[4/3] flex items-center justify-center relative">
              <img
                src={`${import.meta.env.BASE_URL}prova-social-2.jpeg`}
                alt="Prova social 2"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = "none";
                  const label = el.nextElementSibling as HTMLElement;
                  if (label) label.style.display = "flex";
                }}
              />
              <span className="absolute inset-0 hidden items-center justify-center text-xs nm-text-muted flex-col gap-1 border border-dashed border-muted/40 rounded-xl">
                <span className="text-2xl">📷</span>
                <span>public/prova-social-2.jpeg</span>
              </span>
            </div>
          </div>

          <p className="text-sm md:text-base leading-relaxed mb-4 italic">
            "Cumpre o que promete e um pouco mais."
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">— Carlos Gabriel</span>
            <span className="nm-text-green text-xs">✓ Verificado</span>
          </div>
        </div>

        {/* ── DEMAIS DEPOIMENTOS ── */}
        <div className="space-y-5 mb-10">
          {testimonials.slice(1).map((t) => (
            <div key={t.name} className="nm-card-testimonial rounded-2xl p-6">
              <div className="nm-stars text-lg mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-sm md:text-base leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">— {t.name}</span>
                <span className="nm-text-green text-xs">✓ {t.verified}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center nm-text-muted text-sm">
          <span className="nm-stars">⭐⭐⭐⭐⭐</span>{" "}
          5.0 de 5.0 | 207 avaliações verificadas | 3.910 vendidos
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
