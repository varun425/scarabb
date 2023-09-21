'use client'
import React, { useState } from 'react'

const StakeScarab = () => {
    const [stakeScarab,setStakeScarab]=useState(false)
  return (
    <div className='flex justify-center items-center mt-20'>
      <div className='w-[350px]'>
        <div className='flex justify-between gap-5'>
            <button onClick={()=>setStakeScarab(true)}  className={`${stakeScarab?'btn-border':'btn-unactive'} w-[150px] py-3`}>Stake Scarab</button>
            <button onClick={()=>setStakeScarab(false)} className={`${stakeScarab?'btn-unactive':'btn-border'} w-[150px] py-3`}>Withdraw</button>
        </div>
        {/* --------- stake scarag */}
        {stakeScarab?
        <>
        <div className='mt-10'>
            <h2 className='text-center'>Stake Scarab</h2>
        </div>
        <div className='flex justify-between mt-5 '>
            <div>
                <p>Scarab Left</p>
                <h2>425.0156863</h2>
            </div>
            <div className='font-[HORUS]'>
                <p>APR</p>
                <h2>6.31%</h2>
            </div>
        </div>
        <input type="text" placeholder='Enter Amount' className='border w-full botder-[#E7DBC9] p-3 rounded-md bg-transparent mt-4 outline-none'/>
        <button className='btn-border w-full py-3 mt-5'>Approve</button>
         <p className='text-center my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
        <button className='btn-border w-full py-3'>Claim Baracs</button></>:
        
        <>
           {/* -------------- withdraw  */}
           
            <div className='mt-10'>
            <h2 className='text-center'>Withdraw Scarab</h2>
        </div>
        <div className='flex justify-between mt-5 '>
            <div>
                <p>Scarab Left</p>
                <h2>425.0156863</h2>
            </div>
            <div className='font-[HORUS]'>
                <p>APR</p>
                <h2>6.31%</h2>
            </div>
        </div>
        <input type="text" placeholder='Enter Amount' className='border w-full botder-[#E7DBC9] p-3 rounded-md bg-transparent mt-4 outline-none'/>
        <button className='btn-border w-full py-3 mt-5'>Approve</button>
         <p className='text-center my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
         </>}
      </div>
    </div>
  )
}

export default StakeScarab
