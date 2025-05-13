// src/pages/Parallax1.jsx - Version corrigée
import { parallaxData } from '../data/siteData';
import backgroundImage from '../assets/images/Parallax1.jpg';
import { useEffect, useRef, useState } from 'react';

const Parallax1 = () => {
  const { text } = parallaxData[1];

  return (
    <section className="relative overflow-hidden" style={{ height: '400px' }}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      
      {/* Vagues animées */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="relative block w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="m-160,44c30,0,58-18,88-18s58,18,88,18,58-18,88-18,58,18,88,18v44h-352z"
            />
          </defs>
          <g className="animate-wave-slow">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(16, 185, 129, 0.3)" />
          </g>
          <g className="animate-wave-medium">
            <use href="#gentle-wave" x="48" y="3" fill="rgba(16, 185, 129, 0.2)" />
          </g>
          <g className="animate-wave-fast">
            <use href="#gentle-wave" x="48" y="5" fill="rgba(16, 185, 129, 0.1)" />
          </g>
          <g className="animate-wave-fastest">
            <use href="#gentle-wave" x="48" y="7" fill="rgba(16, 185, 129, 0.05)" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h5 className="text-2xl md:text-3xl font-light text-white drop-shadow-lg animate-bounce-slow">
              {text}
            </h5>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave-slow {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-25%) translateY(-10px); }
        }
        @keyframes wave-medium {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-15%) translateY(-5px); }
        }
        @keyframes wave-fast {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-10%) translateY(-3px); }
        }
        @keyframes wave-fastest {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-5%) translateY(-1px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-wave-slow { animation: wave-slow 3s infinite linear; }
        .animate-wave-medium { animation: wave-medium 2s infinite linear; }
        .animate-wave-fast { animation: wave-fast 1.5s infinite linear; }
        .animate-wave-fastest { animation: wave-fastest 1s infinite linear; }
        .animate-bounce-slow { animation: bounce-slow 4s infinite; }
      `}</style>
    </section>
  );
};

export default Parallax1;