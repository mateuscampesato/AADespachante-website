function Footer() {
  return (
    <footer className="bg-night text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/logo-airton-andrea1-preview.png"
              alt=""
              className="h-14 w-14 p-1 rounded-full object-contain bg-white"
            />
            <p className="font-semibold">Airton Vieira & Andrea Pedroso</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-ivory/75">
            Despachante em São Caetano do Sul - SP.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-gold">Links rápidos</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-gold" href="#inicio">
                Início
              </a>
            </li>
            <li>
              <a className="hover:text-gold" href="#sobre">
                Sobre
              </a>
            </li>
            <li>
              <a className="hover:text-gold" href="#servicos">
                Serviços
              </a>
            </li>
            <li>
              <a className="hover:text-gold" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Contato</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-gold" href="https://wa.me/5511980444352">
                Andrea: +55 99 8044-4352
              </a>
            </li>
            <li>
              <a className="hover:text-gold" href="https://wa.me/5511977760288">
                Airton: +55 11 97776-0288
              </a>
            </li>
            <li>
              <a
                className="hover:text-gold"
                href="mailto:andrea_christine@hotmail.com "
              >
                ANDREA_CHRISTINE@HOTMAIL.COM
              </a>
            </li>
            <li>São Caetano do Sul - SP</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-4 py-4 text-xs text-ivory/60 text-center">
          © {new Date().getFullYear()} Airton Vieira & Andrea Pedroso. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
