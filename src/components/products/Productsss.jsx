import React, { useState } from 'react'
import Product from './Product'
import { motion } from "framer-motion"

function Productsss() {

  var products=[
    {title: "Arqitel", description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live:true, case:false},
    {title: "Cula", description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live:true, case:false},
    {title: "TTR", description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live:true, case:false},
    {title: "Maniv", description:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live:true, case:false},
    {title: "YIR 2022", description:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", live:true, case:false},
    {title: "Yahoo!", description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live:true, case:true},
    {title: "Rainfall", description:"We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.", live:true, case:true},
    {title: "Jungle", description:"We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.", live:true, case:true},
    {title: "Silvr", description:"We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.", live:true, case:false},
    {title: "Remind", description:"Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.", live:true, case:true},
    {title: "Summon", description:"We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.", live:true, case:true},
    {title: "Like Magic", description:"We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.", live:true, case:true},    
    {title: "RocketChat", description:"Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.", live:true, case:false},    
    {title: "Haufe", description:"Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.", live:true, case:false},    
    {title: "YIR 2021", description:"Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.", live:true, case:false},    
    {title: "Weglot", description:"Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.", live:true, case:false},    
    {title: "Candid Health", description:"Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.", live:true, case:false},    
    {title: "Showcase", description:"Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.", live:true, case:false},    


  ]

  const[pos, setPos] = useState(0)
  const mover= (val)=>{
    setPos(val*20)
  }

  return (
    <div className='mt-28 relative'>
      {products.map((val, index)=> <Product val={val} mover={mover} count={index} /> )}
      <div className='absolute top-0 w-full h-full pointer-events-none'>
        <motion.div initial={{y: pos}} animate={{y: pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.6}} className='absolute w-[25rem] h-[20rem] left-[45%] white sm:rounded-xl overflow-hidden'>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className=' w-full h-full   '> <video src="resources/arqitel.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}  className=' w-full h-full  '> <video src="resources/jungle-4-3-.webm" autoPlay loop muted></video></motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Productsss