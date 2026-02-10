import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import comptia from './assets/comptia.png';
import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CertModal() {

  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: false },
    [AutoPlay({ delay: 3000 })] // optional autoplay
  )
  return (


     <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0"><img src={comptia} alt="Comptia" className="w-full h-full object-contain" /></div>
        {/* <div className="flex-[0_0_100%] min-w-0">Slide 2</div>
        <div className="flex-[0_0_100%] min-w-0">Slide 3</div> */}
      </div>
    </div>
//     <div className="w-full h-full flex flex-col  bg-red text-red">
//       <Swiper
//         modules={[Autoplay, Navigation, Pagination]}
//         spaceBetween={10}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         navigation
//         pagination={{ clickable: true }}
//         className="w-full flex-1"
//         style={{ height: '80%', opacity: 0.5 }}
//       >

// {/* {[{cert: 'comptia', img: comptia}].map(certificate => {
//   return (
//   <SwiperSlide className="flex items-center justify-center align-middle">
//     <img src={certificate.img} alt={certificate.cert} className="w-full h-full object-contain" />
//   </SwiperSlide>)
// });

// } */}

//         <SwiperSlide className="flex items-center justify-center">
//           <div className="p-8">
//             <p className="text-lg">yknow its BIG G</p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center">
//           <div className="p-8">
//             <p className="text-lg">wasgd</p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center">
//           <div className="p-8">
//             <p className="text-lg">hey</p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center align-middle">
//           <img src={t} alt="Taskflows" className="w-full h-full object-contain" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
  );
}