import { useState } from "react";

type Qty = 1 | 2 | 3 | 4 | 5 | 6;

const WA_NUMBER = "5586999315131";

const QTY_OPTIONS: { value: Qty; label: string; detail: string }[] = [
  { value: 1, label: "1 Frasco", detail: "R$ 64,99 • Frete Grátis" },
  { value: 2, label: "2 Frascos", detail: "R$ 119,98 • Frete Grátis ⚡" },
  { value: 3, label: "3 Frascos", detail: "R$ 164,97 • Frete Grátis + 5% OFF" },
  { value: 4, label: "4 Frascos", detail: "R$ 199,96 • Frete Grátis + 8% OFF" },
  { value: 5, label: "5 Frascos", detail: "R$ 234,95 • Frete Grátis + 10% OFF" },
  { value: 6, label: "6 Frascos", detail: "R$ 259,94 • Frete Grátis + 15% OFF ⭐" },
];

const getWhatsAppUrl = (qty: Qty) => {
  const opt = QTY_OPTIONS.find((o) => o.value === qty)!;
  const msg = `Olá! Quero garantir *${opt.label}* do Mente Blindada com 49% OFF (${opt.detail}). Sou de Piracuruca/região. 🧠`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
};

const OfferSection = () => {
  const [quantity, setQuantity] = useState<Qty>(1);
  return (
    <section id="checkout" className="nm-gradient-deep py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-10 px-2">
          <span className="nm-badge-warn inline-block px-4 py-2 rounded-full text-sm font-headline font-bold uppercase tracking-wider animate-pulse-subtle text-center">
            🔥 OFERTA POR TEMPO LIMITADO — RESTAM APENAS 11 UNIDADES
          </span>
        </div>

        <h2 className="font-headline font-extrabold text-3xl md:text-[48px] md:leading-tight text-center mb-12 px-2">
          Dê ao Seu Cérebro o Upgrade Que Ele Merece — Hoje.
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Product */}
          {/* IMAGEM DO PRODUTO: coloque o arquivo em public/produto-checkout.png */}
          <div className="flex-shrink-0 w-full flex justify-center md:block md:w-auto">
            <img
              src={`${import.meta.env.BASE_URL}produto-checkout.png`}
              alt="Mente Blindada — Magnésio L-Treonato"
              className="w-[240px] md:w-[300px] rounded-3xl object-contain"
              style={{
                border: "2px solid hsl(var(--nm-accent-green))",
                boxShadow: "0 0 60px hsl(161 100% 39% / 0.25)",
                background: "linear-gradient(135deg, #1A0A3D 0%, #0A2A1F 50%, #0D1B2A 100%)",
                padding: "14px",
              }}
              onError={(e) => {
                const el = e.currentTarget;
                el.style.display = "none";
                const placeholder = el.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = "flex";
              }}
            />
            <div className="nm-product-placeholder rounded-3xl w-[240px] h-[320px] md:w-[300px] md:h-[380px] flex-col items-center justify-center text-center p-8 hidden">
              <span className="font-headline font-extrabold text-2xl md:text-3xl mb-2">MENTE BLINDADA</span>
              <span className="nm-text-green font-mono-sci text-sm mb-1">Magnésio L-Treonato</span>
              <span className="nm-text-muted text-sm">+ Vitamina D3</span>
              <div className="w-16 h-px nm-bg-green opacity-30 my-4" />
              <span className="text-xs nm-text-muted">60 Cápsulas Softgel</span>
            </div>
          </div>

          {/* Price block */}
          <div className="flex-1 w-full min-w-0">
            <h3 className="font-headline font-bold text-xl mb-1 text-center md:text-left">
              Magnésio Treonato — Mente Blindada
            </h3>
            <div className="w-full h-px bg-muted/30 my-4" />

            <div className="mb-4 text-center md:text-left">
              <span className="line-through nm-text-muted text-lg">R$ 126,90</span>
              <div className="flex items-baseline gap-3 mt-1 justify-center md:justify-start">
                <span className="font-headline font-extrabold text-4xl md:text-5xl nm-text-green">R$ 64,99</span>
                <span className="nm-badge-warn px-3 py-1 rounded-full text-sm font-bold">49% OFF</span>
              </div>
              <p className="nm-text-muted text-sm mt-2">
                em até 12x de <span className="font-semibold text-foreground">R$ 6,49</span> sem juros
              </p>
            </div>

            {/* Delivery FULL */}
            <div className="rounded-xl p-4 mb-4 border border-green-500/25 bg-green-500/5">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-lg">📍</span>
                <span className="text-sm text-white">
                  Chegará em <strong className="nm-text-green">Piracuruca e região</strong> em até <strong className="nm-text-green">3 dias úteis</strong>
                </span>
              </div>
              <p className="text-xs nm-text-muted">
                Enviamos para Piracuruca, Batalha, Buriti dos Lopes, Cocal e toda a região Norte do Piauí — Frete Grátis
              </p>
            </div>

            <div className="nm-section-card rounded-xl p-4 mb-6 border border-muted/20">
              <p className="nm-text-green text-sm font-semibold">💚 PIX: 5% OFF adicional + Envio Prioritário</p>
            </div>

            {/* Quantity selector */}
            <p className="text-xs nm-text-muted mb-2 font-headline uppercase tracking-wider">
              Quantidade — <span className="nm-text-green">Frete Grátis em todos os kits</span>
            </p>
            <div className="space-y-2 mb-6">
              {QTY_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-3 p-3 md:p-4 rounded-xl cursor-pointer border transition-colors ${
                    quantity === opt.value ? "nm-border-green nm-section-card" : "border-muted/20"
                  }`}
                  onClick={() => setQuantity(opt.value)}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                      quantity === opt.value ? "nm-border-green" : "border-muted"
                    }`}
                  >
                    {quantity === opt.value && <div className="w-2.5 h-2.5 rounded-full nm-bg-green" />}
                  </div>
                  <span className="text-sm leading-tight">
                    <strong>{opt.label}</strong>{" "}
                    <span className="nm-text-muted">— {opt.detail}</span>
                  </span>
                </label>
              ))}
            </div>

            {/* Stock bar */}
            <div className="mb-6">
              <p className="nm-text-warn text-sm font-semibold mb-2">⚠️ Estoque crítico: apenas 11 unidades disponíveis</p>
              <div className="nm-stock-bar h-2.5 rounded-full overflow-hidden">
                <div className="nm-stock-fill h-full rounded-full" />
              </div>
            </div>

            {/* CTA */}
            <a
              href={getWhatsAppUrl(quantity)}
              target="_blank"
              rel="noopener noreferrer"
              className="nm-cta block w-full text-center px-6 py-5 rounded-xl text-base md:text-lg"
            >
              💬 GARANTIR MINHA MENTE BLINDADA VIA WHATSAPP
            </a>
            <p className="nm-text-muted text-xs text-center mt-3">
              Compra 100% segura • Garantia de 7 dias • Atendimento direto no WhatsApp
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-8 text-xs nm-text-muted">
              <span>🔒 Compra Segura</span>
              <span>🚚 Frete Grátis</span>
              <span>↩️ 7 Dias Garantia</span>
              <span>✅ 3.910 Vendidos</span>
            </div>

            <p className="text-center nm-text-muted text-xs mt-4">
              VISA • Mastercard • Elo • Hipercard • PIX • Boleto • Amex
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
