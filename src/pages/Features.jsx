// src/pages/Features.jsx
import { featuresData } from '../data/siteData';
import { FaSeedling, FaLeaf, FaUserFriends } from 'react-icons/fa';

const Features = () => {
  // Map des icônes par clé
  const iconMap = {
    'flash_on': <FaSeedling className="text-4xl text-green-600" />,
    'group': <FaLeaf className="text-4xl text-green-600" />,
    'settings': <FaUserFriends className="text-4xl text-green-600" />
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-12 text-gray-800">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <div key={feature.id} className="text-center px-6 py-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6 flex justify-center">
                {iconMap[feature.icon]}
              </div>
              <h5 className="text-xl font-medium mb-4 text-gray-800">{feature.title}</h5>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;