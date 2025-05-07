// src/components/Footer.jsx
import { footerData } from '../data/siteData';
import { FaLeaf } from 'react-icons/fa';

const Footer = () => {
  const { companyBio, settings, connect, copyright } = footerData;
  
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-xl font-medium mb-4 flex items-center">
              <FaLeaf className="mr-2" />
              {companyBio.title}
            </h5>
            <p className="text-gray-200">{companyBio.description}</p>
          </div>
          
          <div>
            <h5 className="text-xl font-medium mb-4">{settings.title}</h5>
            <ul>
              {settings.links.map((link) => (
                <li key={link.id} className="mb-2">
                  <a href={link.url} className="text-gray-200 hover:text-white transition-colors duration-300">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-xl font-medium mb-4">{connect.title}</h5>
            <ul>
              {connect.links.map((link) => (
                <li key={link.id} className="mb-2">
                  <a href={link.url} className="text-gray-200 hover:text-white transition-colors duration-300">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="py-4 bg-green-900 text-center">
        <div className="container mx-auto">
          <p className="text-gray-300">
            {copyright.text}{' '}
            <a href={copyright.link.url} className="text-white hover:text-gray-200">
              {copyright.link.text}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;