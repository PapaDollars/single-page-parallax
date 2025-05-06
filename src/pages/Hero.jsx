// src/pages/Hero.jsx
import { heroData } from '../data/siteData';

const Hero = () => {
  const { title, subtitle, buttonText, buttonUrl, backgroundImage } = heroData;

  return (
    <section id="hero" className="parallax-container">
      <div className="section">
        <div className="container mx-auto text-center py-16">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-teal-lighten-2">{title}</h1>
          <div className="max-w-3xl mx-auto">
            <h5 className="text-xl font-light text-gray-800 mb-8">{subtitle}</h5>
          </div>
          <div>
            <a 
              href={buttonUrl} 
              className="bg-teal-lighten-1 hover:bg-teal text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
      <div className="parallax">
        <img src={backgroundImage} alt="Background" />
      </div>
    </section>
  );
};

export default Hero;
