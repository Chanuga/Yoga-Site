import React from 'react';

// import data
import { faq } from '../data';

const Faq = () => {
  // destructure faq data
  const { title, testimonials } = faq;
  return (
    <section className='section pt-[480px] lg:pt-[280px]'>
      <div className='max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-contain min-h-[1160px]'>
        {/* section title */}
        <div
          className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='200'
        >
          <h2 className='h2 section-title lg:mt-[100px]'>
            {title} <span className='text-primary-200'>.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Faq;
