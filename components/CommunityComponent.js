import React from 'react'
import Image from 'next/image'
import discoverImg from '../assets/discover-img.png';
import ButtonForward from './ButtonForward';

const CommunityComponent = () => {
    return (
        <div className='bg-white'>
            <div className='mx-4 py-8'>
                <p className='pb-1 font-bold uppercase text-[#B88222]'>Our community</p>
                <p className='uppercase text-2xl pb-2 font-extrabold'>Having a network of creative</p>
                <p className='text-[4px] py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum feugiat consequat. Suspendisse est arcu, iaculis nec imperdiet ac, mollis varius augue. Aliquam in consequat arcu. Donec luctus tempor dui, sed rutrum turpis dignissim ut. Sed placerat dui dolor, nec vulputate urna rhoncus vel. Aenean ut est aliquam enim vestibulum dapibus. Fusce at condimentum tellus, vitae porttitor nibh. Aliquam faucibus auctor metus sed ullamcorper. Ut blandit</p>
                <ButtonForward textChildren="Discover more" />
            </div>
            <div className='flex'>
                <Image src={discoverImg} className="w-[80%] rounded-r-2xl" alt="Discover Image" />
            </div>
        </div>
    )
}

export default CommunityComponent
