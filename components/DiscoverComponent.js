import React from 'react'
import ButtonForward from './ButtonForward';
import Navbar from './Navbar';

const DiscoverComponent = () => {
    return (
        <>        
        <div className='bg-[#222222] md:px-8 flex flex-col md:w-2/3'>
            <Navbar />
            <div className='mx-4 py-8 srink md:m-auto justify-center'>
                <p className='uppercase text-2xl md:text-5xl pb-2 font-extrabold text-[#B88222]'>Cultural career and community management</p>
                <p className=' text-white font-bold my-4  text-[19px]'>POUR UNE MEILLEURE VALORISATION DE NOS JEUNES TALENTS.</p>
                <p className='text-[12px] text-white py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum feugiat consequat. Suspendisse est arcu, iaculis nec imperdiet ac, mollis varius augue. Aliquam in consequat arcu. Donec luctus tempor dui, sed rutrum turpis dignissim ut. Sed placerat dui dolor, nec vulputate urna rhoncus vel. Aenean ut est aliquam enim vestibulum dapibus. Fusce at condimentum tellus, vitae porttitor nibh. Aliquam faucibus auctor metus sed ullamcorper. Ut blandit</p>
                <ButtonForward textChildren="Discover" textColor="text-white font-bold" backgroundColor="bg-[#B88222]" />
            </div>
        </div>
        </>
    )
}

export default DiscoverComponent
