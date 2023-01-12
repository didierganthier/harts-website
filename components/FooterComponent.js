import React from 'react'
import Image from 'next/image'
import footerImg from '../assets/footer.png';
import ButtonForward from './ButtonForward';

const FooterComponent = () => {
    return (
        <div className='bg-white pt-8'>
            <div className='flex flex-col items-center mx-4 md:hidden'>
                <Image src="/./hartslogo.png" className="h-12 mr-3 sm:h-9" alt="Hart's Logo" width="100" height="100" />
                <div className='flex flex-col items-center order-2'>
                    <p className='text-[8px] md:text-sm text-[#B88222] text-center'>Copyright 2022 Harts. All right reserved</p>
                    <ul className="flex border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <a href="#" className='text-[8px] md:text-sm block px-[5px]  md:bg-transparent border-r border-[#B88222]'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className='text-[8px] md:text-sm block px-[5px] md:bg-transparent border-r border-[#B88222]'>Terms of Use</a>
                        </li>
                        <li>
                            <a href="#" className='text-[8px] md:text-sm block px-[5px] md:bg-transparent border-r border-[#B88222]'>Legal</a>
                        </li>
                        <li>
                            <a href="#" className='text-[8px] md:text-sm block px-[5px] md:bg-transparent'>Site Map</a>
                        </li>
                    </ul>
                </div>

                <ul className="flex py-8 border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li className='mx-3'>
                        <ul className="flex flex-col border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li>
                                <a href="#" className='text-[8px] md:text-sm block md:bg-transparent  border-gray-100'>About Harts</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] md:text-sm block md:bg-transparent '>For Education</a>
                            </li>
                        </ul>
                    </li>
                    <li className='mx-3'>
                        <ul className="flex flex-col border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li>
                                <a href="#" className='text-[8px] md:text-sm block md:bg-transparent  border-gray-100'>Art</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] md:text-sm block md:bg-transparent '>Network</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] md:text-sm block md:bg-transparent '>Account</a>
                            </li>
                        </ul>
                    </li>
                    <li className='mx-3'>
                        <ul className="flex flex-col border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li>
                                <a href="#" className='text-[8px] md:text-sm block md:bg-transparent  border-gray-100'>For Business</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] md:text-sm block md:bg-transparent '>Our Lab</a>
                            </li>
                        </ul>
                    </li>
                    <li className='mx-3'>
                        <ul className="flex flex-col border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li>
                                <a href="#" className='text-[8px] md:text-sm block md:bg-transparent border-gray-100'>Our Gallery</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] md:text-sm block md:bg-transparent'>FAQ</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className='hidden md:flex items-end py-12 px-12 justify-between'>
                <div className='flex flex-col w-1/3'>
                <Image src="/./hartslogo.png" className="h-12 mr-3 sm:h-9" alt="Hart's Logo" width="100" height="100" />

                <ul className="flex pt-8 border-gray-100 rounded-lg md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li className='mr-8'>
                        <ul className="flex flex-col border-gray-100 rounded-lg md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li>
                                <a href="#" className='text-[8px] md:text-sm block md:bg-transparent '>About Harts</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] md:text-sm block md:bg-transparent '>For Education</a>
                            </li>
                            
                            <li>
                                <a href="#" className='text-[8px] md:text-sm block md:bg-transparent '>Art</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] md:text-sm block md:bg-transparent '>Network</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] md:text-sm block md:bg-transparent '>Account</a>
                            </li>
                        </ul>
                    </li>
                    <li className='mx-3'>
                        <ul className="flex flex-col rounded-lg md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li>
                                <a href="#" className='text-[8px] block md:text-sm md:bg-transparent '>For Business</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] block md:text-sm md:bg-transparent '>Our Lab</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] block md:text-sm md:bg-transparent'>Our Gallery</a>
                            </li>
                            <li>
                                <a href="#" className='text-[8px] block md:text-sm md:bg-transparent'>FAQ</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                </div>

                <div className='flex flex-col items-center'>
                    <p className='text-[8px] md:text-sm text-[#B88222] text-center'>Copyright 2022 Harts. All right reserved</p>
                    <ul className="flex border-gray-100 rounded-lg md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <a href="#" className='text-[8px] md:text-sm block px-[5px]  md:bg-transparent border-r border-[#B88222]'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className='text-[8px] md:text-sm block px-[5px] md:bg-transparent border-r border-[#B88222]'>Terms of Use</a>
                        </li>
                        <li>
                            <a href="#" className='text-[8px] md:text-sm block px-[5px] md:bg-transparent border-r border-[#B88222]'>Legal</a>
                        </li>
                        <li>
                            <a href="#" className='text-[8px] md:text-sm block px-[5px] md:bg-transparent'>Site Map</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex'>
                <Image src={footerImg} className="w-full h-24" alt="Discover Image" />
            </div>
        </div>
    )
}

export default FooterComponent
