import './App.scss';
import { Routes, Route ,useLocation} from 'react-router-dom';

import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume/index'; 
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/Navbar';

import ParticlesComponent from './utils.js/particles';

function App() {

  const location = useLocation();
  console.log(location);

  const renderParticleJsInHome=location.pathname ==="/"; 


  return (
    <div className="App">
      {/* Particles.js */}

      {
        renderParticleJsInHome &&
        <ParticlesComponent id="particles" />
      }


      {/* Navbar */}
      <Navbar />
      {/* Main page content */}
      <div className='App_main-page-content'></div>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
