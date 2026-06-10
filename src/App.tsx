import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Stack } from "./components/Stack/Stack";
import { Contact } from "./components/Contact/Contact";
import { ParticlesBackground } from "./components/ParticlesBackground/ParticlesBackground";

function App() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
