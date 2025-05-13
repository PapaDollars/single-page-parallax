// src/pages/Parallax2.jsx - Version corrigée
import { parallaxData } from '../data/siteData';
import backgroundImage from '../assets/images/Parallax2.jpg';
import { useEffect, useRef, useState } from 'react';

const Parallax2 = () => {
  const { text } = parallaxData[1];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className="relative overflow-hidden cursor-pointer" 
      style={{ height: '400px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Couches d'arrière-plan avec transitions */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ${isHovered ? 'scale-110 rotate-2' : 'scale-100'}`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className={`absolute inset-0 transition-all duration-1000 ${isHovered ? 'bg-blue-900/60' : 'bg-green-900/60'}`}></div>
      </div>

      {/* Formes animées */}
      <div className="absolute inset-0">
        <div className={`absolute w-48 h-48 transition-all duration-2000 ${isHovered ? 'scale-150 rotate-180' : 'scale-100'}`}
             style={{ 
               left: '10%', 
               top: '20%',
               background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
               clipPath: isHovered ? 'circle(50% at 50% 50%)' : 'polygon(50% 0%, 0% 100%, 100% 100%)'
             }}>
        </div>
        <div className={`absolute w-32 h-32 transition-all duration-1500 ${isHovered ? 'scale-125 -rotate-90' : 'scale-100'}`}
             style={{ 
               right: '15%', 
               top: '30%',
               background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.1))',
               borderRadius: isHovered ? '50%' : '0%'
             }}>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h5 className={`text-2xl md:text-3xl font-light text-white transition-all duration-700 ${isHovered ? 'scale-110 text-yellow-300' : 'scale-100'}`}>
              {text}
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax2;