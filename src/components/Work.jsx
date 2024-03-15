import React, { useState } from 'react'
import { useScroll, useMotionValueEvent } from "framer-motion"

function Work() {
  

  const [images, setImages]= useState(
    [
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top:"50%", left: "50%", isActive:false},
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top:"56%", left: "44%", isActive:false},
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top:"45%", left: "55%", isActive:false},
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top:"60%", left: "53%", isActive:false},
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top:"43%", left: "46%", isActive:false},
    {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top:"65%", left: "52%", isActive:false},
    ])


  const { scrollYProgress } = useScroll()


  

  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    function imagesShow(arr){
      setImages(prev =>(
        prev.map((item,index) => (
          arr.indexOf(index) === -1 ? (
            {...item, isActive: false}
          )
          : {...item, isActive: true}
        ))
      ))
    }



    switch( Math.floor(latest*1000)){

      case 15:
        imagesShow([])
        break;
      case 18:
        imagesShow([0])
        break
      case 21:
        imagesShow([0,1])
        break
      case 24:
        imagesShow([0,1,2])
        break
      case 27:
        imagesShow([0,1,2,3])
        break
      case 30:
        imagesShow([0,1,2,3,4])
        break
      case 33:
        imagesShow([0,1,2,3,4,5])
        break


    }
  })




  return (
    <div className='w-full '>
      <div className='relative w-full text-center leading-tight  p-7  '  >
        <h1 className='text-[30vw] tracking-tight font-medium select-none delay-1000'  >work </h1> 
        <div className='absolute top-0 w-full h-full'>
          {images.map((elem, index)=> elem.isActive && (<img className=' absolute sm:w-[18.75em] w-[85px] rounded-lg -translate-x-[50%] -translate-y-[40%]' src={elem.url} style={{top: elem.top, left:elem.left}} alt="" />))}
          </div>  
    </div>

    </div>
  )
}

export default Work




        
  