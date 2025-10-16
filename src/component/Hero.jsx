import React from "react"
import Button from "./Button"
import { FaGithub } from "react-icons/fa";
import { FaDiscord} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { certification02, certification03, reactImage } from "../assets";

function Hero({toggle}) {
  return (
    <div className={`
       bg-primary flex flex-col items-center lg:items-start px-4
       transition-all duration-300 ${toggle ? 'mt-[23rem] lg:mt-0' : 'mt-[0rem]'}
      `}>
      <div className=''>
        <p className='text-center py-[5px] px-[5px] sm:px-[10px] bg-gray-600 rounded text-white border-white text-[0.8rem] sm:text-[16px] font-bold'>JUNIOR, MID-LEVEL AND SENIOR EXAMS NOW AVAILABLE</p>
      </div>

      {/* Main section */}
      <div className="flex flex-col items-center lg:flex-row lg:items-start gap-8" >
        <div className="flex-col ">
         {/* title */}
         <div className="mt-6 lg:mt-8 flex items-center justify-center ">
           <h1 className="  w-[50%] sm:w-full mx-[auto] my-[0] text-[47px] sm:text-[60px] md:text-[75px] lg:text-[90px] flex flex-col items-center gap-4 sm:flex-row lg:block  lg:text-start font-bold leading-[2.8rem] sm:leading-[5rem] md:leading-[7rem]">
             <span className='text-[rgba(0,255,255,1)]'>React</span> Certification
           </h1>
         </div>
         {/* subtitle */}
         <div>
           <h2 className="mt-8 text-center lg:text-start text-[16 px] lg:text-[35px] font-bold">
             Certification of competence for React
           </h2>
         </div>
          {/* Buttons for Signing UP */}
          <div className="flex flex-col items-center lg:items-start gap-5 mt-6 " >
           <Button
             text={"Sign Up with Git Hub"}
             varient={"primaryOutline"}
             className="flex justify-center items-center gap-4 rounded-lg py-[0.7rem] text-[1.09rem] border-[0.2rem] w-[18rem] xs:w-[28rem] ss:w-[35rem] sm:w-[45rem] md:w-[55rem] lg:w-full "
             icon={FaGithub} 
             />
             <Button
             text={"Sign Up with Discord"}
             varient={"primaryOutline"}
             className="flex justify-center items-center gap-4 rounded-lg py-[0.7rem] text-[1.09rem] border-[0.2rem]  w-[18rem] xs:w-[28rem] ss:w-[35rem] sm:w-[45rem] md:w-[55rem] lg:w-full "
             icon={FaDiscord}
             />
             
          </div>
          {/* Creating Account */}
           <div className="mt-6 ">
            <p className="mt-6 sm:mt-14 text-center lg:text-start text-[0.9rem] lg:text-[1.1rem] text-gray-500">
              Or create an account with your email
            </p>
            <form action="" className="mt-4 flex flex-col sm:flex-row gap-2 lg:gap-4 ">
            {/* Input with icon */}
              <div className="flex items-center flex-1 gap-2 bg-primary border border-gray-600 rounded-lg p-4 ">
                <MdEmail className="text-gray-400 text-2xl " />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none text-white w-full placeholder-gray-400"
                />
              </div>
              <Button
                text={"Sign Up"}
                varient={"primary"}
                className="rounded-lg lg:text-[1.09rem] py-[16px] px-[45px] "
              />
            </form>
          </div>

          {/* Note */}
          <div className="flex justify-center lg:justify-start gap-1 mt-10 text-gray-500 text-[1.2rem] mb-10 " >
            <p>Powered by</p>
            <a href="#" className="underline">Certificates.dev</a>
          </div>
        </div>

       {/* Hero Image */}
        <div className="flex relative px-[3rem] drop-shadow-[0_0_50px_rgba(0,255,255,0.9)] sm:drop-shadow-[0_0_100px_rgba(0,255,255,0.9)]">
          {/* Certificate image */}
          <div className="-mt-[6rem] sm:mt-[2rem]">
            <img
              src={certification02}
              alt=""
              className="w-[34rem] h-[32rem] 
              drop-shadow-[0_0_100px_rgba(0,255,255,0.2)]
              sm:drop-shadow-[0_0_200px_rgba(0,255,255,0.6)]
              "
            />
          </div>

          {/* big logo of react */}
          <div className="absolute top-[6rem] left-[9rem] sm:top-[3.4rem] sm:left-[14.7rem]">
            <img
              src={certification03}
              alt=""
              className="w-[7rem] sm:w-[23rem] sm:h-[23rem] 
              "
            />
          </div>

          {/* small logo of react */}
          <div className="absolute top-[4.4rem] left-[5rem] sm:top-[5.5rem] sm:left-[6rem]">
            <img
              src={reactImage}
              alt=""
              className="w-[3rem] sm:w-[7rem] sm:h-[7rem] 
              "
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero  
