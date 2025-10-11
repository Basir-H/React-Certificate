import React from 'react'
import Card from './Card'
import { pricing } from '../constants'

function Pricing() {
  return (
    <div className='mt-[3rem] '>
        {/* title */}
        <div>
            <h3></h3>
        </div>
        {/* subtile */}
        <div>
            <h4></h4>
        </div>
        {/* Cards Container */}
        <div className={`px-4 sm:px-[2.5rem] lg:px-[2rem] sm:flex sm:flex-row sm:justify-center sm:gap-6 `}>
            {pricing.map((price) => (
                <Card
                    className={`
                        py-[3rem] px-[2.5rem]
                        
                        `}
                    icon={price.logo}
                    iconClass='w-[1.5rem] h-[1.5rem] mb-[2.5rem]'
                    title={price.title}
                    titleClass='text-gray-300 text-[1.1rem] leading-[1.2rem] font-bold'
                    text={price.text}
                    textClass=' lg:hidden -mt-[2.1rem]'
                    children={
                        <price.icon className='hidden lg:flex hover:hidden text-[rgba(0,255,255,0.9)] w-[1.8rem] h-[1.8rem]'/>
                    }
                />
            ))}
        </div>
    </div>
  )
}

export default Pricing