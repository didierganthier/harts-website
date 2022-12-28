import React from 'react'
import Image from 'next/image'
import discoverImg from '../assets/discover-img.png';

const Discover = () => {
    return (
        <div>
            <div className='mx-4 my-8'>
                <p className='uppercase text-2xl pb-2 font-extrabold text-[#B88222]'>Cultural career and community management</p>
                <p className=' text-white text-[19px]'>POUR UNE MEILLEURE VALORISATION DE NOS JEUNES TALENTS.</p>
                <p className='text-[4px] text-white py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum feugiat consequat. Suspendisse est arcu, iaculis nec imperdiet ac, mollis varius augue. Aliquam in consequat arcu. Donec luctus tempor dui, sed rutrum turpis dignissim ut. Sed placerat dui dolor, nec vulputate urna rhoncus vel. Aenean ut est aliquam enim vestibulum dapibus. Fusce at condimentum tellus, vitae porttitor nibh. Aliquam faucibus auctor metus sed ullamcorper. Ut blandit</p>
                <button className='text-white bg-[#B88222] text-xs flex items-center rounded-full px-2 py-1'>
                    DISCOVER
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
            <div className='flex'>
                <Image src={discoverImg} className="w-full" alt="Discover Image" />
            </div>
        </div>
    )
}

export default Discover
