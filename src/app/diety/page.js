'use client'
import AllDiey from '@/components/AllDiety'
import BecomeADiety from '@/components/BecomeADiety'
import Navebar from '@/components/Navebar'
import React from 'react'

const page = () => {
  return (
    <div className='dapp-bg'>
      <Navebar/>
      <BecomeADiety/>
      {/* <AllDiey/> */}


    {/* <div className='font-[HORUS] flex text-2xl gap-5  items-center absolute bottom-8 left-1/2 -translate-x-1/2 text-[#FEF2E0]'>
   <div className='scane'>
    <button className='left-btn  w-[240px] h-[90px] '>Dietys</button>
    </div>
    <button className='middle-btn w-[300px] h-[100px]  '>Dashboard</button>
    <div className='scane'>
    <button className='right-btn   w-[240px] h-[90px] '>NFTs</button>
    </div>
  </div> */}
    </div>
  )
}

export default page
