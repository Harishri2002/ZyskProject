import React from 'react';
import bolLogo from '../assets/bol.png';
import lightLogo from '../assets/light.png';
import featherLogo from '../assets/feather.png';
import spheritLogo from '../assets/spherit.png';
import globalLogo from '../assets/global.png';
import netLogo from '../assets/net.png';

const partners = [
  { name: "Boltshift", logo: bolLogo },
  { name: "Lightbox", logo: lightLogo },
  { name: "FeatherDev", logo: featherLogo },
  { name: "Spherule", logo: spheritLogo },
  { name: "GlobalBank", logo: globalLogo },
  { name: "Nietzsche", logo: netLogo }
];

const Partners = () => {
  return (
    <section className="text-center py-12 bg-white">
      <p className="text-gray-500">Join 4,000+ companies already growing</p>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
        {partners.map((partner, index) => (
          <img key={index} src={partner.logo} alt={partner.name} className="h-24 max-w-[200px] object-contain" />
        ))}
      </div>
    </section>
  );
};

export default Partners;
