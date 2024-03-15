import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/stripes/Stripes'
import Productsss from './components/products/Productsss'
import Marqueess from './components/marquee/Marqueess'
import Cardss from './components/card/Cardss'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {

  
  return (
    <div className='w-[100%]  bg-zinc-900 text-white overflow-hidden'>
    <Navbar/>
    <Work/>
    <Stripes/>
    <Productsss/>
    <Marqueess/>
    <Cardss/>
    <Footer/>
      
    </div>
  )
}

export default App