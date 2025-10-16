import React from 'react'
import { useState } from 'react'
import { blogIcon, logo, moonIcon, sunIcon, menu, close } from '../assets'
import { Navlinks } from '../constants'
import Button from './Button'

function Navbar({toggle, setToggle}) {


    return (
        <nav className='flex justify-between items-center w-full py-3 px-14 bg-primary-10 backdrop-blur-[2.5rem] fixed top-0 z-50 '>
            <div className=''>
                <img src={logo} alt="" className='ml-3 lg:ml-0 w-[55px] h-[55px]' />
            </div>
            {/* Desktop Navbar */}
            <div className='hidden lg:flex items-center '>
                <ul className='flex'>
                    {
                        Navlinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`list-none text-gray-200 font-bold text-[16px] cursor-pointer hover:text-blue-300
                                ${index === Navlinks.length - 1 ? 'mr-0' : 'mr-9'}
                                `}>
                                <a href="#">{nav.title}</a>
                                <img 
                                src={blogIcon} 
                                alt="" 
                                className={`w-[17px] h-[17px] inline-block ml-1  ${nav.title === "Blog" ? 'visible' : 'hidden'}`}
                                />
                            
                            </li>

                        ))
                    }
                </ul>
                <Button
                    varient="primary"
                    text="Buy Now"
                    className="ml-10 text-[1.12rem] py-[14px] px-[22px] rounded-lg bg-[rgba(0,255,255,0.8)]"
                />

                {/* dark mode buttons*/}
                <div className='ml-10 bg-gray-700 rounded-full p-2 gap-1 flex  cursor-pointer'>
                    <img src={moonIcon} alt="" className='w-[20px] ' />
                    <img src={sunIcon} alt=""  className='w-[20px] '/>
                </div>
            </div>
            
            {/* Mobile Navbar */}
            <div className='lg:hidden flex items-center '>
              <img 
              src={toggle ? close : menu} 
              alt="" 
              className='w-[28px] h-[28px] absolute left-5  cursor-pointer object-contain'
              onClick={() => {
                setToggle(!toggle)
              }}
              />
              <div 
              className={`${toggle ? "flex flex-col" : "hidden"}  -mt-[13px] bg-primary p-6 absolute top-[79px] right-0  w-full sidebar z-50`}
              >

              <ul className='list-none flex-col justify-end flex-1 items-center'>
                {Navlinks.map((nav,index) => {
                    return(
                      <li className={`flex items-center gap-1 mt-6 list-none `}
                        onClick={()=>{
                            setActive(nav.title)
                        }}
                        >
                        <a href="#" className='text-gray-200 font-bold text-[16px] cursor-pointer hover:text-blue-300'>{nav.title}</a>
                        <img src={blogIcon} alt="" className={`w-[17px] h-[17px] ${nav.title === 'Blog' ? 'visible' : 'hidden'}` }/>
                      </li>
                      
                )
                
                })}
                  
                 </ul>
                   <Button
                    varient="primary"
                    text="Buy Now"
                    className="mt-4 text-[1.11rem] py-[14px] px-[19px] rounded-lg"
                />  
                <div className='ml-6 mt-6 flex'>
                    <div className=' bg-gray-700 rounded-full p-2 gap-1 flex  cursor-pointer'>
                        <img src={moonIcon} alt="" className='w-[20px] ' />
                        <img src={sunIcon} alt=""  className='w-[20px] '/>
                    </div>
                </div>
              </div>
            </div>
        </nav>
    )
}

export default Navbar