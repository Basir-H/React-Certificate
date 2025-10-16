import React from 'react'
import Card from './Card'
import { levels } from '../constants'
import { MdTimer } from "react-icons/md";
import { FaCopy } from "react-icons/fa";

function Levels() {
  return (
    <div className='px-4 sm:px-[2.5rem] lg:px-[4rem] mt-[5rem] mb-[4rem]'>
        {/* Title */}
        <div className=''>
          <h3 className='text-[2rem] sm:text-[4rem] text-center font-bold leading-[2.2rem] '>
           <span className='text-gray-300'> React Certification </span>{" "} 
            <span className='text-[rgba(0,255,255,0.9)]'>Levels</span>
          </h3>
        </div>
        {/* Cards Container */}
        <div className='mt-[2.8rem] flex flex-col gap-6 lg:flex-row lg:justify-center lg:gap-8'>
            {levels.map((level) => (
              <Card
              className={`
                transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]
                border-transparent
                hover:border
                py-[1.5rem]
                  ${
                    level.id === 1
                    ? 'hover:border-[rgba(0,255,255,0.9)]'
                    : level.id === 2
                    ? 'hover:border-orange-700 hover:border-[0.13rem]'
                    : 'hover:border-green-600'
                  }
                `}
              headerClass=' flex-col items-start '
              icon={level.icon}
              iconClass={`
                w-[4rem] h-[4rem] sm:w-[4.2rem] sm:h-[4.2rem] 
                ${
                level.id === 1 
                  ? 'text-[rgba(0,255,255,0.9)]' 
                  : level.id === 2 
                    ? 'text-orange-600' 
                    : 'text-green-600'
              }`}              
              title={level.title}
              titleClass={`
                text-[1.5rem] font-bold sm:text-[2.2rem] sm:leading-[2.4rem]
                ${
                level.id === 1 
                  ? 'text-[rgba(0,255,255,0.9)]' 
                  : level.id === 2 
                    ? 'text-orange-600' 
                    : 'text-green-600'
              } `
              }
              children={
                <div className='flex flex-wrap gap-2 mt-[1.4rem] mb-[1.4rem]'>
                  {/* Timer */}
                  <div className={` flex items-center gap-2 `}>
                    <MdTimer className='text-gray-400 w-[1rem] h-[2rem]'/>
                    <p className='text-gray-400 text-[0.9rem]'>{level.duration}</p>
                  </div>
                  {/* Questions */}
                  <div className={`flex items-center  gap-2 `}>
                    <FaCopy className='text-gray-400 w-[1.2rem] h-[1rem]'/>
                    <p className='text-gray-400 text-[0.9rem]'>{level.questions}</p>
                  </div>
                </div>
              }
              text={level.description}
              textClass={`text-[1rem] sm:text-[1.2rem] leading-[1.8rem] sm:leading-[2rem] sm:mt-[2rem] `}
              showButton = {true}
              buttonProps='View Pricing'
              btnType='primaryOutline'
              btnClass={`text-[0.9rem] font-semibold rounded-lg border-2 px-[1.8rem] py-[1rem] mt-3 ${level.id === 1 ? 'lg:mt-[7.4rem] ' : '' } ${level.id === 2 ? 'lg:mt-[1.8rem] border-orange-600 hover:bg-orange-600 hover:text-white' : ''} ${level.id === 3 ? 'lg:mt-[4rem] border-green-600 hover:bg-green-600' : ''} `}
              />
            ))}
        </div>
    </div>
  )
}

export default Levels