// src/pages/Hero.jsx
import { heroData } from '../data/siteData';
import backgroundImage from '../assets/images/background1.jpg';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const { title, subtitle, buttonText, buttonUrl } = heroData;
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        const parallaxElement = parallaxRef.current.querySelector('img');
        // L'effet parallax: déplace l'image à une vitesse différente du défilement
        parallaxElement.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden" style={{ height: '100vh' }}>
      <div className="absolute inset-0 z-0" ref={parallaxRef}>
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover"
          style={{ transform: 'translateY(0)', minHeight: '130%' }} 
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full w-full bg-black bg-opacity-30">
        <div className="container mx-auto text-center py-16">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-white">{title}</h1>
          <div className="max-w-3xl mx-auto">
            <h5 className="text-xl md:text-2xl font-light text-white mb-8">{subtitle}</h5>
          </div>
          <div>
            <a 
              href={buttonUrl} 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;