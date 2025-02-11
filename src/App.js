import './App.css';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import ParticlesBackground from './components/ParticlesBackground';

const App = () => {
  return (
    <div className="App">
      {/* Particles should be in the background */}
      <ParticlesBackground />

      {/* Navbar (Fixed at the top) */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
