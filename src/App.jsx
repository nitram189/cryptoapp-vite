import FooterData from "../components/FooterData";
import Header from "../components/Header";
import Home from "../components/Home";
import Market from "../components/Market";
import News from "../components/News";
import Quote from "../components/Quote";
import Support from "../components/Support";


export default function App() {

  return (
    <>
      <Header />

      <main className="snap-y snap-mandatory relative w-full h-screen overflow-auto scroll-y">

        <section id='home' className="snap-center">
          <Home />
        </section>

        <section id='quote' className="sm:px-10 px-4 snap-center">
          <Quote />
        </section>

        <section id="market" className="sm:px-10 px-4 snap-center">
          <Market />
        </section>

        <section id="news" className="sm:px-10 px-4 snap-center">
          <News />
        </section>

        <section id="support" className="sm:px-10 px-4 snap-center">
          <Support />
        </section>
      </main>

      <footer className="py-3 px-10 w-full bottom-0 left-0 fixed z-40 backdrop-blur-2xl">
        <FooterData/>
      </footer>

    </>
  )
}
