import React from 'react';

// import data
import { community } from '../data';

// import components
import CommunitySlider from './CommunitySlider';

const Community = () => {
  // destructure community data
  const { icon, title, testimonials } = community;
  return (
    <section>
      <div className='flex'>
        {/* section title */}
        <div
          className='section-title-group max-w-[240px] mx-auto px-4 lg:px-0 flex-1'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <img src={icon} alt='' />
          <h2 className='h2 section-title'>
            {title} <span className='text-primary-200'>.</span>
          </h2>
        </div>
        <div className='w-[900px]'>
          <CommunitySlider />
        </div>
      </div>
    </section>
  );
};

export default Community;
