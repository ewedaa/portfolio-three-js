import About from './ui/About';
// import Clients from './ui/Clients';
import Contact from './ui/Contact';
import Experience from './ui/Experience';
import Footer from './ui/Footer';
import Hero from './ui/Hero';
import NavBar from './ui/NavBar';
import Projects from './ui/Projects';

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      {/* <Clients /> */}
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
