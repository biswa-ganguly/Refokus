import React from 'react'

function Strip({val}) {
  return (
    <div className='w-[20%] px-6 py-5 border-t-[1.5px] border-r-[1.5px] border-b-[1.5px] border-zinc-500 flex justify-between items-center'>
        <img src={val.url} alt="" />
        <span className='font-semibold sm:text-[4vh] text-[0px]'>{val.number}</span>

    </div>
  )
}

export default Strip