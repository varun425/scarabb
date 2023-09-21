'use client'
import React, { useState } from 'react'
import {RxCopy} from 'react-icons/rx'
import {IoIosArrowBack} from 'react-icons/io'
import VotingModal from '../VotingModal'
import './ActInside.css'
const ActInside = () => {
    const [votingModal,setVotingModal]=useState(false)
  return (
    <div className='act-inside max-w-[1300px] xl:mx-auto md:mx-10 mx-5 lg:mt-10  '>
        <button onClick={()=>window.history.back()} className='ml-[35%] mb-1 text-[#E7DBC9] flex  gap-2 items-center'> <IoIosArrowBack/>Go Back</button>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>

        <div className=' '>
        <div className='image-border p-5'>
        <p>Author</p>
        <div className='flex justify-between my-2'>
            <h5>Pharok Sia</h5>
            <h5>@pharoksia</h5>
        </div>
        <p className='flex gap-2 items-center'>0x7237b3a......90fC6dB407D4407D4
            <RxCopy className='text-white'/>
        </p>
        </div>
        <div className='image-border p-5 my-2'>
        <div className='flex justify-between my-2'>
            <p> Started</p>
            <p>Ending</p>
        </div>
            <div className='flex justify-between my-2'>
            <h5>13/06/2023, 13:06</h5>
            <h5>13/06/2023, 13:06</h5>
        </div>
        </div>
        <div className='image-border p-5 my-2'>
        <h5>Project Docs</h5>  
        <div>
        <p>Twitter</p>   
        <h5>https://twitter.com/rome_viharo</h5>    
        </div> 
        <div className='my-4'>
        <p>Website</p>   
        <h5>Bigmotherdao</h5>    
        </div> 
        <div>
        <p>Website</p>   
        <h5>aikiwiki.com</h5>    
        </div> 
        </div>
        </div>       
        <div className=''>
            <div className='h-full  image-border p-5'>
            <h2 className='text-center'>Test the system</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            </div>
        </div>
        <div className='  relative'>
            <div className='h-full '>
                <div className='image-border p-5'>
            <h5>Reward Distribution</h5>
            <div className='flex gap-5 mt-4'>
             <h5>40%</h5>   <p>will go to your designated wallet.</p>
             
            </div>
            <div className='flex gap-5 my-2'>
             <h5>25%</h5>   <p>will go to all RVLT stakers.</p>
             
            </div>   <div className='flex gap-5'>
             <h5>25%</h5>   <p>will be burned.</p>
             
            </div>   <div className='flex gap-5 my-2'>
             <h5>5%</h5>   <p>will buy and burn CULT.</p>
             
            </div>
            <div className='lg:my-16 my-10'>
        <h5>Allocation from Treasury</h5>   
        <p>0.1 ETH</p>    
        </div>   
          <div>
        <h5>Revolutionary Wallet</h5>   
        <p>0x7237b3a......90fC6dB407D4407D4</p>    
        </div> 
        </div>
        <button onClick={()=>setVotingModal(true)} className='xl:absolute bottom-0 border border-[#E7DBC9] rounded-md py-2 w-full my-4'>Submit your Vote</button>    

        </div>
        </div>
        </div>
        {votingModal&&<VotingModal setVotingModal={setVotingModal}/>}

    </div>
  )
}

export default ActInside
