import React from 'react'
import { instructors } from '../constants'

function Instructor() {
  return (
    // Instructors Container
    <div className='flex flex-col justify-center items-center gap-8 mb-[2rem] mt-[10rem] p-3 sm:p-0'>
        {
            instructors.map((instructor) => {
                return(
                    // Instructor
                    <div className='w-[100%] sm:w-[80%] flex flex-col items-center justify-center  md:flex-row gap-10 bg-gray-900 p-6 sm:p-14 rounded-[2rem]'>
                        {/* Profile */}
                        <div className='flex flex-col items-center'>
                            {/* profile image */}
                            <div className='w-[8.3rem]'>
                                <img src={instructor.img} alt="" className='rounded-full ' />
                            </div>

                            {/* profile Title */}
                            <div className='text-center'>
                                <h3 className='text-[1.5rem] font-bold mt-6 flex justify-center gap-2 -ml-2 '>
                                    {instructor.fName}{" "}
                                    <span className='text-[rgba(0,255,255,0.6)]'>
                                        {instructor.lName}
                                    </span>
                                </h3>
                                <p className=' text-[1rem] sm:text-[1.2rem] text-gray-500 mt-4'>{instructor.job}</p>
                            </div>
                        </div>

                        {/* Introduction */}
                        <div className=''>
                            <h2 className='text-[2.6rem] sm:text-[3rem] font-bold mb-8'>
                                Meet your{" "}
                              <span className='text-[rgba(0,255,255,0.6)]'>instructor</span>
                            </h2>
                            <p className='text-gray-400 text-[1rem] sm:text-[1.28rem] leading-[1.5rem] sm:leading-[1.9rem]'>{instructor.text}</p>
                        </div>
                    </div>
                )
            })
        }    
    </div>
  )
}

export default Instructor

