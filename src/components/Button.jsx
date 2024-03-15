import React from 'react';
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Get Started"}) {
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div 
      className={`w-fit px-4 py-2 bg-zinc-100 text-black rounded-full  right-[10vh] flex items-center justify-between  ${hover ? 'animate-pulse' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`text-sm font-medium ${hover ? 'animate-rolling' : ''}`}>{title}</span>
      <IoIosReturnRight />
      
      <style jsx>{`
        @keyframes rolling {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-1 * 100%)); }
        }

        .animate-rolling {
          animation: rolling .4s linear ;
        }
      `}</style>
    </div>
  )
}

export default Button;