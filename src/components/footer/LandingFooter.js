import React from 'react'
import Link from 'next/link'
import './LandingFooter.css'

const LandingFooter = () => {
  return (
    <>
      {/* <div className="">
        <div className="relative z-20 flex justify-evenly items-center top-[15%]">
          <div className="space-y-20">
            <div className="">
              <h5 className="horus text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] to-transparent font-bold text-xl mb-2">What is Egyptian ERA ?</h5>
              <p className="text-[#E7DBC9] w-1/2 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
              <button className="text-[#E7DBC9] font-semibold text-left w-fit">More +</button>
            </div>
            <div className="">
              <h5 className="horus text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] to-transparent font-bold text-xl mb-2">Egyptian ERA again</h5>
              <p className="text-[#E7DBC9] w-1/2 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
              <button className="text-[#E7DBC9] font-semibold text-left w-fit">More +</button>
            </div>

          </div>
          <div className="space-y-20">
            <div className="">
              <h5 className="horus text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] to-transparent font-bold text-xl mb-2">Why Baracs?</h5>
              <p className="text-[#E7DBC9] w-1/2 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
              <button className="text-[#E7DBC9] font-semibold text-left w-fit">More +</button>
            </div>
            <div className="">
              <h5 className="horus text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] to-transparent font-bold text-xl mb-2">Egyptian ERA again</h5>
              <p className="text-[#E7DBC9] w-1/2 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
              <button className="text-[#E7DBC9] font-semibold text-left w-fit">More +</button>
            </div>

          </div>
          <div className="text-center mb-auto">
            <div className="flex flex-col">
              <h5 className="text-[#E7DBC9] font-semibold text-lg mb-4">Get all great news</h5>
              <input type="email" name="" id="" placeholder='Enter Email' className='w-3/4 mx-auto p-2 bg-transparent rounded-md placeholder:ml-2 placeholder:text-[#E7DBC9] placeholder:font-semibold placeholder:bg-clip-text focus:opacity-100 duration-300 opacity-50 outline-none border border-[#E7DBC9]' />
              <button className="w-3/4 mx-auto rounded-md border opacity-50 focus:opacity-100 duration-300 p-2 mt-3 mb-5 hover:opacity-75">Approve</button>
              <p className="text-[#E7DBC9] text-cemter mx-auto w-3/4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            </div>
            <div className="flex justify-evenly mx-auto w-1/2 mt-32">
              <img src="images/information/twitter.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" />
              <img src="images/information/telegram.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" />
              <img src="images/information/alien.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" />
              <img src="images/information/insta.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="z-20 relative flex flex-col top-[15%] lg:top-0 lg:flex-row justify-center w-3/4 mx-auto lg:w-full lg:justify-evenly items-center lg:items-start lg:h-full py-0 containerLandingFooter">
        <div className="lg:space-y-20 lg:w-1/2 containerInformation flex flex-col justify-center items-center">
          <div className="lg:w-1/2 containerInformation">
            <h5 className="horus text-transparent bg-clip-text bg-[#E7DBC9] opacity-75 font-bold text-xl mb-2">What are Scarab NFTs?</h5>
            <p className="leading-relaxed text-[#E7DBC9] mb-8">Scarab NFTs are unique digital assets minted within Scarab DAO. To get one, lock 0.5% of the max supply of $SCARAB.</p>
            {/* <button className="text-[#E7DBC9] font-semibold text-left w-fit">More +</button> */}
          </div>
          <div className="lg:w-1/2 containerInformation">
            <h5 className="horus text-transparent bg-clip-text bg-[#E7DBC9] opacity-75 font-bold text-xl mb-2">How are rewards distributed in Scarab DAO?</h5>
            <p className="leading-relaxed text-[#E7DBC9] mb-8">Scarab rewards are distributed based on active participation in DAO through BARACS tokens.</p>
            {/* <button className="text-[#E7DBC9] font-semibold text-left w-fit">More +</button> */}
          </div>

        </div>
        <div className="lg:space-y-20 lg:w-1/2 containerInformation flex flex-col">
          <div className="lg:w-1/2 containerInformation">
            <h5 className="horus text-transparent bg-clip-text bg-[#E7DBC9] opacity-75 font-bold text-xl mb-2">What is the role of Deities in Scarab DAO?</h5>
            <p className="leading-relaxed text-[#E7DBC9]">Deities are holders of Scarab NFTs with the privilege to propose actions, decisions, or investments within the DAO.</p>
            {/* <button className="text-[#E7DBC9] font-semibold text-left w-fit">More +</button> */}
          </div>
          <div className="lg:w-1/2 containerInformation">
            <h5 className="horus text-transparent bg-clip-text bg-[#E7DBC9] opacity-75 font-bold text-xl mb-2">What is the mission of Scarab DAO?</h5>
            <p className="leading-relaxed text-[#E7DBC9] mb-8">Scarab DAO's mission is to combine ancient wisdom with modern decentralized governance to create a thriving and equitable ecosystem.</p>
            {/* <button className="text-[#E7DBC9] font-semibold text-left w-fit">More +</button> */}
          </div>

        </div>
        <div className="text-center lg:w-1/3 w-full lg:mr-[10%] 3xl:w-1/5 4xl:w-1/6 containerInformation">
          <div className="flex flex-col">
            <h5 className="text-[#E7DBC9] font-semibold text-lg mb-4">Subscribe To Our Newsletter</h5>
            <input type="email" name="" id="" placeholder='Enter Email' className='w-3/4 mx-auto p-2 bg-transparent rounded-md placeholder:ml-2 placeholder:text-[#E7DBC9] placeholder:font-semibold placeholder:bg-clip-text focus:opacity-100 duration-300 opacity-50 outline-none border border-[#E7DBC9]' />
            <button className="w-3/4 mx-auto rounded-md border opacity-50 focus:opacity-100 duration-300 p-2 mt-3 mb-5 hover:opacity-75">Subscribe</button>
            <p className="text-[#E7DBC9] text-cemter mx-auto w-3/4 ">Receive Latest Updates</p>
          </div>
          <div className="flex justify-evenly mx-auto lg:mt-32 mt-10 lg:w-3/5">
            <Link target='_blank' href="https://Twitter.com/ScarabDAO"><img src="https://media.scarabdao.io/information/twitter.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
            <Link target='_blank' href="https://t.me/ScarabDAO"><img src="https://media.scarabdao.io/information/telegram.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
            <Link target='_blank' href="https://scarab-dao.gitbook.io/scarab/introduction/scarab-dao"><img src="images/gitbook.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
            <Link target='' href="#"><img src="images/discord.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
          </div>
        </div>
      </div>
    </>

  )
}

export default LandingFooter