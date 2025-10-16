import React from 'react'
import Button from "./Button"

function MoreCertifications() {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center bg-gray-900 gap-8 mt-4 mb-4 py-6 sm:py-6 '>
        <h3 className='text-[1.2rem] sm:text-[1.65rem] font-bold text-center'>
            Would you like to see more 
           <span className='text-blue-500 font-semibold'> Certifications? </span>
        </h3>
        <Button
            text={'Learn More'}
            varient={'primaryOutline'}
            className='rounded-lg border-blue-600 border-[0.2rem] font-bold px-[1.5rem]  hover:text-white hover:bg-gradient-to-t hover:from-[#001eff] hover:via-[#001eff] hover:to-[#98d6f5ff]'
        />
    </div>
  )
}

export default MoreCertifications