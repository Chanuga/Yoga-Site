import React, { useState } from 'react';

// import icons
import { BsCheckCircleFill } from 'react-icons/bs';

const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className='flex flex-col justify-between items-center lg:flex-row max-w-[1280px] mx-auto gap-y-4'>
      {plans.map((plan, currentIndex) => {
        // destructure plan
        const { name, price, list, delay } = plan;
        return (
          <div
            onClick={() => setIndex(currentIndex)}
            key={currentIndex}
            data-aos='fade-up'
            data-aos-offset='100'
            data-aos-delay={delay}
            className='w-full max-w-[336px] md:max-w-[620px] lg:max-w-[405px] min-h-[520px] rounded-sm'
          >
            <div
              className={`${
                currentIndex === index
                  ? 'bg-neutral-500 text-white'
                  : 'bg-neutral-400/10 text-neutral-500'
              } flex justify-center items-center min-h-[520px] transition duration-100`}
            >
              <div className='flex flex-row lg:flex-col gap-x-8 gap-y-8 lg:gap-x-0'>
                {/* name & price wrapper */}
                <div>
                  {/* name */}
                  <div
                    className={`${
                      currentIndex === index
                        ? 'bg-white text-neutral-500'
                        : 'bg-neutral-500 text-white'
                    } h-[26px] font-primary text-sm font-semibold max-w-min mx-auto px-[14px] flex items-center justify-center mb-8`}
                  >
                    {name}
                  </div>
                  {/* price */}
                  <div className='text-[50px] font-primary font-extrabold text-center flex flex-col items-center justify-center'>
                    <div className='leading-none'>
                      <span className='tracking-[0.1px]'>{price}</span>
                      <span className='text-[30px] font-extrabold'>$</span>
                    </div>
                    <span className='text-sm font-medium'>/month</span>
                  </div>
                </div>
                {/* list & btn wrapper */}
                <div>
                  {/* list */}
                  <ul className='flex flex-col gap-y-4 mb-8'>
                    {list.map((item, idx) => {
                      return (
                        <li
                          className='flex items-center gap-x-[10px]'
                          key={idx}
                        >
                          <BsCheckCircleFill className='text-lg' />
                          <div>{item.name}</div>
                        </li>
                      );
                    })}
                  </ul>
                  {/* btn */}
                  <button
                    className={`${
                      currentIndex === index
                        ? 'bg-white text-neutral-500'
                        : 'border border-neutral-500'
                    } btn btn-lg rounded-[1px] mx-auto`}
                  >
                    Join now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
