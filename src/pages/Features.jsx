
// src/pages/Features.jsx
import { featuresData } from '../data/siteData';
import { FaBolt, FaUsers, FaCog } from 'react-icons/fa';

const Features = () => {
  // Map des icônes par clé
  const iconMap = {
    'flash_on': <FaBolt className="text-3xl text-brown-text" />,
    'group': <FaUsers className="text-3xl text-brown-text" />,
    'settings': <FaCog className="text-3xl text-brown-text" />
  };

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <div key={feature.id} className="text-center px-4">
              <div className="mb-4">
                {iconMap[feature.icon]}
              </div>
              <h5 className="text-xl font-medium mb-4">{feature.title}</h5>
              <p className="text-gray-600 font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
