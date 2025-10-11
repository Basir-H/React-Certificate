import React from 'react'
import Card from './Card'
import { researchs } from '../constants'


function Research() {
  return (
    <div className=' px-4 sm:px-[2.5rem] lg:px-[4rem]'>
      {/* title */}
        <div className='lg:w-[70%] lg:mx-auto'> 
          <h2 className='text-[2rem] sm:text-[3.9rem] sm:leading-[5rem] font-bold text-center'>
            <span>Research show</span>{" "}
            <span className='text-[rgba(0,255,255,0.6)]'>clear interest</span>{" "}
            <span>in acheiving certification</span>
          </h2>
        </div>
        {/* subTitle */}
        <div className=' mt-[3rem] lg:w-[60%] lg:mx-auto'>
          <p className='px-[0.9rem] text-center text-[0.9rem] sm:text-[1.3rem] sm:px-[3rem] text-gray-500'>
            We received more than 2,300 responses from React Developers to a pre-launch survey conducted about the Certification Program.
          </p>
        </div>
        {/* Cards container */}
        <div className="flex flex-col gap-4 sm:gap-8 mt-[3rem] sm:flex-row sm:flex-wrap sm:justify-center">
          {researchs.map((research) => (
            <Card
            headerClass='flex items-center'
              title={research.title}
              titleClass='text-[3rem]'
              text={research.text}
              textClass='text-[1.2rem] -mt-[1.3rem]'
              icon={research.icon}
              image={research.img}
              className='sm:w-[40%] lg:w-[20%]'
            />
          ))}
        </div>
    </div>
  )
}

export default Research