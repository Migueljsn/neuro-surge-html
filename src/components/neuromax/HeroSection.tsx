import { useEffect, useState, useRef } from "react";

const WA_URL = "https://wa.me/5586999315131?text=" + encodeURIComponent("Olá! Quero garantir o Mente Blindada com 49% OFF. Sou de Piracuruca/região. 🧠");

const fullText = "Seu Cérebro Está Funcionando Com o Tanque Vazio — E Você Nem Percebe.";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < fullText.length) {
        setDisplayText(fullText.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(interval);
        setTimeout(() => setTypingDone(true), 200);
      }
    }, 22);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="nm-section-dark pt-20 md:pt-24 pb-16 md:pb-24 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--nm-accent-green)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--nm-accent-green)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      {/* Radial glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/4 opacity-20 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(var(--nm-accent-green) / 0.4), transparent 70%)" }} />

      <div className="max-w-page mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          {/* Text column */}
          <div className="md:w-[60%] text-center md:text-left">
            <p className="font-mono-sci text-xs md:text-sm nm-text-green tracking-widest uppercase mb-6 animate-fade-up">
              DESENVOLVIDO COM BASE EM PESQUISAS DO MIT • HARVARD
            </p>
            <p className="font-mono-sci text-xs nm-text-muted tracking-widest uppercase mb-4 animate-fade-up">
              📍 CHEGANDO EM PIRACURUCA E REDONDEZAS EM ATÉ 3 DIAS ÚTEIS
            </p>

            <h1 className={`text-3xl md:text-[56px] md:leading-[1.05] font-extrabold mb-6 transition-all duration-500 ${
              typingDone ? "font-headline" : "font-mono-sci text-2xl md:text-4xl"
            }`}>
              {displayText}
              {!typingDone && (
                <span className="inline-block w-[3px] h-[1em] ml-1 bg-foreground"
                      style={{ animation: "typewriter-cursor 0.8s infinite" }} />
              )}
            </h1>

            <p className="nm-text-muted text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0 animate-fade-up-delay-1">
              Mais de 80% das pessoas têm deficiência de magnésio. Mas o pior não é a falta — é que os magnésios comuns nunca chegam no cérebro. Mente Blindada é o único que atravessa a barreira hematoencefálica.
            </p>

            <ul className="space-y-3 mb-8 animate-fade-up-delay-2 text-left max-w-xl mx-auto md:mx-0">
              {[
                "Memória mais afiada em semanas, não meses",
                "Foco sustentado sem estimulantes ou cafeína",
                "Sono profundo e recuperador",
                "Redução de ansiedade e estabilidade emocional",
                "Plasticidade cerebral comprovada por ressonância magnética",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="nm-text-green font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-center md:justify-start gap-3 mb-8 text-sm animate-fade-up-delay-2">
              <span className="nm-stars text-lg">⭐⭐⭐⭐⭐</span>
              <span className="nm-text-muted">207 avaliações verificadas</span>
              <span className="nm-text-muted hidden sm:inline">|</span>
              <span className="nm-text-muted hidden sm:inline">3.910 pessoas já transformaram sua mente</span>
            </div>

            <div className="animate-fade-up-delay-3 flex flex-col items-center md:items-start">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                onClick={() => (window as any).fbq?.('track', 'Contact')}
                className="nm-cta inline-block w-full md:w-auto px-8 py-4 rounded-lg text-base md:text-lg text-center">
                💬 QUERO MINHA MENTE BLINDADA VIA WHATSAPP
              </a>
              <p className="nm-text-muted text-xs mt-3 text-center md:text-left">
                Garantia de 7 dias • Frete Grátis • Parcele em 12x
              </p>
            </div>
          </div>

          {/* Product image */}
          <div className="md:w-[40%] flex justify-center order-first md:order-last">
            {/* IMAGEM DO PRODUTO: coloque o arquivo em public/produto.png */}
            <img
              src={`${import.meta.env.BASE_URL}produto.png`}
              alt="Mente Blindada — Magnésio L-Treonato 60 Cápsulas"
              className="w-[260px] md:w-[300px] rounded-3xl object-contain"
              style={{
                border: "2px solid hsl(var(--nm-accent-green))",
                boxShadow: "0 0 80px hsl(161 100% 39% / 0.25)",
                background: "linear-gradient(135deg, #1A0A3D 0%, #0A2A1F 50%, #0D1B2A 100%)",
                padding: "16px",
              }}
              onError={(e) => {
                const el = e.currentTarget;
                el.style.display = "none";
                const placeholder = el.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = "flex";
              }}
            />
            {/* Placeholder enquanto não há imagem */}
            <div className="nm-product-placeholder rounded-3xl w-[260px] h-[340px] md:w-[300px] md:h-[400px] flex-col items-center justify-center text-center p-8 hidden">
              <span className="font-headline font-extrabold text-2xl md:text-3xl mb-2">MENTE BLINDADA</span>
              <span className="nm-text-green font-mono-sci text-sm mb-1">Magnésio L-Treonato</span>
              <span className="nm-text-muted text-sm">+ Vitamina D3</span>
              <div className="w-16 h-px nm-bg-green opacity-30 my-4" />
              <span className="text-xs nm-text-muted">60 Cápsulas Softgel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
