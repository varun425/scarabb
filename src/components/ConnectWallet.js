import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
const ConnectWallet = () => {
  const [isconnectWallet, setIsConnectWallet] = useState(false)
  return (
    <div className=' flex flex-col justify-center items-center  h-[80vh] '>


      {isconnectWallet &&
        <div className='absolute inset-0 flex justify-center items-center h-[100vh] backdrop-blur-lg z-20'>
          <div className='relative border border-[#ffffff80] rounded-xl p-10' style={{ backgroundColor: "background: rgba(7, 7, 4, 0.50)" }}>
            <p className='text-[#E7DBC9] text-[25px] text-center mb-10'>Connect wallet</p>
            <button onClick={() => setIsConnectWallet(false)} className='absolute right-1 top-1 text-2xl bg-[#5c595980] rounded-full p-2 '>
              <AiOutlineClose />
            </button>
            <div className='flex justify-center gap-10 items-center'>
              <img src="/images/difi.png" alt="defi" className='border border-[#ffffff80] p-2 rounded-md' />
              <img src="/images/meta.png" alt="meta" className='border border-[#ffffff80] p-1 rounded-md' />
              <img src="/images/c.png" alt="c" className='border border-[#ffffff80] p-2 rounded-md' />
            </div>
          </div>
        </div>}
      <div className='flex justify-center items-center flex-col '>
        <p className='text-[#E7DBC9] text-[20px] text-center'>Connect your Wallet <br />
          for your info</p>
        <button onClick={() => setIsConnectWallet(true)} className='mt-5 px-8 py-3 text-[20px] border border-[#E7DBC9] rounded-2xl'>Connect wallet</button>
      </div>

      <div className='font-[HORUS] text-2xl mt-20 flex md:gap-8 gap-2 items-center text-[#FEF2E0]'>
        <div className='scane '>
          <button className='left-btn  md:w-[200px] md:h-[80px]  md:text-[20px] text-[16px] px-5 py-2   '>My Era</button>
        </div>
        <button className='middle-btn md:w-[250px] md:h-[90px]  md:text-[20px] text-[16px] px-4 py-4   '>Scarab</button>
        <div className='scane'>
          <button className='right-btn   md:w-[200px] md:h-[80px]  md:text-[20px] text-[16px] px-5 py-2  '>Updates</button>
        </div>
      </div>

    </div>
  )
}

export default ConnectWallet
