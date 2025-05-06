
// src/components/Footer.jsx
import { footerData } from '../data/siteData';
import Copyright from './Copyright';

const Footer = () => {
  const { companyBio, settings, connect } = footerData;
  
  return (
    <footer className="bg-teal text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-xl font-medium mb-4">{companyBio.title}</h5>
            <p className="text-gray-200">{companyBio.description}</p>
          </div>
          
          <div>
            <h5 className="text-xl font-medium mb-4">{settings.title}</h5>
            <ul>
              {settings.links.map((link) => (
                <li key={link.id} className="mb-2">
                  <a href={link.url} className="text-white hover:text-gray-300 transition-colors duration-300">
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
                  <a href={link.url} className="text-white hover:text-gray-300 transition-colors duration-300">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <Copyright />
    </footer>
  );
};

export default Footer;
