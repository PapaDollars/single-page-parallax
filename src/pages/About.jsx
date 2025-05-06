
// src/pages/About.jsx
import { aboutData } from '../data/siteData';

const About = () => {
  const { title, content } = aboutData;

  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-2xl font-medium text-center mb-6">{title}</h4>
          <p className="text-gray-600 font-light text-left">{content}</p>
        </div>
      </div>
    </section>
  );
};

export default About;