import { motion } from "framer-motion";
import { Check } from "lucide-react";
import img1 from "@/assets/1 mês.png";
import img3 from "@/assets/3 meses-2.png";
import img6 from "@/assets/6 meses-2.png";

declare function fbq(...args: unknown[]): void;

const offers = [
  {
    title: "1 Mês",
    price: "R$ 64,99",
    oldPrice: "99,90",
    highlight: false,
    link: "https://seguro.amevitnutrition.com.br/r/MA0YY3M9O7",
    image: img1,
  },
  {
    title: "3 Meses",
    price: "R$ 164,97",
    oldPrice: "299,70",
    highlight: true,
    link: "https://seguro.amevitnutrition.com.br/r/7FAXVXDLS7",
    image: img3,
  },
  {
    title: "6 Meses",
    price: "R$ 259,94",
    oldPrice: "599,40",
    highlight: false,
    link: "https://seguro.amevitnutrition.com.br/r/PCH7AYYGDO",
    image: img6,
  },
];

const handleOfferClick = (link: string) => {
  try {
    fbq("track", "InitiateCheckout");
  } catch {
    // pixel não carregado em dev
  }
  window.open(link, "_blank", "noopener,noreferrer");
};

const OfferSection = () => {
  return (
    <section id="oferta" className="bg-background py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-glow-purple text-sm font-bold uppercase tracking-widest">
            Oferta especial
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3">
            Escolha sua melhor opção
          </h2>
        </motion.div>

        {/* GRID DE OFERTAS */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {offers.map((offer, i) => (
            <div
              key={i}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(80,64,160,0.4)] ${
                offer.highlight
                  ? "border-[#5040a0] shadow-[0_0_20px_rgba(80,64,160,0.3)]"
                  : "border-border"
              } bg-card`}
            >
              {/* Product */}
              <div className="p-6 relative flex justify-center">
                <img
                  src={offer.image}
                  alt="Amevit Treonato"
                  className="w-40 drop-shadow-2xl"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {offer.title}
                </h3>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-[#5040a0]" />
                    Magnésio L-Treonato puro
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-[#5040a0]" />
                    Entrega rápida
                  </div>
                </div>

                {/* Preço */}
                <div className="mb-4">
                  <p className="text-muted-foreground line-through text-sm">
                    De R${offer.oldPrice}
                  </p>
                  <p className="text-3xl font-black text-foreground">
                    {offer.price}
                  </p>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleOfferClick(offer.link)}
                  className={`block w-full py-3 rounded-full font-bold transition-all duration-300 ${
                    offer.highlight
                      ? "bg-[#5040a0] text-white shadow-lg hover:shadow-[0_0_20px_rgba(80,64,160,0.6)] hover:scale-105"
                      : "bg-[#5040a0]/10 text-[#5040a0] hover:bg-[#5040a0]/20"
                  }`}
                >
                  👉 Escolher
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
