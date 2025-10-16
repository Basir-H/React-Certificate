import React from 'react'
import Card from './Card'
import { pricing } from '../constants'

function Pricing() {
  return (
    <div className='mt-[3rem] mb-[3rem]'>
        {/* title */}
        <div>
            <h3 className='text-center text-[rgba(0,255,255,0.6)] font-bold text-[2rem] sm:text-[3.7rem] '>Pricing</h3>
        </div>
        {/* subtile */}
        <div className='px-[1.5rem] mt-[1.6rem] sm:mt-[2.5rem]'>
            <h4 className='text-center font-bold text-[1.2rem] sm:text-[2.3rem] leading-[1.6rem] sm:leading-[2.4rem] text-gray-300 sm:w-[47rem] sm:mx-auto'>
                <span>Get your React Certification now during the Launch and enjoy these</span>{" "}
                <span className='text-[rgba(0,255,255,0.6)]'>benefits:</span>
            </h4>
        </div>
        {/* Cards Container */}
        <div className={`mt-[2rem] sm:mt-[4.2rem] px-4 flex flex-col gap-8 lg:px-[2.5rem] lg:px-[2rem] lg:flex lg:flex-row lg:justify-center lg:gap-6 `}>
            {pricing.map((price) => (
                <Card
                    className={`
                         py-[2rem] px-[2.5rem] lg:w-[20%]   
                         group transition-all duration-500 ease-in-out 
                         flex flex-col justify-between hover:justify-start  
                        
                        `}
                    icon={price.logo}
                    iconClass='w-[1.5rem] h-[1.5rem] mb-[2.5rem] group-hover:hidden transition-all duration-500 ease-in-out'
                    title={price.title}
                    titleClass='text-gray-300 text-[1.1rem] leading-[1.4rem] font-bold'
                    text={price.text}
                    textClass=' lg:hidden group-hover:flex mt-[1rem] sm:mt-[1rem]'
                    children={
                        <price.icon className='hidden lg:flex group-hover:hidden text-[rgba(0,255,255,0.9)]  w-[1.8rem] h-[1.8rem] mt-[3.8rem]'/>
                    }
                />
            ))}
        </div>
    </div>
  )
}

export default Pricing