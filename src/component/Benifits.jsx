import React from 'react'
import { benifits } from '../constants'

function Benifits() {
  return (
    <div className='pt-[9.8rem]'>
        {/* Title */}
        <div className=''>
            <h1 className='flex justify-center flex-wrap gap-x-4 text-center text-[1.9rem] sm:text-[4.2rem] font-bold leading-[2rem] sm:leading-[5rem] lg:w-[60%] lg:mx-auto'>
                <span> Benefits of getting your </span> 
                <span className='text-[rgba(0,255,255,0.6)]'>React</span> 
                <span> Certification </span>
            </h1>
        </div>

        {/* Benifits conatainer */}
        <div className='px-[20px] sm:px-[78px] mt-[4rem]'>
            {benifits.map((benifit, index) => {
                return(
                    <div 
                    key={benifit.id}
                    className={`flex flex-col md:flex-row items-center gap-8 ${benifit.reverse ? "md:flex-row-reverse" : ""
                    }`}
                    >
                        <div className='md:w-1/2'>
                            <h2 className='text-center sm:text-start text-[1.2rem] sm:text-[2.5rem] font-bold leading-[3rem] mb-4 sm:mb-8'>
                              {index % 2 === 1 ? (
                                <>
                                  <span className={`${benifit.color}`}>{benifit.title1}</span> {' '}
                                  {benifit.title2}
                                </>
                              ) : (
                                <>
                                  {benifit.title1}{' '}
                                  <span className={`${benifit.color}`}>{benifit.title2}</span>
                                </>
                              )}
                            </h2>
                            <p
                            className='text-center sm:text-start text-gray-500 leading-[1.3rem] sm:leading-[2.1rem] text-[0.9rem] sm:text-[1.19rem]'
                            >
                                {benifit.text}
                            </p>
                        </div>
                        {/* Image */}
                        <div className=' '>
                            <img src={benifit.img} alt="" className='w-[40rem]'/>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Benifits