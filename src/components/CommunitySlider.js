import React from 'react';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper';

const CommunitySlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      centeredSlides={false}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mySwiper w-full'
    >
      <SwiperSlide className='bg-pink-100'>Slide 1</SwiperSlide>
      <SwiperSlide className='bg-pink-100'>Slide 2</SwiperSlide>
      <SwiperSlide className='bg-pink-100'>Slide 3</SwiperSlide>
      <SwiperSlide className='bg-pink-100'>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default CommunitySlider;
