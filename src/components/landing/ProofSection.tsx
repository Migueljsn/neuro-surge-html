import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// 👉 IMPORTA SUAS IMAGENS AQUI
import img1 from "@/assets/Depoimento1.jpeg";
import img2 from "@/assets/Depoimento 2.jpeg";
import img3 from "@/assets/Depoimento 3.jpeg";
import img4 from "@/assets/Depoimento 4.jpeg";

const testimonials = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
];

const ProofSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-black text-foreground mb-3">
            Quem está usando em Teresina{" "}
            <span className="text-gradient">já está sentindo a diferença</span>
          </h2>
          <p className="text-muted-foreground">Depoimentos reais de clientes</p>
        </motion.div>

        {/* CARROSSEL */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border">
                <img
                  src={t.image}
                  alt="Depoimento cliente"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProofSection;