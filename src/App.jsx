import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Method from "./components/Method";
import GiantMarquee from "./components/GiantMarquee";
import Work from "./components/Work";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Method />
        <GiantMarquee />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
