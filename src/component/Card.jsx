import React from "react";
import Button from "./Button"; 

const Card = ({ 
  title, 
  titleClass="",
  title_2,
  titleClass_2,
  text, 
  textClass="",
  icon: Icon, 
  iconClass="",
  image, 
  imageClass="",
  showButton = false, 
  buttonProps = "", 
  btnClass="",
  btnType = "",
  headerClass="",
  className = "",
  children,
  children_2,

}) => {
  return (
    <div className={`${className} group bg-gray-900 rounded-[1rem] px-[2rem] py-[1rem] sm:py-[2rem]`}>
      
      {/* Header */}
      <div className={`${headerClass} gap-2 sm:flex-col sm:items-start`}>
        
        {/* Image or Icon */}
        <div className="mb-4">
          {Icon && !image && (
            <Icon className={` w-[2rem] h-[2rem] sm:w-[2rem] sm:h-[2rem] text-[rgba(0,255,255,0.6)] ${iconClass}`} />
          )}
          {image && !Icon && (
            <img
              src={image}
              alt={title}
              className={`w-[2rem] h-[2rem] sm:w-[2.3rem] sm:h-[2.3rem] ${imageClass}`}
            />
          )}
        </div>

        <div className="flex gap-2">
          {/* Title */}
          <div className="">
              <h3 className={`text-[rgba(0,255,255,0.6)] ${titleClass}`}>{title}</h3>
          </div>

          {/* second title for different coloring*/}
          <div className="">
              <h3 className={`text-[rgba(0,255,255,0.6)] ${titleClass_2}`}>{title_2}</h3>
          </div>
        </div>
      </div>

      {/* Custom Content (children) */}
      {children && <div className="">{children}</div>}
      

      {/* Text */}
      {text && <p className={` text-gray-500 mt-2 ${textClass}`}>{text}</p>}

      {/* Custom Content (children) */}
      {children_2 && <div className="">{children_2}</div>}
      
      

      
      {/* Button (اختیاری) */}
      {showButton && <div className="mt-4">
        <Button text={`${buttonProps}`} varient={`${btnType}`} className={`${btnClass}`} />
      </div>}
    </div>
  );
};

export default Card;
