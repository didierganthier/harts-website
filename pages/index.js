import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import DiscoverComponent from '../components/DiscoverComponent';
import LearningComponent from '../components/LearningComponent';
import artPainting from '../assets/art-painting.JPG';
// import discoverImg from '../assets/discover-img.png';
// import CarouselElement from "../components/CarouselElement";

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

  const carouselElements = [
    {
      id: 1,
      imageUrl: artPainting,
      title: 'Art Painting',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc est ultricies nisl, nec ultricies elit nisl vel nisl.',
      buttonText: 'Learn More',
    },
    {
      id: 2,
      imageUrl: artPainting,
      title: 'Art Painting',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc est ultricies nisl, nec ultricies elit nisl vel nisl.',
      buttonText: 'Learn More',
    },
    {
      id: 3,
      imageUrl: artPainting,
      title: 'Art Painting',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc est ultricies nisl, nec ultricies elit nisl vel nisl.',
      buttonText: 'Learn More',
    },
    {
      id: 4,
      imageUrl: artPainting,
      title: 'Art Painting',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc est ultricies nisl, nec ultricies elit nisl vel nisl.',
      buttonText: 'Learn More',
    }
  ];

  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'vertical',
  //   loop: true,
  
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
  //   // And if we need scrollbar
  //   // scrollbar: {
  //   //   el: '.swiper-scrollbar',
  //   // },
  // });

  return (
    <div className=''>
      <Head>
        <title>Hart&apos;s</title>
      </Head>
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 bg-[#222222]">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <Image src="/./hartslogo.png" className="h-6 mr-3 sm:h-9" alt="Hart's Logo" width="100" height="100" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" onClick={() => setIsOpen(!isOpen)} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className={`${isOpen ? "" : "hidden"} absolute top-12 left-0 md:static w-full md:block md:w-auto`}>
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
      <DiscoverComponent />
      <LearningComponent />
      <div className='flex flex-col justify-center items-center rounded-tl-3xl bg-[#222222]'>
        <p className='uppercase my-8 text-white text-xl font-bold'>Unlock your potential</p>
        <div className='mb-5'>
          <div className='flex flex-col gap-4'>
            <Image src={artPainting} alt="Hart's Logo" className='rounded-lg' width="250" height="250" />
            <div className='flex gap-2 text-[#B88222] items-center font-bold text-sm'>
              <p>Art + Painting</p>
              <svg className="w-4 h-4" fill="none" stroke="#B88222" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </div>
          <div className='flex flex-col gap-4 my-8'>
            <Image src={artPainting} alt="Hart's Logo" className='rounded-lg' width="250" height="250" />
            <div className='flex gap-2 text-[#B88222] items-center font-bold text-sm'>
              <p>Art + Painting</p>
              <svg className="w-4 h-4" fill="none" stroke="#B88222" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </div>
          <div className='flex flex-col gap-4 my-8'>
            <Image src={artPainting} alt="Hart's Logo" className='rounded-lg' width="250" height="250" />
            <div className='flex gap-2 text-[#B88222] items-center font-bold text-sm'>
              <p>Art + Painting</p>
              <svg className="w-4 h-4" fill="none" stroke="#B88222" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center bg-[#222222]'>
        <p className='uppercase my-8 text-white text-xl font-bold text-center'>Where creativity meets Productivity</p>
        {/* <div className='swiper w-48'> */}
        <Swiper 
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {/* <div className='swiper-wrapper'> */}
            <SwiperSlide>
              <Image src={artPainting} alt="Hart's Logo" className='rounded-lg' width="250" height="250" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={artPainting} alt="Hart's Logo" className='rounded-lg' width="250" height="250" />
            </SwiperSlide>
          {/* </div> */}
          {/* <div class="swiper-pagination" />

          <div class="swiper-button-prev" />
          <div class="swiper-button-next" /> */}

          {/* <div class="swiper-scrollbar"></div> */}
        </Swiper>
      </div>
    </div>
  )
}