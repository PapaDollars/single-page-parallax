// src/pages/About.jsx
import { aboutData } from '../data/siteData';

const About = () => {
  const { title, content } = aboutData;

  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4">
          <h4 className="text-3xl font-medium text-center mb-8 text-green-700">{title}</h4>
          <p className="text-gray-700 leading-relaxed text-lg">{content}</p>
          <div className="mt-8 flex justify-center">
            <a 
              href="#contact" 
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;