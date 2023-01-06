import React from 'react'
import Image from 'next/image'
import discoverImg from '../assets/discover-img.png';
import ButtonForward from './ButtonForward';

const FooterComponent = () => {
    return (
        <div className='bg-white pt-8'>
            <div className='flex flex-col items-center mx-4'>
                <Image src="/./hartslogo.png" className="h-12 mr-3 sm:h-9" alt="Hart's Logo" width="100" height="100" />
                <p className='text-[8px] text-[#B88222] text-center'>Copyright 2022 Harts. All right reserved</p>
                <ul className="flex border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li>
                        <a href="#" className='text-[8px] block px-[5px]  md:bg-transparent border-r border-[#B88222]'>Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className='text-[8px] block px-[5px] md:bg-transparent border-r border-[#B88222]'>Terms of Use</a>
                    </li>
                    <li>
                        <a href="#" className='text-[8px] block px-[5px] md:bg-transparent border-r border-[#B88222]'>Legal</a>
                    </li>
                    <li>
                        <a href="#" className='text-[8px] block px-[5px] md:bg-transparent'>Site Map</a>
                    </li>
                </ul>

                <ul className="flex py-8 border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li className='mx-3'>
                        <ul className="flex flex-col border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li>
                                <a href="#" className='text-[8px] block md:bg-transparent  border-gray-100'>About Harts</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] block md:bg-transparent '>For Education</a>
                            </li>
                        </ul>
                    </li>
                    <li className='mx-3'>
                        <ul className="flex flex-col border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li>
                                <a href="#" className='text-[8px] block md:bg-transparent  border-gray-100'>Art</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] block md:bg-transparent '>Network</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] block md:bg-transparent '>Account</a>
                            </li>
                        </ul>
                    </li>
                    <li className='mx-3'>
                        <ul className="flex flex-col border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li>
                                <a href="#" className='text-[8px] block md:bg-transparent  border-gray-100'>For Business</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] block md:bg-transparent '>Our Lab</a>
                            </li>
                        </ul>
                    </li>
                    <li className='mx-3'>
                        <ul className="flex flex-col border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li>
                                <a href="#" className='text-[8px] block md:bg-transparent border-gray-100'>Our Gallery</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] block md:bg-transparent'>FAQ</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='flex'>
                <Image src={discoverImg} className="w-full h-24" alt="Discover Image" />
            </div>
        </div>
    )
}

export default FooterComponent
