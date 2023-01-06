import React from 'react'

import { contact } from '../data';
import ContactMe from './ContactMe';


const Contact = () => {
    const { icon, title, plans } = contact;
    console.log("plans", plans);
  return (
    <section className='section'>
      {/* section title */}
      <div
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='200'
      >
        <img src={icon} alt='' />
        <h2 className='h2 section-title'>
          {title} <span className='text-primary-200'>.</span>
        </h2>
      </div>
      {/* plan list */}
      <ContactMe plans={plans} />
    </section>
  )
}

export default Contact