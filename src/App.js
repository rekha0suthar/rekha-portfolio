import './App.css';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
};

export default App;
