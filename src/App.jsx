import About from './ui/About';
import Clients from './ui/Clients';
import Contact from './ui/Contact';
import Hero from './ui/Hero';
import NavBar from './ui/NavBar';
import Projects from './ui/Projects';

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      {/* <h1 className="text-3xl text-white underline">Hello, Three.js</h1> */}
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Contact />
    </main>
  );
}

export default App;
