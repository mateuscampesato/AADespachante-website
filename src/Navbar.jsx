import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-navy text-ivory shadow-md">
      <div className="hidden sm:block border-b border-white/15">
        <div className="mx-auto hidden max-w-7xl gap-2 px-4 py-4 text-sm sm:flex sm:items-center sm:justify-between">
          <a
            href="mailto:andreapedroso@gmail.com"
            className="transition-colors hover:text-gold"
          >
            ANDREA_CHRISTINE@HOTMAIL.COM
          </a>
          <span>São Caetano do Sul, SP</span>
          <a className="hover:text-gold" href="https://wa.me/5511980444352">
            Andrea: +55 11 98044-4352
          </a>
          <a className="hover:text-gold" href="https://wa.me/5511977760288">
            Airton: +55 11 97776-0288
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-4 items-center px-4 mt-10 md:flex-row md:items-center md:justify-evenly md:gap-10">
        <div className="flex w-full items-start justify-between md:w-auto">
            <a
          className="flex items-center gap-3"
          href="#inicio"
          aria-label="Ir para o inicio"
        >
          <img
            src="/images/logo-airton-andrea1-preview.png"
            alt="Airton Vieira & Andrea Pedroso Despachante"
            className="h-16 w-16 p-1 shrink-0 object-contain rounded-full bg-white"
          />
          <span className="leading-tight">
            <span className="block font-semibold">
              Airton Vieira & Andrea Pedroso
            </span>
            <span className="mt-1 block text-xs uppercase tracking-widest text-gold text-center">
              Despachante
            </span>
          </span>
        </a>
        
        <button
          type="button"
          className="rounded p-2 text-2xl text-ivory hover:text-gold md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
        </div>
        <div>

        </div>
        <nav
          id="menu-principal"
          aria-label="Navegação principal"
          className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col items-center gap-4 text-sm font-medium md:flex-row md:justify-center md:gap-8">
            <li>
              <a
                className="transition-colors hover:text-gold"
                href="#inicio"
                onClick={() => setMenuOpen(false)}
              >
                Início
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-gold"
                href="#sobre"
                onClick={() => setMenuOpen(false)}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-gold"
                href="#servicos"
                onClick={() => setMenuOpen(false)}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-gold"
                href="#contato"
                onClick={() => setMenuOpen(false)}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
