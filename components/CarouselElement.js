import Image from 'next/image';
import React, { useRef, useEffect } from 'react';

function CarouselElement({ element }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1.5)';
          } else {
            entry.target.style.transform = 'scale(1)';
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 1.0 }
    );

    observer.observe(elementRef.current);
    return () => observer.unobserve(elementRef.current);
  }, []);

  return (
    <div ref={elementRef} className='flex-shrink-0'>
      <Image src={element.imageUrl} alt={element.title} className='rounded-lg' width="250" height="250" />
      <p className='text-[#B88222] font-bold text-xs py-2'>{element.title}</p>
      <p className='w-[250px] text-[9px] text-white'>{element.description}</p>
      <button className='bg-white rounded-xl text-[8px] px-4 mt-2 uppercase font-bold flex items-center'>
        {element.buttonText}
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </button>
    </div>
  );
}

export default CarouselElement;