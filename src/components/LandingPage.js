import React from 'react'
import Navebar from './Navebar'

const LandingPage = () => {
  return (
    <div className='landing-bg relative '>
      <div className=' mt-[300px] flex flex-col gap-10 justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2' >
      <div className='flex  justify-between items-center w-full gap-20'>
        <div>
        <p>Scarab Price</p>
        <h2>$0.0000000256</h2>
        </div>
        <div>
        <p>Marketcap</p>
        <h2>$1,664,815</h2>
        </div>
         <div className=' flex items-center'>
          <img src="/images/coin.png" alt="coin" className='w-[150px]'/>
          <div>
        <p>Buy Scarab</p>
        <h2>Now</h2>
        </div>
        </div>
    </div>
    <div className='flex  justify-between items-center w-full gap-20'>
    <div className='py-10'>
        <p>Treasury Bal</p>
        <h2>$1,664,815</h2>
        </div>
        <div>
        <p>TVL</p>
        <h2>$1,664,815</h2>
        </div> 
        <div>
        <p>Scarab Burned</p>
        <h2>$1,664,815</h2>
        </div>
        <div>
        <p>Rewards</p>
        <h2>67.48 ETH</h2>
        </div>
    </div>
  
    </div>
  
    </div>
  )
}

export default LandingPage
