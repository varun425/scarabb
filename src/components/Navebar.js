"use client"
import React, { useState } from 'react'

const Navebar = () => {
  const [activeNav, setActiveNav] = useState(false)
  return (
    <>
      <div className='md:flex hidden justify-between max-w-[1200px] mx-auto font-[HORUS] py-14  '>
        <button className='navlink text-[#E7DBC9]'>Ancient egypt </button>
        <button className='navlink text-[#E7DBC9]'>Security </button>
        <button className='navlink text-[#E7DBC9]'>Safety </button>
        <button className='navlink text-[#E7DBC9]'>Gods </button>
        <button className='navlink text-[#E7DBC9]'>BARACs </button>
      </div>
      <div className='md:hidden flex justify-between items-center p-10'>
        <img src="/images/logo1.png" alt="logo" />
        <img src="/images/bar.png" alt="logo" onClick={() => setActiveNav(!activeNav)} className='cursor-pointer' />
      </div>
      {
        activeNav && <div className='absolute  z-30 bg-black w-full md:hidden flex flex-col justify-between  font-[HORUS] py-14 gap-5 '>
          <button className='navlink text-[#E7DBC9]'>Ancient egypt </button>
          <button className='navlink text-[#E7DBC9]'>Security </button>
          <button className='navlink text-[#E7DBC9]'>Safety </button>
          <button className='navlink text-[#E7DBC9]'>Gods </button>
          <button className='navlink text-[#E7DBC9]'>BARACs </button>
        </div>
      }
    </>
  )
}

export default Navebar
