import React from 'react'

const Footer = () => {
  return (
    <div className='font-[HORUS] text-2xl flex gap-8 items-center absolute bottom-8 left-1/2 -translate-x-1/2 text-[#FEF2E0]'>
   <div className='scane'>
    <button className='left-btn  w-[240px] h-[90px] '>My Era</button>
    </div>
    <button className='middle-btn w-[300px] h-[100px]   '>Scarab</button>
   <div className='scane'>
    <button className='right-btn   w-[240px] h-[90px] '>Updates</button>
    </div>
  </div>
  )
}

export default Footer
