function Contato() {
  return (
    <section id="contato" className="bg-ivory text-night">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gold/40 bg-white px-6 py-10 text-center shadow-sm sm:px-10 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy">Fale com a nossa equipe</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Vamos conversar sobre a sua documentação?</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-night/70">
            Entre em contato para saber mais sobre nossos serviços e como
            podemos ajudar.
          </p>
          <a href="https://wa.me/+559980444352"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-lg bg-gold px-6 py-3 font-semibold text-night transition-colors hover:bg-navy hover:text-ivory"
          >
            <img
              src="/images/WA-logo.png"
              alt="Fale com a nossa equipe pelo WhatsApp."
              className="h-5 w-5 object-contain rounded-2xl"
            />
            Fale pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contato;
