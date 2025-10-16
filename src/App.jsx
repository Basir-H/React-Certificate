import React from 'react'
import { useState } from 'react'
import {
  Navbar, 
  Hero, 
  MoreCertifications, 
  Companies,
  Benifits,
  Instructor,
  Steps,
  Research,
  Levels,
  Training,
  Pricing
} from './component'

function App() {
   const [toggle, setToggle] = useState(false)
  return (
        <div className='bg-primary w-full overflow-hidden text-white pt-[80px]'>
          <div className={`flex justify-center items-center`}>
            <div className={`w-full `}>
              <Navbar toggle={toggle} setToggle={setToggle}/>
            </div>
          </div>

        {/* Hero Section */}
          <div className=' lg:ml-[78px] mt-[50px]'>
            <Hero toggle={toggle}/> 
          </div>
          <MoreCertifications/>
          <Companies/>
          <Benifits/>
          <Instructor/>
          <Steps/>
          <Research/>
          <Levels/>
          <Training/>
          <Pricing/>
      </div>
  )
}

export default App