import React from 'react'
import Slidertest from './Slidertest';
import Slider3d from './slider3d/Slider3d';

const BecomeADiety = () => {
  return (
    <div className='max-w-[900px] mx-auto'>
      <div className='flex  justify-between lg:flex-row flex-col-reverse gap-10 items-center w-full stake-border p-7'>
        <div className='w-[250px] '>
          <p>Token staked</p>
          <input type="range" className='styled-slider w-full ' />
          <div className='flex justify-between'>
            <h2>39</h2>
            <h2>50</h2>
          </div>
        </div>
        <div>
          <p className='text-center'>Become a</p>
          <div className='flex items-center'>
            <img src="/images/Vector.png" alt="vector" className='w-10 opacity-[0.5]'/>
            <h2 className='font-[HORUS] text-[50px]'>Deity</h2>
          </div>
       
        </div>
        <div className='lg:flex hidden items-center gap-3'>
            <p className='text-center'>Stake more to <br/>
        become a Deity</p>
          <button className=' px-8 py-2 text-[20px] border border-[#E7DBC9] rounded-xl transition-all  hover:bg-[#E7DBC9]'>Stake </button>
          </div>
      </div>
 {/* <Slidertest/> */}
 <Slider3d/>
<div className='lg:hidden flex justify-center w-full my-20 '>
 <button className=' w-[80%] mx-auto   px-8 py-2 text-[20px] border border-[#E7DBC9] rounded-xl transition-all  hover:bg-[#E7DBC9]'>Stake more </button>
 </div> 

    <div className='font-[HORUS] text-2xl mt-20 flex md:gap-8 gap-2 justify-center items-center text-[#FEF2E0]'>
  <div  className='scane '>
   <button className='left-btn  md:w-[200px] md:h-[80px]  md:text-[20px] text-[16px] px-5 py-2   '>Dietys</button>
   </div>
   <button className='middle-btn md:w-[250px] md:h-[90px]  md:text-[20px] text-[16px] px-4 py-4   '>Dashboard</button>
  <div className='scane'>
   <button className='right-btn   md:w-[200px] md:h-[80px]  md:text-[20px] text-[16px] px-5 py-2  '>NFTs</button>
   </div>
 </div>  
    </div>
  )
}

export default BecomeADiety

  
    