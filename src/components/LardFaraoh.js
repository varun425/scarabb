import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
const LardFaraoh = () => {
  const [active,setActive]=useState(false)
  const [activestake,setActivestake]=useState(false)

  return (
    <div className=''>
      <h2 className='font-[HORUS] text-center '>Hail, Lord pharaoh</h2>

      {/*  desktop*/}
      <div className='lg:block hidden'>
      <div className='flex gap-10 justify-center items-center  lg:mt-0 mt-10  '>
        <div className='flex items-center gap-2'>
            <img src="/images/front-coin.png" alt="front-coin"  className=' lg:w-auto   w-[100px]'/>
            <img src="/images/scarav.png" alt="scarav"  className='lg:w-[100px]  h-[80px]' />
        </div>
        <div>
        <p>Scarab Left</p>
        <h2>425.0156863</h2>
        </div> <div>
        <p>Scarab Locked</p>
        <h2>425.0156863</h2>
        </div>
        <button className='mt-5 px-8 py-3 text-[20px] border border-[#E7DBC9] rounded-2xl transition-all  hover:bg-[#4e4e4c80]'>Buy more</button>
        <div>   
          
         
        </div>
      
      </div>
      <div className='flex gap-10 lg:mt-0 mt-10 justify-center items-center '>
        <div className='flex items-center gap-2'>
        <img src="/images/split-coin.png" alt="split-coin" className='  lg:w-auto  w-[100px]'/>

        <img src="/images/baracs.png" alt="scarav" className='lg:w-[100px]  h-[80px]' />
        </div>
        <div>
        <p>Barack Left</p>
        <h2>425.0156863</h2>
        </div> <div>
        <p>Barack Value</p>
        <h2>425.0156863</h2>
        </div>
        <button className='mt-5 px-8 py-3 text-[20px] border border-[#E7DBC9] rounded-2xl transition-all  hover:bg-[#4e4e4c80]'>Stake more</button>
        <div>
       
        </div>
      
      </div>
      </div>
      {/*  mobile*/}

        <div className='lg:hidden'>
      <div className='flex gap-8 justify-center flex-col items-center  lg:mt-0 mt-10  border md:mx-10 mx-5 rounded-2xl border-[#7e7e7c]'>
        <div  onClick={()=>setActive(!active)} className='flex gap-10 justify-center items-center pr-5'>
        <div className='flex items-center gap-2'>
            <img src="/images/front-coin.png" alt="front-coin"  className=' lg:w-auto   w-[100px]'/>
            <img src="/images/scarav.png" alt="scarav"  className='lg:w-[100px]  h-[50px]' />
        </div>
        <button className=' md:px-8 py-3 md:text-[20px] text-sm px-3 border border-[#E7DBC9] rounded-2xl transition-all  hover:bg-[#4e4e4c80]'>Buy more</button>
        {active?<AiOutlineMinus/>:<AiOutlinePlus/> }  

        </div>
        {
          active &&  <div className='flex justify-center gap-10 my-5'>
          <div>
          <p>Scarab Left</p>
          <h2>425.0156863</h2>
          </div> <div>
          <p>Scarab Locked</p>
          <h2>425.0156863</h2>
          </div>
          <div>   
          </div>
           
          </div>
        }
    
      
      </div>
      <div className='flex gap-8 justify-center flex-col items-center  lg:mt-0 mt-10  border md:mx-10 mx-5 rounded-2xl border-[#7e7e7c]'>
        <div  onClick={()=>setActivestake(!activestake)} className='flex gap-10 justify-center items-center pr-5'>
        <div className='flex items-center gap-2'>
        <img src="/images/split-coin.png" alt="split-coin" className='  lg:w-auto  w-[100px]'/>
            <img src="/images/scarav.png" alt="scarav"  className='lg:w-[100px]  h-[50px]' />
        </div>
        <button className=' md:px-8 py-3 md:text-[20px] text-sm px-3 border border-[#E7DBC9] rounded-2xl transition-all  hover:bg-[#4e4e4c80]'>Stake more</button>
        {activestake?<AiOutlineMinus/>:<AiOutlinePlus/> }  

        </div>
        {
          activestake &&  <div className='flex justify-center gap-10 my-5'>
          <div>
          <p>Scarab Left</p>
          <h2>425.0156863</h2>
          </div> <div>
          <p>Scarab Locked</p>
          <h2>425.0156863</h2>
          </div>
          <div>   
          </div>
           
          </div>
        }
    
      
      </div>
      </div>






{/* -------------------- */}

      {/* <div className='flex justify-center lg:flex-row flex-col md:mx-10 mx-5 gap-5  lg:mt-0 mt-10'>
      <Link href='/proposals' className='btn-border flex items-center lg:justify-center justify-between lg:p-2 p-4'>
        <div className=''>
          <p>Fulfill your <br/>obligations.</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="12" viewBox="0 0 49 12" fill="none" className='lg:hidden'>
         <path d="M48.5303 6.53033C48.8232 6.23744 48.8232 5.76256 48.5303 5.46967L43.7574 0.696699C43.4645 0.403805 42.9896 0.403805 42.6967 0.696699C42.4038 0.989592 42.4038 1.46447 42.6967 1.75736L46.9393 6L42.6967 10.2426C42.4038 10.5355 42.4038 11.0104 42.6967 11.3033C42.9896 11.5962 43.4645 11.5962 43.7574 11.3033L48.5303 6.53033ZM48 5.25L6.55671e-08 5.25L-6.55671e-08 6.75L48 6.75L48 5.25Z" fill="#E7DBC9"/>
        </svg>
        </div>
        </Link>
        <Link href='/diety'>
        <div className=' flex '>
        <div className='btn-border lg:p-2 p-4 w-full flex lg:justify-start justify-between items-center'>
         <div className='flex items-center gap-5'>
          <h2 className='font-[HORUS]'>Become<br/>
        Deity</h2>
        <p>Stake 1000 Scarab<br/>
for 2 weeks</p>
</div>
    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="12" viewBox="0 0 49 12" fill="none" className='lg:hidden'>
    <path d="M48.5303 6.53033C48.8232 6.23744 48.8232 5.76256 48.5303 5.46967L43.7574 0.696699C43.4645 0.403805 42.9896 0.403805 42.6967 0.696699C42.4038 0.989592 42.4038 1.46447 42.6967 1.75736L46.9393 6L42.6967 10.2426C42.4038 10.5355 42.4038 11.0104 42.6967 11.3033C42.9896 11.5962 43.4645 11.5962 43.7574 11.3033L48.5303 6.53033ZM48 5.25L6.55671e-08 5.25L-6.55671e-08 6.75L48 6.75L48 5.25Z" fill="#E7DBC9"/>
    </svg>
</div>
        </div>
        </Link>
      </div> */}
  
    </div>
  )
}

export default LardFaraoh
