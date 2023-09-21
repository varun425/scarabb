import Navebar from '@/components/Navebar'
import React from 'react'

let sliderItems = [
    {
      key: 1,
      img:"/images/heros/1.png",
    },
    {
      key: 2,
      img:"/images/heros/2.png",
    },
    {
      key: 3,
      img:"/images/heros/3.png",
    },
    {
      key: 4,
      img:"/images/heros/4.png",
    },
    {
      key: 5,
      img:"/images/heros/5.png",
    }
  ];
const page = ({params}) => {
    console.log(params,"hjkl")
    console.log("hjkl")
  // Find the card object using the id from the query parameter
  const card = sliderItems.find((item) => item.key === Number(params.id));
console.log(card)
console.log("hjkl")
//   if (!card) {
//     return <p>Loading...</p>;
//   }
  return (
    <div className='dapp-bg'>
    <Navebar/>
    <div className='max-w-[900px] mx-auto'>
    <div className='flex justify-between w-full gap-5   mt-10 '>
      <div className='w-[60%]' >
      <div className='flex items-center gap-3 justify-between image-border p-3 rounded-xl'>
      <div className='flex items-center'>

          <img src="/images/Vector.png" alt="vector" className='w-10'/>
          <h2 className='font-[HORUS] text-[50px]'>Deity</h2>
        </div>
     
        <button className=' px-8 py-2 text-[20px] border border-[#E7DBC9] rounded-xl'>Act as Diety </button>
        </div>
        <div className='flex gap-8 mt-8 '>
        <div className='flex items-center gap-3 justify-between image-border p-3 rounded-xl'>
          <h2>Lorem Siaepsum</h2>      
        </div>
         <div className='flex flex-col items-center gap-3 justify-between image-border p-3 rounded-xl'>
          <p>Wallet address</p>
          <h2>0x2425463632...63267</h2>
        </div>
        </div>
        <div className='mt-20 flex  items-center gap-3 justify-between border p-4 rounded-xl image-border'>
          <div>
          <p> Total Proposal</p>
          <h2>36</h2>
          </div>
          <div>
          <p>Agreed/ Disagreed</p>
          <h2>10 / 26</h2>
        </div>
        <div>
          <p>Total Voted</p>
          <h2>126</h2>
        </div>
        </div>
      </div>
      <div className='image-border p-3'>
      <img src={card.img} alt="img" className=' h-[400px] w-[400px]' />
      <div className='flex justify-between mt-2'>
              <p>Diety-1</p>
              <p>#1</p>
          </div>
      </div>
    </div>
  
  </div>
  {/* --------------- */}
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

export default page
