import Head from 'next/head';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import DiscoverComponent from '../components/DiscoverComponent';
import LearningComponent from '../components/LearningComponent';
import CommunityComponent from '../components/CommunityComponent';
import FooterComponent from '../components/FooterComponent';
import AboutComponent from '../components/AboutComponent';
import artPainting from '../assets/art-painting.JPG';
import discoverImg from '../assets/discover-img.png';

export default function Home() {

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

  return (
    <div className=''>
      <Head>
        <title>Hart&apos;s</title>
      </Head>
      <div className='md:flex h-full min-h-screen'>
        <DiscoverComponent />
        <div className='flex bg-[#222222]'>
          <Image src={discoverImg} className="w-full sm:rounded-l-3xl" alt="Discover Image" />
        </div>
      </div>
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
        <Swiper 
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
              <Image src={artPainting} alt="Hart's Logo" className='rounded-lg mx-auto' width="250" height="250" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={artPainting} alt="Hart's Logo" className='rounded-lg mx-auto' width="250" height="250" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={artPainting} alt="Hart's Logo" className='rounded-lg mx-auto' width="250" height="250" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={artPainting} alt="Hart's Logo" className='rounded-lg mx-auto' width="250" height="250" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={artPainting} alt="Hart's Logo" className='rounded-lg mx-auto' width="250" height="250" />
            </SwiperSlide>
        </Swiper>
      </div>
      <CommunityComponent />
      <AboutComponent />
      <FooterComponent />
    </div>
  )
}