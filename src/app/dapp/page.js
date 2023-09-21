'use client'
import Footer from '@/components/Footer'
// import './dapp.css'
import Navebar from '@/components/Navebar'
import LardFaraoh from '@/components/LardFaraoh'
import ConnectWallet from '@/components/ConnectWallet'
import { useState } from 'react'
import Link from 'next/link'
const page = () => {
  const [ismyEra, setmyEra] = useState(false)

  return (
    <main className='relative dapp-bg'>
      <Navebar />
      {/* <LandingPage/>  */}
      {/* <Features/> */}
      {ismyEra ? <ConnectWallet /> : <LardFaraoh />}
      {
        ismyEra == false && <div className='font-[HORUS] text-2xl mt-10 flex md:gap-8 gap-2 items-center absolute  left-1/2 -translate-x-1/2 text-[#FEF2E0]'>
          <div onClick={() => setmyEra(true)} className='scane '>
            <button className='left-btn  md:w-[200px] md:h-[80px]  md:text-[20px] text-[16px] px-5 py-2'>My Era</button>
          </div>  
          <button className='middle-btn md:w-[250px] md:h-[90px]  md:text-[20px] text-[16px] px-4 py-4'>Scarab</button>
          <Link href="/updates">
            <div className='scane'>
              <button className='right-btn   md:w-[200px] md:h-[80px]  md:text-[20px] text-[16px] px-5 py-2'>Updates</button>
            </div>
          </Link>
        </div>
      }


    </main>
  )
}

export default page
