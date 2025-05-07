// src/pages/Parallax1.jsx
import { parallaxData } from '../data/siteData';
import backgroundImage from '../assets/images/background2.jpg';
import { useEffect, useRef } from 'react';

const Parallax1 = () => {
  const { text } = parallaxData[0];
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
    <section className="relative overflow-hidden" style={{ height: '300px' }}>
      <div className="absolute inset-0 z-0" ref={parallaxRef}>
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover"
          style={{ transform: 'translateY(0)', minHeight: '130%' }} 
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full w-full bg-black bg-opacity-50">
        <div className="container mx-auto">
          <div className="text-center">
            <h5 className="text-2xl font-light text-white">{text}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax1;