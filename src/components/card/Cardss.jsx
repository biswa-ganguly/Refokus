import React from 'react'
import Card from './Card'

function Cardss() {
  return (
    <div className='w-full '>
        <div className='max-w-screen-xl mx-auto mt-20 flex gap-1'>
            <Card width={"basis-1/3"} start={false} para={true}  />
            <Card width={"basis-2/3"} start={true} para={false} hover="true"/>
        </div>
    </div>
  )
}

export default Cardss