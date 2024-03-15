import React from 'react'
import Button from '../Button'

function Product({val, mover, count}) {
  return (
    <div className='w-full h-[20rem] py-20'>
      <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between'>
        <div className='w-full sm:w-2/5'>
          <h1 className='font-medium text-4xl sm:text-6xl mb-4 sm:mb-0'>{val.title}</h1>
          <p className='font-thin mb-10 sm:mb-0'>{val.description}</p>
        </div>
        <div className='w-full sm:w-3/5 flex items-center justify-center sm:justify-end gap-6'>
          {val.live && <Button />}
          {val.case && <Button title='Case Study'/> }
        </div>
      </div>
    </div>
  )
}

export default Product