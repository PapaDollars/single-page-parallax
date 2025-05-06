// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Features from './pages/Features';
import Parallax1 from './pages/Parallax1';
import About from './pages/About';
import Contact from './pages/Contact';
import Parallax2 from './pages/Parallax2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Parallax1 />
      <About />
      <Contact />
      <Parallax2 />
      <Footer />
    </div>
  );
}

export default App;


