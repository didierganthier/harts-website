import React from 'react'
import ButtonForward from './ButtonForward'

const LearningComponent = () => {
    return (
        <div className="bg-white py-24 px-4 md:px-12">
            <p className='font-extrabold text-[10px] text-center'>OUR LABS COURSES DESIGN JUST FOR YOU</p>
            <p className='uppercase text-2xl pb-2 font-extrabold text-[#B88222] px-10 text-center py-5'>Learning from Harts Lab</p>
            <p className='text-[8px] md:text-sm py-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin bibendum feugiat consequat. Suspendisse est arcu, iaculis nec imperdiet ac, mollis varius augue.
                Aliquam in consequat arcu. Donec luctus tempor dui, sed rutrum turpis dignissim ut. Sed placerat dui dolor,
                nec vulputate urna rhoncus vel. Aenean ut est aliquam enim vestibulum dapibus.
                Fusce at condimentum tellus, vitae porttitor nibh. Aliquam faucibus auctor metus sed ullamcorper. Ut blandit
            </p>
            <p className='text-[8px] md:text-sm py-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin bibendum feugiat consequat. Suspendisse est arcu, iaculis nec imperdiet ac, mollis varius augue.
                Aliquam in consequat arcu. Donec luctus tempor dui, sed rutrum turpis dignissim ut. Sed placerat dui dolor,
                nec vulputate urna rhoncus vel. Aenean ut est aliquam enim vestibulum dapibus.
                Fusce at condimentum tellus, vitae porttitor nibh. Aliquam faucibus auctor metus sed ullamcorper. Ut blandit
            </p>
            <div className='flex flex-col md:flex-row mx-[100px] text-center justify-center my-5 md:mt-14 gap-5'>
                <ButtonForward textChildren="discover more" textColor="font-bold" />
                <ButtonForward textChildren="Enroll now" textColor="text-white font-bold" backgroundColor="bg-[#222222]" />
            </div>
        </div>
    )
}

export default LearningComponent
