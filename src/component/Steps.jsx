import React from 'react'
import { steps } from '../constants'

function Steps() {
  return (
    <div className='mt-[4.5rem] lg:mt-[8rem] mb-[4rem] px-4 sm:px-[2.5rem] lg:px-[4rem]'>

        {/* Title */}
        <div>
          <h2 className='text-[2rem] sm:text-[4rem] text-center font-bold'>
           <span>Steps to</span>{" "} 
           <span className='text-[rgba(0,255,255,0.6)]'>Certification</span>
          </h2>
        </div>

        {/* Steps Container*/}
        <div className='mt-[4rem] flex flex-col flex-1 gap-5 sm:gap-12  lg:flex-row lg:flex-wrap'>
          {
            steps.map((step) => {             
              return(
                <div 
                  className={` bg-gray-900 px-[1.3rem] sm:px-[2rem] py-4 sm:py-[2.8rem] lg:py-[2.2rem] rounded-[1.3rem] 
                    ${step.id === 1 ? 'lg:w-[47%]' : ""}
                    ${step.id === 2 ? 'lg:w-[47%]' : ""}
                    ${step.id === 3 ? 'lg:w-full' : ""}
                  `}>

                 <div className='flex gap-4 sm:gap-[2rem] lg:gap-[3rem]'>
                  {/* title */}
                  <div className='flex flex-col items-center lg:gap-2'>
                      <h3 className='text-[1.1rem] font-bold text-[rgba(0,255,255,0.6)]'>{step.stepNum}</h3>
                    <div>
                    {step.icon && (
                      <div className='text-[rgba(0,255,255,0.9)]'>
                        <step.icon className='w-[3.6rem] h-[5rem]'/>
                      </div>
                    )}
                    {step.img && (<img src={step.img} alt="" className='w-[13rem]  ss:w-[6rem] sm:w-[5rem] mt-3'/>)}
                    </div>
                  </div>
                 
                  {/* Text */}
                  <div className='mt-[3rem] sm:mt-[2rem]'>
                    <h3 className='text-[1.2rem] sm:text-[2.2rem] lg:text-[2.3rem] text-gray-200 font-bold '>{step.title}</h3>
                    <p className='mt-[1rem] text-[0.89rem] sm:text-[1.2rem] lg:text-[1.2rem] leading-[1.8rem] text-gray-400'>{step.text}</p>
                  </div>
                 </div>

                  {/* Images that only disapeared on third object  */}
                  {step.id === 3 && (
                   <div className={`flex flex-col items-center justify-center lg:flex-row gap-5 mt-5 px-4 `}>
                    {step.images && step.images.map((img, index) => (
                      <img
                       key={index} 
                       src={img} 
                       alt="" 
                       className='w-full '
                       />
                      ))}
                  </div>
                  
                  )}
                </div>
              )
            })
          }
          
        </div>

    </div>
  )
}

export default Steps