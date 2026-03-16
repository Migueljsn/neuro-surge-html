const Footer = () => {
  return (
    <footer className="py-10 px-4" style={{ backgroundColor: "hsl(220 33% 2%)" }}>
      <div className="max-w-content mx-auto text-center">
        <p className="nm-text-muted text-sm mb-6">© 2025 Mente Blindada. Todos os direitos reservados.</p>
        <p className="nm-text-muted text-xs leading-relaxed mb-6 max-w-2xl mx-auto">
          ⚠️ AVISO LEGAL: Este produto é um suplemento alimentar e não substitui tratamentos médicos. Os resultados podem variar. Consulte um médico antes de iniciar qualquer suplementação. As afirmações sobre estudos científicos são baseadas em pesquisas publicadas sobre Magnésio L-Treonato em geral.
        </p>
        <div className="flex justify-center gap-6 text-xs nm-text-muted">
          <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-foreground transition-colors">Trocas e Devoluções</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
