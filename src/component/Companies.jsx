import React from 'react'
import {instagram, netflix, whatsApp, dropbox, shopify} from '../assets'

function Companies() {
  return (
    <div>
        {/* title */}
        <div className='mt-[6rem] '>
            <h2 className='flex justify-center flex-wrap px-4 gap-x-2 text-[1.8rem] sm:text-[4rem] font-bold leading-[2.3rem] text-gray-300 text-center mb-6 mt-10'>
                <span>Companies that use</span> 
                <span className='text-[rgba(0,255,255,0.9)]'>React</span>
            </h2>
        </div>
        {/* logo's */}
        <div className='flex justify-center flex-wrap items-center gap-12 mt-20 mb-4 px-[1rem] sm:px-0'>
            <img src={instagram} alt="" />
            <img src={netflix} alt="" />
            <img src={whatsApp} alt="" />
            <img src={dropbox} alt="" />
            <img src={shopify} alt="" />
            <h1 
            className='flex items-center gap-2 text-gray-500 font-bold text-[1.9rem]'>+4,000,000 
            <span className='font-normal text-[1.5rem]'>websites</span> </h1>
        </div>
    </div>
  )
}

export default Companies