import React from 'react'
import Image from 'next/image'
import discoverImg from '../assets/discover-img.png';
import ButtonForward from './ButtonForward';

const CommunityComponent = () => {
    return (
        <div className='bg-white md:flex md:flex-row-reverse items-center w-full'>
            <div className='mx-4 md:px-12 py-8'>
                <p className='pb-1 font-bold uppercase text-[12px] text-[#B88222]'>Our community</p>
                <p className='uppercase text-2xl pb-2 font-extrabold'>Having a network of creative</p>
                <p className='text-[8px] md:text-sm py-4 md:w-4/5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    iaculis nec imperdiet ac, mollis varius augue. Aliquam in consequat.
                    dignissim ut. Sed placerat dui dolor, nec vulputate urna rhoncus vel.
                </p>
                <ButtonForward textChildren="Discover more" />
            </div>
            <div className='flex md:block rounded-r-2xl md:rounded-r-3xl overflow-hidden md:w-2/5'>
                <Image src={discoverImg} className="w-[80%] md:w-full md:min-h-screen object-cover rounded-r-2xl" alt="Discover Image" />
            </div>
        </div>
    )
}

export default CommunityComponent
