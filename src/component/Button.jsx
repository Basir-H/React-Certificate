import React from 'react'

const Button = ({ 
  varient, 
  text, 
  size,
  className = "",
  icon: Icon
}) => {

     //Varient styles
      const varientStyles = {
        primary:'bg-[rgba(0,255,255,0.6)] text-black font-bold rounded ',
        primaryOutline:'border border-[rgba(0,255,255,0.6)] text-white border-rounded hover:bg-[rgba(0,255,255,0.6)] hover:text-black transition-all duration-[0.2s] ease-in-out',
        successOutline:'border border-green-500 text-white border-rounded hover:bg-green-500 hover:text-black hover:border-none' ,
        dangerOutline:'border border-red-500 text-white border-rounded hover:bg-red-500 hover:text-black hover:border-none',  
      }

      //Size styles
      const sizeStyles = {
        sm:'text-[12px] py-1 px-2',
        md:'text-[16px] py-2 px-4',
        lg:'text-[20px] py-3 px-6',
      }        
  return (
    <button className={`
      ${varient ? varientStyles[varient] : varientStyles['primary']}
      ${size ? sizeStyles[size] : sizeStyles['md']}
      ${className}
    `}>
      {Icon && <Icon className='w-[27px] h-[30px]'/>}
      {text}
    </button>
  )
       
}

export default Button