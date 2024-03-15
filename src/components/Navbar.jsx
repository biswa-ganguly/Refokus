import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-zinc-900 shadow-md font-[satoshi] font-regular py-4 border-b-2 border-zinc-700 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between   ">
            
          <div className="w-full flex items-center">
            <a href="#" className="flex ">
              <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="Refokus Logo" className="h-6 w-auto select-none" />
            </a>
            <div className="hidden sm:block sm:ml-6 ">
              <div className="flex gap-10 space-x-4 text-sm px-8">
                <a href="#" className="text-white hover:text-green-400  px-3 py-2 rounded-md " >
                  Home
                </a>
                <a href="#" className="text-white hover:text-green-400  px-3 py-2 rounded-md">
                  Work
                </a>
                <a href="#" className="text-white hover:text-green-400  px-3 py-2 rounded-md">
                  Careers
                </a>
                <span className="w-[2px] h-10 py-2 bg-zinc-800"></span>
                <a href="#" className="text-white hover:text-green-400  px-3 py-2 rounded-md">
                  News
                </a>
                <Button/>
                
                
                    
                
                {/* <span className="w-lg h-[2px] bg-slate-300"></span> */}
              </div>
            </div>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button className=" p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 rounded-full ">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 text-sm ">
          <a href="#" className="text-white hover:text-green-500 block font-medium px-3 p-4 rounded-md text-center" >
            Home
          </a>
          <a href="#" className="text-white hover:text-green-500 block font-medium px-3 p-4 rounded-md text-center" >
            Work
          </a>
          <a href="#" className="text-white hover:text-green-500 block font-medium px-3 p-4 rounded-md text-center" >
            Careers
          </a>
          <a href="#" className="text-white hover:text-green-500 block font-medium px-3 p-4 rounded-md text-center" >
            News
          </a>
          <a href="#" className="text-white hover:text-green-500 block font-medium px-3 p-4 rounded-md text-center" >
            Start a project
          </a>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;








// import React from 'react'

// function Navbar() {
//   return (
//     <div className='max-w-screen-xl mx-auto py-8 flex items-center '>
//         <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="logo" />
//         <div className='links flex gap-16 ml-20'>
//             {["Home", "Work", "Careers", "News"].map((elem,index)=>(
//                 <a href="#" className='text-sm flex items-center gap-1'>
//                     {index === 1 ? (<span style={{boxShadow: "0 0 0.45em #00FF19"}} className='inline-block w-1 h-1 bg-green-500 rounded-full'></span>) : null}
                    
                    
//                     {elem}
//                 </a>
//             ))}
//         </div>
        
//     </div>
//   )
// }

// export default Navbar