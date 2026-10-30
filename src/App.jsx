import Navbar from "./Navbar"
import Footer from "./Footer"
import Hero from "./Hero"
import About from "./About"
import Servicos from "./Serviços"
import Contato from "./Contato"
import Business from "./Business"

export default function App() {
  // Guided build: add one section at a time, starting with the page structure.
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-ivory text-night">
      {
        <>
          <Hero />
          <About />
          <Servicos />
          <Contato />
          <Business />
        </>
      }
    </main>
    <Footer />
    </>
  ) 
}
