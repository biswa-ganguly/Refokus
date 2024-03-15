import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io"
import {motion} from "framer-motion"

function Card({width, start, para, hover="false"}) {

  return (
    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff" , padding: "22px"}} className={` bg-zinc-800 rounded-xl p-5 ${width} flex flex-col justify-between`}>
        <div className='w-full'>
        <div className='w-full sm:flex sm:justify-between sm:items-center'>
            <h3>heading</h3>
            <IoIosArrowRoundForward/>
        </div>
        <h1 className='text-3xl font-medium mt-10'>any heading</h1>
        </div>

        <div className='w-full mt-48'>

            {
                start && (
                    <>
                    <h1 className='text-[6vw] font-semibold tracking-tight leading-none'>Start a Project</h1>
                    <button className='rounded-full py-3 px-6 border-[1px] border-zinc-300 font-light mt-4 transform sm:hover:translate-x-1.5 delay-100'>Contact us</button>
                    </>
                    ) 
            }

            {para && (
                <>
                    <p className='text-sm font-thin text-zinc-500 mt-5 select-none'>Explore what drives our team.</p>
                </>
            )}
            
        </div>

    </motion.div>
  )
}

export default Card