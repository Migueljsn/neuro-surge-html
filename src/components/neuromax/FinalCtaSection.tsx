const WA_URL = "https://wa.me/5586999315131?text=" + encodeURIComponent("Olá! Quero garantir o Mente Blindada com 49% OFF. Sou de Piracuruca/região. 🧠");

const FinalCtaSection = () => {
  return (
    <section className="nm-gradient-diagonal py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8 text-center">
        <h2 className="font-headline font-extrabold text-3xl md:text-[52px] md:leading-tight mb-6">
          Seu Cérebro Trabalhou Duro por Você. Chegou a Hora de Retribuir.
        </h2>
        <p className="nm-text-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Cada dia sem o magnésio certo é um dia com menos conexões, menos memória, menos você. O Mente Blindada não é milagre — é ciência. E agora está com 49% OFF por tempo limitado.
        </p>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
          onClick={() => (window as any).fbq?.('track', 'Contact')}
          className="nm-cta inline-block px-10 py-5 rounded-xl text-base md:text-lg">
          💬 COMEÇAR MEU UPGRADE CEREBRAL VIA WHATSAPP
        </a>
        <p className="nm-text-muted text-sm mt-6">
          Mais de 3.910 pessoas já tomaram essa decisão. <span className="nm-stars">⭐⭐⭐⭐⭐</span>
        </p>
        <p className="nm-text-muted text-xs mt-3">
          📍 Entregamos em Piracuruca e toda a região Norte do Piauí em até 3 dias úteis
        </p>
      </div>
    </section>
  );
};

export default FinalCtaSection;
