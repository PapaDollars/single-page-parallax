
// src/components/Copyright.jsx
import { footerData } from '../data/siteData';

const Copyright = () => {
  const { copyright } = footerData;
  
  return (
    <div className="bg-teal-darken py-4 border-t border-teal-lighten-1">
      <div className="container mx-auto">
        <div className="text-center text-black">
          {copyright.text}{' '}
          <a 
            href={copyright.link.url} 
            className="text-brown-lighten-3 hover:text-white transition-colors duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {copyright.link.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Copyright;