import React from 'react';

// import header data
import { header } from '../data';

// import components
import Nav from '../components/Nav';

const Header = () => {
  // destructure header data
  const { logo, btnLoginText, btnSignupText } = header;
  return (
    <header
      className='fixed max-w-[1440px] left-0 right-0 z-10 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] py-[20px]'
      data-aos='fade-down'
      data-aos-duration='1000'
      data-aos-delay='2000'
    >
      {/* logo */}
      <a href='/'>
        <img src={logo} alt='' />
      </a>
      {/* nav */}
      <Nav />
      {/* buttons - initally hidden - show in desktop mode */}
      <div className='hidden lg:flex space-x-4'>
        <button className='btn btn-sm text-white'>{btnLoginText}</button>
        <button className='btn btn-sm btn-primary'>{btnSignupText}</button>
      </div>
    </header>
  );
};

export default Header;
