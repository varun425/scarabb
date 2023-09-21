'use client'
import React, { useState } from 'react'
import Link from 'next/link'
const Proposal = () => {
  const [activeTab,setActiveTab]=useState('Live')
  const handleActiveTab=(text)=>{
    setActiveTab(text)
  }
  return (
    <div className='max-w-[1400px] mx-auto '>
      <div className='flex md:gap-20 gap-5 justify-center '>
        <select name="" id="" className='bg-transparent '>
            <option value="sort by">sort by</option>
        </select>
        <div className='flex gap-2 border border-[#E7DBC988] rounded-xl  p-1 '>
            <button onClick={()=>setActiveTab('Live')} className={`${activeTab=='Live'?'border':''}   py-2 md:px-4 px-3 rounded-md`}>Live</button>
            <button onClick={()=>setActiveTab('Pending')} className={`${activeTab=='Pending'?'border':''}  py-2 md:px-4 px-3 rounded-md`}>Pending</button>
            <button onClick={()=>setActiveTab('Completed')} className={`${activeTab=='Completed'?'border':''}  py-2 md:px-4 px-3 rounded-md`}>Completed</button>
        </div>
      </div>

      {/*-------- cards----------- */}
      <div className='lg:grid hidden grid-cols-3 gap-10 mt-8'>
    
     <div className='card-parant'>
      <div className='left-card p-8 border rounded-2xl'>
      <div className='flex justify-between items-center mt-10'>
            <h2 className='text-[22px]'>Test the system</h2>
            <h2 className='text-[22px]'>Act ( 250 )</h2>
        </div>
        <div>
        <div className='w-full h-3 border border-[#E7DBC9] my-1'><div className='bg-[#E7DBC9] h-full w-[50%]'></div></div>
            <div className='flex justify-between items-center mt-2'>
            <div>
                <p>Approved</p>
                <h2 className='text-[22px]'> 76% ( 120 )</h2>
            </div>
            <div>
            <p>Approved</p>
                <h2 className='text-[22px]'> 76% ( 120 )</h2>
            </div>
            </div>
        </div>
        <div className='flex justify-between items-center mt-10'>
        <div>
        <p>Result</p>
        <h6 className='text-[20px]'>Pending</h6>
        </div>
        <div>
        <p>Ending</p>
        <h6 className='text-[20px]'>N/A</h6>
        </div><div>
        <p>Total Votes</p>
        <h6 className='text-[20px]'>16</h6>
        </div>
        </div>
      </div>
      </div>

      <div className='middle-card p-8 border rounded-2xl'>
      <div className='flex justify-between items-center mt-10'>
            <h2 className='text-[22px]'>Test the system</h2>
            <h2 className='text-[22px]' >Act ( 250 )</h2>
        </div>
        <div>
            <div className='w-full h-3 border  border-[#E7DBC9] my-1'><div className='bg-[#E7DBC9] h-full w-[50%]'></div></div>
            <div className='flex justify-between items-center mt-2'>
            <div>
                <p>Approved</p>
                <h2 className='text-[22px]'> 76% ( 120 )</h2>
            </div>
            <div>
            <p>Approved</p>
                <h2 className='text-[22px]'> 76% ( 120 )</h2>
            </div>
            </div>
        </div>
        <div className='flex justify-between items-center mt-10'>
        <div>
        <p>Result</p>
        <h6 className='text-[20px] text-center'>Pending</h6>
        </div>
        <div>
        <p>Ending</p>
        <h6 className='text-[20px] text-center'>N/A</h6>
        </div><div>
        <p>Total Votes</p>
        <h6 className='text-[20px] text-center'>16</h6>
        </div>
        </div>
      </div>

      <div className='card-parant'>

      <div className='right-card p-8 border rounded-2xl'>
      <div className='flex justify-between items-center mt-10'>
            <h2 className='text-[22px]'>Test the system</h2>
            <h2 className='text-[22px]'>Act ( 250 )</h2>
        </div>
        <div>
        <div className='w-full h-3 border  border-[#E7DBC9] my-1'><div className='bg-[#E7DBC9] h-full w-[50%]'></div></div>
            <div className='flex justify-between items-center mt-2'>
            <div>
                <p>Approved</p>
                <h2 className='text-[22px]'> 76% ( 120 )</h2>
            </div>
            <div>
            <p>Approved</p>
                <h2 className='text-[22px]' > 76% ( 120 )</h2>
            </div>
            </div>
        </div>
        <div className='flex justify-between items-center mt-10'>
        <div>
        <p>Result</p>
        <h6 className='text-[20px] text-center'>Pending</h6>
        </div>
        <div>
        <p>Ending</p>
        <h6 className='text-[20px] text-center'>N/A</h6>
        </div><div>
        <p>Total Votes</p>
        <h6 className='text-[20px] text-center'>16</h6>
        </div>
        </div>
      </div>
      </div>
      </div>
    {/* -----------mobile-cards------ */}
    <div className='lg:hidden grid grid-cols-1 gap-10 mt-8 md:mx-20 mx-5'>
    
    <div className='card-parant'>
     <div className=' p-8 border rounded-2xl'>
     <div className='flex justify-between items-center mt-10'>
           <h2 className='text-[22px]'>Test the system</h2>
           <h2 className='text-[22px]'>Act ( 250 )</h2>
       </div>
       <div>
       <div className='w-full h-3 border border-[#E7DBC9] my-1'><div className='bg-[#E7DBC9] h-full w-[50%]'></div></div>
           <div className='flex justify-between items-center mt-2'>
           <div>
               <p>Approved</p>
               <h2 className='text-[22px]'> 76% ( 120 )</h2>
           </div>
           <div>
           <p>Approved</p>
               <h2 className='text-[22px]'> 76% ( 120 )</h2>
           </div>
           </div>
       </div>
       <div className='flex justify-between items-center mt-10'>
       <div>
       <p>Result</p>
       <h6 className='text-[20px]'>Pending</h6>
       </div>
       <div>
       <p>Ending</p>
       <h6 className='text-[20px]'>N/A</h6>
       </div><div>
       <p>Total Votes</p>
       <h6 className='text-[20px]'>16</h6>
       </div>
       </div>
     </div>
     </div>

     <div className='middle-card p-8 border rounded-2xl'>
     <div className='flex justify-between items-center mt-10'>
           <h2 className='text-[22px]'>Test the system</h2>
           <h2 className='text-[22px]' >Act ( 250 )</h2>
       </div>
       <div>
           <div className='w-full h-3 border  border-[#E7DBC9] my-1'><div className='bg-[#E7DBC9] h-full w-[50%]'></div></div>
           <div className='flex justify-between items-center mt-2'>
           <div>
               <p>Approved</p>
               <h2 className='text-[22px]'> 76% ( 120 )</h2>
           </div>
           <div>
           <p>Approved</p>
               <h2 className='text-[22px]'> 76% ( 120 )</h2>
           </div>
           </div>
       </div>
       <div className='flex justify-between items-center mt-10'>
       <div>
       <p>Result</p>
       <h6 className='text-[20px] text-center'>Pending</h6>
       </div>
       <div>
       <p>Ending</p>
       <h6 className='text-[20px] text-center'>N/A</h6>
       </div><div>
       <p>Total Votes</p>
       <h6 className='text-[20px] text-center'>16</h6>
       </div>
       </div>
     </div>

     <div className='card-parant'>

     <div className=' p-8 border rounded-2xl'>
     <div className='flex justify-between items-center mt-10'>
           <h2 className='text-[22px]'>Test the system</h2>
           <h2 className='text-[22px]'>Act ( 250 )</h2>
       </div>
       <div>
       <div className='w-full h-3 border  border-[#E7DBC9] my-1'><div className='bg-[#E7DBC9] h-full w-[50%]'></div></div>
           <div className='flex justify-between items-center mt-2'>
           <div>
               <p>Approved</p>
               <h2 className='text-[22px]'> 76% ( 120 )</h2>
           </div>
           <div>
           <p>Approved</p>
               <h2 className='text-[22px]' > 76% ( 120 )</h2>
           </div>
           </div>
       </div>
       <div className='flex justify-between items-center mt-10'>
       <div>
       <p>Result</p>
       <h6 className='text-[20px] text-center'>Pending</h6>
       </div>
       <div>
       <p>Ending</p>
       <h6 className='text-[20px] text-center'>N/A</h6>
       </div><div>
       <p>Total Votes</p>
       <h6 className='text-[20px] text-center'>16</h6>
       </div>
       </div>
     </div>
     </div>
     </div>

    {/* --------------- footer---------- */}
  
    <div className='font-[HORUS] text-2xl  flex md:gap-8 gap-2 justify-center items-center text-[#FEF2E0] md:mt-32 my-10'>
  <div  className='scane '>
   <button className='left-btn  md:w-[200px] md:h-[80px]  md:text-[20px] text-[16px] px-5 py-2   '>Submit</button>
   </div>
   <button className='middle-btn md:w-[250px] md:h-[90px]  md:text-[20px] text-[16px] px-4 py-4   '>Proposals</button>
   <Link href="/judgment">
  <div className='scane'>
   <button className='right-btn   md:w-[200px] md:h-[80px]  md:text-[20px] text-[16px] px-5 py-2  '>Judgements</button>
   </div>
   </Link>

 </div> 
    </div>
  )
}

export default Proposal
