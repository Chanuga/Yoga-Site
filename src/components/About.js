import React from 'react';

// import data
import { about } from '../data';

const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, usersIcon } = about;
  return (
    <section className='py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]'>
      <div className='container mx-auto px-[20px] lg:px-[135px]'>
        {/* title & icon */}
        <div
          className='flex items-center mb-8 -space-x-20'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <img src={usersIcon} alt='' />
          <h2 className='h2 flex -space-x-4'>
            {title} <span className='text-primary-200'>.</span>
          </h2>
        </div>
        <p
          className='md:text-body-md mb-12'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {subtitle1}
        </p>
        <p className='md:text-body-md' data-aos='fade-up' data-aos-delay='300'>
          {subtitle2}
        </p>
      </div>
    </section>
  );
};

export default About;
