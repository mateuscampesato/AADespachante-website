const servicos = [
    {
        nome: "Licenciamento",
        descricao: "Atendimento para o licenciamento do veículo.",
    },
    {
        nome: "Transferência",
        descricao: "Apoio com a Transferência de propriedade do veículo",
    },
    {
        nome: "Primeiro emplacamento",
        descricao: "Atendimento para o primeiro registro e emplacamento.",
    },
    {
        nome: "Renovação de CNH",
        descricao: "Apoio no processo de renovação da CNH."
    }
]

function Servicos() {
    return (
        <section id="servicos" className="bg-white text-night">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-navy">
                        Como podemos ajudar
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                        Nossos serviços
                    </h2>
                    <p className="mt-4 leading-7 text-night/70">
                        Conheça alguns dos serviços oferecidos pela nossa equipe.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {servicos.map((servico, index) => (
                        <article key={servico.nome} className="flex h-full flex-col rounded-xl border border-navy/10 bg-ivory p-6">
                            <span className="text-sm font-semibold text-gold">
                                0{index + 1}
                            </span>
                            <h3 className="mt-4 text-lg font-semibold">
                                {servico.nome}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-night/70">
                                {servico.descricao}
                            </p>
                            <a 
                                href="#contato"
                                className="mt-auto pt-5 inline-block text-sm font-semibold text-navy hover:text-gold"
                            >
                                Fale conosco →
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Servicos;