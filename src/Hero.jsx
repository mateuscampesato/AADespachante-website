function Hero () {
    return (
        <section id="inicio" className="bg-navy text-ivory">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
                <div>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
                        Despachante em São Caetano do Sul - SP
                    </p>

                    <h1 className="font-display text-4xl font-semibold leading-tight tracking-widest sm:text-5xl"
                    >
                        Documentação em dia. Tranquilidade para você.
                    </h1>

                    <p className="mt-8 max-w-xl leading-7 text-ivory/80">
                        Conte com a nossa equipe para licenciamento, transferência,
                        primeiro emplacamento e renovação de CNH.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a 
                            href="#contato"
                            className="rounded-md bg-gold px-6 py-3 font-semibold text-night transition-colors hover:bg-ivory"
                            >
                               Fale com nossa equipe 
                        </a>
                        <a 
                            href="#servicos"
                            className="rounded-md border border-ivory/50 px-6 py-3 font-semibold transition-colors hover:border-gold hover:text-gold"
                            >
                                Conheça nossos serviços
                        </a>
                    </div>
                </div>

                <div className="mx-auto rounded-full border border-gold/70 bg-ivory p-5 shadow-xl">
                    <img 
                        src="/images/logo-airton-andrea.png" 
                        alt="Logo Airton Vieira & Andrea Pedroso Despachante" 
                        className="h-52 w-52 object-contain sm:h-64 sm:w-64"
                    />
                </div>
            </div>

        </section>
    );
}

export default Hero;