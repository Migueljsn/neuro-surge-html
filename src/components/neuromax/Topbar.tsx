import { useEffect, useState } from "react";

const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ background: "hsl(var(--nm-accent-green))" }}
    >
      <div className="max-w-page mx-auto px-4 py-2.5 text-center">
        <p className="font-headline font-700 text-sm md:text-base tracking-wide uppercase"
           style={{ color: "hsl(var(--nm-bg-dark))" }}>
          🔥 ENTREGANDO EM PIRACURUCA E REGIÃO — 49% OFF | Apenas 11 unidades restantes | Frete Grátis
        </p>
      </div>
    </div>
  );
};

export default Topbar;
