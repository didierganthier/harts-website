import Image from 'next/image';
import { useState } from 'react';

function CarouselElement({ imageUrl, title, description, buttonText }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`px-10 transform hover:scale-125 transition-transform duration-200 ${isHovered ? 'scale-125' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="px-4 py-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-full">{buttonText}</button>
    </div>
  );
}

export default CarouselElement;
