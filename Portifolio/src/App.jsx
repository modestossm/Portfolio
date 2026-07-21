import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Projects />
      <Ticker />
      <Skills />
      <Contact />
    </>
  );
}
