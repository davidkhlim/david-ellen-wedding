import { React, useState, useEffect } from 'react';

const slides = [
  '/images/opening-1.jpg.webp',
  '/images/opening-2.jpg.webp',
  '/images/opening-3.jpg.webp',
  '/images/opening-4.jpg.webp',
];

export default function OpeningCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide === slides.length - 1 ? 0 : currentSlide + 1));
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <img key={currentSlide} src={slides[currentSlide]} className='fade-in-opening fade-out-opening absolute h-full object-cover sm:w-full -z-10 sm:h-[120%]' />
    </>

  );
}

// <div id="indicators-carousel" class="relative w-full" data-carousel="static">
//   {/* <!-- Carousel wrapper --> */}
//   <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
//     {/* <!-- Item 1 --> */}
//     <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
//       <img src="/images/opening-1.jpg.webp" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//     </div>
//     {/* <!-- Item 2 --> */}
//     <div class="hidden duration-700 ease-in-out" data-carousel-item>
//       <img src="/images/opening-2.jpg.webp" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//     </div>
//     {/* <!-- Item 3 --> */}
//     <div class="hidden duration-700 ease-in-out" data-carousel-item>
//       <img src="/images/opening-3.jpg.webp" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//     </div>
//     {/* <!-- Item 4 --> */}
//     <div class="hidden duration-700 ease-in-out" data-carousel-item>
//       <img src="/images/opening-4.jpg.webp" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//     </div>
//   </div>
//   {/* <!-- Slider indicators --> */}
//   <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
//     <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//     <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//     <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//     <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//   </div>
//   {/* <!-- Slider controls --> */}
//   <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//     <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//       <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
//       </svg>
//       <span class="sr-only">Previous</span>
//     </span>
//   </button>
//   <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//     <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//       <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
//       </svg>
//       <span class="sr-only">Next</span>
//     </span>
//   </button>
// </div>