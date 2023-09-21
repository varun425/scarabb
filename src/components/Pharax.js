import React from 'react'
import Navebar from './Navebar'

const Pharax = () => {
  return (
    <div className='pharax-bg pt-20'>
    <Navebar/>
    <div className='max-w-[1300px] mx-auto flex justify-between mt-56 items-center gap-20'>
        <div className=''>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
        <button  className='my-5'>More +</button>
        </div>
        <div className=''>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
        <button  className='my-5'>More +</button>
        </div>
        <div className=''>
          <h3>Buy
            <br/>
            Scarab
            </h3>
        <button  className='my-5'>More +</button>
        </div>
      </div>
      <div className='flex justify-between items-center'>   
      <div className=' w-full flex justify-center flex-col items-center'>
          <h3>Buy
            <br/>
            Scarab
            </h3>
        <button  className='my-5'>More +</button>
        </div>  <img src="/images/pharax-hero.png" alt="pharax-hero" /></div>

  </div>
  )
}

export default Pharax
