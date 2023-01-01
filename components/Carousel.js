import React, { useState } from "react";
import CarouselElement from "./CarouselElement";

function Carousel({ elements }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="overflow-x-scroll flex flex-wrap">
      {elements.map((element, index) => (
        <div key={index} className="w-full">
          <div className="flex justify-center">
            <CarouselElement
              imageUrl={element.imageUrl}
              title={element.title}
              description={element.description}
              buttonText={element.buttonText}
            />
          </div>
        </div>
      ))}
      <div className="flex justify-between mt-2">
        {elements.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-8 h-8 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></button>
        ))}
      </div>
    </div>
  );
}


export default Carousel;