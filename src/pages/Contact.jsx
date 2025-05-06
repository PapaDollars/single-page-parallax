
// src/pages/Contact.jsx
import { contactData } from '../data/siteData';

const Contact = () => {
  const { title, content } = contactData;

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center mb-2">
            <i className="text-brown-text"></i>
          </h3>
          <h4 className="text-2xl font-medium text-center mb-6">{title}</h4>
          <p className="text-gray-600 font-light text-left">{content}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
