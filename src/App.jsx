import About from './ui/About';
import Hero from './ui/Hero';
import NavBar from './ui/NavBar';

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      {/* <h1 className="text-3xl text-white underline">Hello, Three.js</h1> */}
      <NavBar />
      <Hero />
      <About />
    </main>
  );
}

export default App;
