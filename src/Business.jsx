function Business () {
    return (
        <section id="localizacao" className="bg-white px-4 py-16 text-night">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">
                    Localização e avaliações
                </h2>

                <p className="mt-4 max-w-2xl text-gray-700">
                    Encontre nosso escritório e conheça as opiniões de quem já
                    utilizou nossos serviços.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <a href="https://share.google/RjACIVe5xNMyrNQB1" target="_blank" rel="noopener noreferrer" className="rounded-md bg-navy px-5 py-3 font-semibold text-white transition hover:bg-night">
                        Ver no Google Maps
                    </a>

                    <a href="https://share.google/RjACIVe5xNMyrNQB1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-navy px-5 py-3 font-semibold text-navy transition hover:bg-ivory">
                        Ver avaliações no Google
                    </a>
                </div>

                <div className="mt-10 aspect-4/3 w-full overflow-hidden rounded-xl shadow-lg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.3980154533733!2d-46.566543922232384!3d-23.625913063971588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d69f38a99e1%3A0xa422e296dd17d304!2sAirton%20Vieira%20Despachante!5e0!3m2!1sen!2suk!4v1793363180832!5m2!1sen!2suk"  
                    title="Localização do escritório Airton Vieira Despachante"
                    className="h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>
            </div>
        </section>
    )
}
export default Business;