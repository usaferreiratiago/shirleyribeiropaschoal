export function SiteFooter() {
  return (
    <footer className="bg-background py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-3">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-lg font-semibold text-ink">INSIGHT CLINICA</span>
              <span className="text-xs uppercase tracking-[0.25em] text-stone">
                Engenharia · Desde 2011
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-foreground/60">
              Projetos e construções no Vale do Aço — Coronel Fabriciano/MG.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-foreground/70">
            <a href="/sobre" className="hover:text-ink">
              Sobre
            </a>
            <a href="/servicos" className="hover:text-ink">
              Serviços
            </a>
            <a href="/portfolio" className="hover:text-ink">
              portfolio
            </a>
            <a href="/pacientes" className="hover:text-ink">
              pacientes
            </a>
            <a href="/contato" className="hover:text-ink">
              Contato
            </a>
          </nav>
          <div className="text-sm text-foreground/70">
            <div>contato@insightclinica.com.br</div>
            <div className="mt-1">(31) 0000-0000</div>
            <div className="mt-3 text-xs text-stone">CNPJ 38.039.512/0001-34</div>
          </div>
        </div>
        <div className="mt-10 text-xs text-stone">
          © {new Date().getFullYear()} Insight Clínica.
        </div>
      </div>
    </footer>
  );
}
