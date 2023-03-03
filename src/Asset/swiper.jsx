// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import img1 from './Images/slide1.jpeg'
import img2 from './Images/slide2.jpeg'
import img3 from './Images/slide3.jpeg'
import img4 from './Images/slide4.jpeg'
import img5 from './Images/slide5.jpeg'
import img6 from './Images/slide6.jpeg'
import img7 from './Images/slide7.jpeg'
import img8 from './Images/slide8.jpeg'
import img9 from './Images/slide9.jpeg'
import img10 from './Images/slide10.jpeg'
import img11 from './Images/slide11.jpeg'
import img13 from './Images/slide13.jpeg'
import img14 from './Images/slide14.jpeg'

export const Swipers =() => {
  // Create array with 1000 slides
  const images=[img1, img2, img3, img4, img5, img6, img11, img13, img9, img10, img14]

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {images.map((item)=>(
    <SwiperSlide>
    <img src={item} className=' min-h-[200px] w-full'/>
    </SwiperSlide>

        ))}
    </Swiper>
  );
};
