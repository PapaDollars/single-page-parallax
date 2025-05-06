
// src/pages/Parallax2.jsx
import { parallaxData } from '../data/siteData';

const Parallax2 = () => {
  const { text, backgroundImage } = parallaxData[1];

  return (
    <section className="parallax-container flex items-center">
      <div className="section w-full">
        <div className="container mx-auto">
          <div className="text-center">
            <h5 className="text-xl font-light text-white">{text}</h5>
          </div>
        </div>
      </div>
      <div className="parallax">
        <img src={backgroundImage} alt="Background" />
      </div>
    </section>
  );
};

export default Parallax2;
