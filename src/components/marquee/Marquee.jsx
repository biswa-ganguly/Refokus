import React from 'react'
import {motion} from "framer-motion"

function Marquee({imagesurls, direction}) {
  return (
    <div className='flex w-full  gap-8 sm:py-4 py-4 flex-shrink-0 overflow-hidden'>
      <motion.div initial={{x: direction=== "left" ? "0" : "-100%"}} animate={{x: direction=== "left" ? "-100%" : "0"}} transition={{ease: 'linear', duration: 20, repeat: Infinity, repeatDelay:1}} className='flex flex-shrink-0 gap-16 py-8 '> 
      {imagesurls.map((url ,index) =>( <img key={index} src={url} className=''  />))}
      </motion.div>
      <motion.div initial={{x: direction=== "left" ? "0" : "-100%"}} animate={{x: direction=== "left" ? "-100%" : "0"}} transition={{ease: 'linear', duration: 20, repeat:Infinity, repeatDelay:1}} className='flex flex-shrink-0 gap-16 py-8 '> 
      {imagesurls.map((url ,index) =>( <img key={index} src={url} className=''  />))}
      </motion.div>
      
        
    </div>
  )
}

export default Marquee