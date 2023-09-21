import React from 'react'
import Features from "../../components/features/Features"
import Navebar from '@/components/Navebar'
const page = () => {
  return (
    <div>
      <Navebar />
      <Features />

      <div className='font-[HORUS] text-2xl  flex md:gap-8 gap-2 justify-center items-center text-[#FEF2E0]'>
        <div className='scane '>
          <button className='left-btn  md:w-[200px] md:h-[80px]  md:text-[20px] text-[16px] px-5 py-2   '>Scarab</button>
        </div>
        <button className='middle-btn md:w-[250px] md:h-[90px]  md:text-[20px] text-[16px] px-4 py-4   '>Updates</button>
        <div className='scane'>
          <button className='right-btn   md:w-[200px] md:h-[80px]  md:text-[20px] text-[16px] px-5 py-2  '>Myera</button>
        </div>
      </div>
    </div>
  )
}

export default page
