import React from 'react'
import Image from 'next/image'
import discoverImg from '../assets/discover-img.png';
import artPainting from '../assets/art-painting.JPG';
import ButtonForward from './ButtonForward';

const AboutComponent = () => {
    return (
        <div className='bg-[#222222]'>
            <div className='mx-4 py-8'>
                <p className='pb-1 font-bold uppercase text-[12px] text-center text-[#B88222]'>About Us</p>
                <p className='uppercase text-2xl text-white pb-2 font-extrabold text-center'>Hart's Family</p>
                <p className='text-[8px] py-2 text-white text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin bibendum feugiat consequat. Suspendisse est arcu, iaculis nec imperdiet ac, mollis varius augue.
                Aliquam in consequat arcu. Donec luctus tempor dui, sed rutrum turpis dignissim ut. Sed placerat dui dolor,
                nec vulputate urna rhoncus vel. Aenean ut est aliquam enim vestibulum dapibus.
                Fusce at condimentum tellus, vitae porttitor nibh. Aliquam faucibus auctor metus sed ullamcorper. Ut blandit
            </p>
            <p className='text-[8px] py-2 text-white text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin bibendum feugiat consequat. Suspendisse est arcu, iaculis nec imperdiet ac, mollis varius augue.
                Aliquam in consequat arcu. Donec luctus tempor dui, sed rutrum turpis dignissim ut. Sed placerat dui dolor,
                nec vulputate urna rhoncus vel. Aenean ut est aliquam enim vestibulum dapibus.
                Fusce at condimentum tellus, vitae porttitor nibh. Aliquam faucibus auctor metus sed ullamcorper. Ut blandit
            </p>
            <div className='flex gap-2 text-[#B88222] items-center justify-center font-bold text-sm'>
              <p className='uppercase'>Discover More</p>
              <svg className="w-4 h-4" fill="none" stroke="#B88222" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
            </div>
            <div className='grid grid-flow-col auto-cols-max w-full overflow-hidden'>
                <Image src={discoverImg} className="about-image max-w-xs" alt="Discover Image" />
                <Image src={artPainting} className="about-image max-w-xs" alt="Painting Image" />
                <Image src={discoverImg} className="about-image max-w-xs" alt="Discover Image" />
                <Image src={artPainting} className="about-image max-w-xs" alt="Painting Image" />
                <Image src={discoverImg} className="about-image max-w-xs" alt="Discover Image" />                
            </div>
        </div>
    )
}

export default AboutComponent
