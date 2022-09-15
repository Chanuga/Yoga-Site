import React from 'react';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper';

const CommunitySlider = ({ testimonials }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      centeredSlides={'auto'}
      modules={[]}
      className=''
    >
      {testimonials.map((testimonial, idx) => {
        // destructure testimonial
        const { image, name, message } = testimonial;
        return (
          <SwiperSlide key={idx}>
            <div className='relative w-[360px] h-[480px]'>
              {/* image */}
              <div>
                <img src={image} alt='' />
              </div>
              {/* message & name */}
              <div className='absolute bottom-[30px] p-[20px]'>
                <div className='mb-8'>{message}</div>
                <div>{name}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommunitySlider;
