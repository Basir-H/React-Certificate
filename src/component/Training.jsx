import React from 'react'
import Card from './Card'
import { levels, training } from '../constants'

function Training() {
  return (
    <div className='mt-[6rem] mb-[5rem]'>
        {/* title */}
        <div className='mb-[3rem] '>
            <h3 className='text-center text-[1.8rem] sm:text-[3.5rem] w-[85%] mx-auto  sm:w-[80%] md:w-[60%] lg:w-[50%] font-bold'>
                <span className='text-[rgba(0,255,255,0.6)]'>Optional Preparation</span>{" "}
                <span className='text-gray-300'>Training Products</span>
            </h3>
        </div>
        {/* Cards container */}
        <div className='flex flex-col gap-8 px-4 sm:px-[2.5rem] lg:px-[2rem] lg:flex-row lg:justify-center'>
            {training.map((train) => (
                <Card
                    className='flex flex-col items-center sm:items-start'
                    headerClass='flex flex-col items-center sm:mb-[1rem]'
                    icon={train.icon}
                    iconClass='w-[4.5rem] h-[4.5rem] sm:w-[5rem] sm:h-[5rem]'
                    title={train.title1}
                    titleClass='text-gray-300 text-[1.5rem] sm:text-[2.3rem] font-bold '
                    title_2={train.title2}
                    titleClass_2='text-[1.5rem] sm:text-[2.3rem] font-semibold'
                    text={train.text}
                    textClass='text-center sm:text-start text-[0.95rem] sm:text-[1.2rem] leading-[1.8rem] -mt-[2rem] mb-[1rem]'
                    children_2={
                        <ul className='flex flex-col gap-4  -mt-[0.5rem]'>
                            {train.list.map((data) => (
                                <li className='flex gap-2 text-gray-500 text-[0.9rem] sm:text-[1.2rem] text-center '>
                                    <data.icon className='text-[rgba(0,255,255,0.7)] w-[1.5rem] h-[1.5rem]'/>
                                    {data.list}
                                </li>
                            ))}
                        </ul>
                    }
                    showButton = {true}
                    buttonProps='Learn More'
                    btnType='primaryOutline'
                    btnClass={`text-[0.9rem] font-semibold rounded-lg border-2 px-[1.8rem] py-[1rem] mt-3 sm:mt-[1.5rem] ${train.id === 2 ? 'md:mt-[4rem]' : '' } `}
                />
            ))}
        </div>
    </div>
  )
}

export default Training