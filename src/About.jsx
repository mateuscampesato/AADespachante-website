function About() {
  return (
    <section id="sobre" className="bg-ivory text-night">
      <div className="mx-auto grid mx-w-7xl gap-10 px-4 py-16 sm:py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-navy">
            Sobre nós
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Airton Vieira & Andrea Pedroso
          </h2>
          <p className="mt-6 mx-w-2xl leading-7 text-night/75">
            A Airton Vieira & Andrea Pedroso Despachante oferece serviços de despachante desde 1974 em São Caetano do Sul, SP. Ajudamos com
            serviços de documentação veicular, incluindo licenciamento,
            transferência, primeiro emplacamento e renovação de CNH.
          </p>
          <p className="mt-4 mx-w-2xl leading-7 text-night/75">
            Fale com nossa equipe para saber qual serviço atende à sua
            necessidade.
          </p>
        </div>

        <aside className="rounded-2xl border border-gold/50 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-navy">Nossa localização</p>
          <p className="mt-3 font-display text-2xl font-semibold">São Caetano do Sul</p>
          <p className="mt-2 text-night/70">São Paulo - SP</p>
          <p className="text-sm">Av. Vital Brasil Filho, 435 - Osvaldo Cruz.</p>
          <p className="text-sm">09541-130, Brazil</p>
          <a className="mt-6 inline-block font-semibold text-navy transition-colors hover:text-gold" href="#contato">Entre em contato →</a>
        </aside>
      </div>
    </section>
  );
}
export default About;
