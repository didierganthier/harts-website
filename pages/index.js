import Head from 'next/head';
import Image from 'next/image';
import discoverImg from '../assets/discover-img.png';
import { useState } from 'react';

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const [current, setCurrent] = useState(1);

  const navLinks = [
    {
      id: 1,
      name: 'Home',
      url: '#home',
    },
    {
      id: 2,
      name: 'About',
      url: '#about',
    },
    {
      id: 3,
      name: 'Services',
      url: '#services',
    },
    {
      id: 4,
      name: 'Pricing',
      url: '#pricing',
    },
    {
      id: 5,
      name: 'Contact',
      url: '#contact',
    },
  ];

  return (
    <div className='bg-[#222222]'>
      <Head>
        <title>Hart&apos;s</title>
      </Head>
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <Image src="/./hartslogo.png" className="h-6 mr-3 sm:h-9" alt="Hart's Logo" width="100" height="100" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" onClick={() => setIsOpen(!isOpen)} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}>
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[#222222] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              {navLinks.map((link) => (
                <li key={link.id} onClick={() => setCurrent(link.id)}>
                  <a href={link.url} className={`block py-2 pl-3 pr-4 text-white ${current === link.id ? "bg-[#B88222]" : ""} rounded md:bg-transparent`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className='mx-4 my-8'>
        <p className='uppercase text-2xl pb-2 font-extrabold text-[#B88222]'>Cultural career and community management</p>
        <p className=' text-white text-[19px]'>POUR UNE MEILLEURE VALORISATION DE NOS JEUNES TALENTS.</p>
        <p className='text-[4px] text-white py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum feugiat consequat. Suspendisse est arcu, iaculis nec imperdiet ac, mollis varius augue. Aliquam in consequat arcu. Donec luctus tempor dui, sed rutrum turpis dignissim ut. Sed placerat dui dolor, nec vulputate urna rhoncus vel. Aenean ut est aliquam enim vestibulum dapibus. Fusce at condimentum tellus, vitae porttitor nibh. Aliquam faucibus auctor metus sed ullamcorper. Ut blandit</p>
        <button className='text-white bg-[#B88222] text-xs flex items-center rounded-full px-2 py-1'>
          DISCOVER
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
        {/* Discover Image */}
      </div>
      <div className='flex'>
        <Image src={discoverImg} className="w-full" alt="Discover Image" />
      </div>
    </div>
  )
}