"use client"
import React, { useState, useEffect } from 'react'
import Navebar from '../Navebar'
import './BecomePharok.css'
import LandingFooter from '../footer/LandingFooter'
import NavLanding from '../navLanding/NavLanding'

const BecomePharok = () => {
  const [backgroundPositionBG, setBackgroundPositionBG] = useState('50% 50%')
  // const [guardOnePosition, setGuardOnePosition] = useState('50% 130%')
  // const [guardTwoPosition, setGuardTwoPosition] = useState('50% 110%')

  const [guardOneTranslateX, setGuardOneTranslateX] = useState(0);
  const [guardOneTranslateY, setGuardOneTranslateY] = useState(0);
  const [guardTwoTranslateX, setGuardTwoTranslateX] = useState(0);
  const [guardTwoTranslateY, setGuardTwoTranslateY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const _w = window.innerWidth / 2
      const _h = window.innerHeight / 2

      const _mouseX = e.clientX
      const _mouseY = e.clientY

      // const factor = 0.03
      const factorBG = 0.003
      // const factorGuardOne = 0.03
      // const factorGuardTwo = 0.006

      const factorGuardOneX = 0.04
      const factorGuardOneY = 0.02

      const factorGuardTwoX = 0.02
      const factorGuardTwoY = 0.01

      // const translateX = (_w - _mouseX) * factorX
      // const translateY = (_h - _mouseY) * factorY;

      // const backgroundX = 50 - (_w - _mouseX) * factor
      // const backgroundY = 50 - (_h - _mouseY) * factor

      const backgroundXBG = 50 - (_w - _mouseX) * factorBG
      const backgroundYBG = 50 - (_h - _mouseY) * factorBG

      // const backgroundXGuardOne = 50 + (_w - _mouseX) * factorGuardOne
      // const backgroundYGuardOne = 50 + (_h - _mouseY) * factorGuardOne

      // const backgroundXGuardTwo = 50 + (_w - _mouseX) * factorGuardTwo
      // const backgroundYGuardTwo = 50 + (_h - _mouseY) * factorGuardTwo

      // const backgroundSize = `${100 + translateY}px ${100 + translateY}px`
      // const backgroundPos = `${backgroundX}% ${backgroundY}%`
      const backgroundPosBG = `${backgroundXBG}% ${backgroundYBG}%`
      // const backgroundPosGuardOne = `${backgroundXGuardOne}% ${backgroundYGuardOne}%`
      // const backgroundPosGuardTwo = `${backgroundXGuardTwo}% ${backgroundYGuardTwo}%`

      const guardOneTranslateX = (_mouseX - _w) * factorGuardOneX * 1.6; // Adjust the factor as needed
      const guardOneTranslateY = (_mouseY - _h) * factorGuardOneY * 1.6; // Adjust the factor as needed

      const guardTwoTranslateX = (_mouseX - _w) * factorGuardTwoX * 1.6; // Adjust the factor as needed
      const guardTwoTranslateY = (_mouseY - _h) * factorGuardTwoY * 1.6; // Adjust the factor as needed


      // setBackgroundPosition(backgroundPos)
      setBackgroundPositionBG(backgroundPosBG)
      // setGuardOnePosition(backgroundPosGuardOne)
      // setGuardTwoPosition(backgroundPosGuardTwo)

      setGuardOneTranslateX(guardOneTranslateX);
      setGuardOneTranslateY(guardOneTranslateY);
      setGuardTwoTranslateX(guardTwoTranslateX);
      setGuardTwoTranslateY(guardTwoTranslateY);
      // setBackgroundSize(backgroundSize)
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [])

  return (
    <>
      <div className="relative lg:pb-[440px] overflow-hidden">

        <div
          className="z-10 mt-auto"
          style={{
            mixBlendMode: 'screen',
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/become-pharok/pharokBG.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: backgroundPositionBG,
            position: 'absolute',
            backgroundSize: 'cover',
            bottom: '0',
          }}>
        </div>


        {/* big guard image on large screens */}
        <img
          src="/images/become-pharok/guard1.png"
          alt=""
          className='lg:w-[50%] 2xl:w-[42%] 3xl:w-[45%] 4xl:w-[24%] 5xl:w-[22%] mx-auto z-30 hidden lg:block'
          style={{
            position: 'absolute',
            left: '0%', // Align with the left edge
            bottom: '0%', // Center vertically
            right: '0%',
            transform: `translate(${-guardOneTranslateX}px, ${-guardOneTranslateY}px)`, // Apply horizontal and vertical translation
          }}
        />

        {/* big guard image on small screens */}
        <div
          className="z-20 lg:hidden right-[-15%]"
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/become-pharok/guard1.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: backgroundPositionBG,
            position: 'absolute',
            backgroundSize: '120%',
            bottom: '0',
          }}>
        </div>

        <img
          src="/images/become-pharok/guard2.png"
          alt=""
          className='lg:w-[45%] 2xl:w-[36%] 3xl:w-[35%] 4xl:w-[20%] 5xl:w-[18%] right-[-5%] 4xl:right-[20%] 5xl:right-[22%] mx-auto z-20 hidden lg:block'
          style={{
            position: 'absolute',
            bottom: '0%', // Center vertically
            transform: `translate(${-guardTwoTranslateX}px, ${-guardTwoTranslateY}px)`, // Apply horizontal and vertical translation

          }}
        />

        <div className="relative z-30">
          <NavLanding />
        </div>

        {/* large screens content */}
        <div className="flex-col mt-32 hidden lg:block h-screen">

          <div className="grid grid-cols-3 px-32">

            <div className="z-30 ">
              <h4 className="text-4xl">Step 1</h4>
              <p className=" my-6 w-1/2">Buy $SCARAB tokens from Decentralized Exchange to convert them into $BARACS.</p>
              <button className="text-[#E7DBC9] font-semibold text-left">Buy Now</button>
            </div>

            <div className=" text-center z-20">
              <h1 className="horus text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] via-[#E7DBC9] to-[#e7dbc900]" >Become</h1>
              <h1 className="horus text-8xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] via-[#E7DBC9] to-[#e7dbc900] lg:w-fit 2xl:w-full">Pharaoh</h1>
            </div>

            <div className="z-30 flex flex-col">
              <h4 className="text-4xl w-1/2 ml-auto">Step 3</h4>
              <p className=" my-6 w-1/2 ml-auto">Participate in DAO, vote on investing proposals and Judgements to shape the future of Scarab DAO.</p>
              <div className="w-1/2 ml-auto">
                <button className="text-[#E7DBC9] font-semibold text-left">Vote Now</button>
              </div>
            </div>

            <div className=" mt-[26rem] z-50 ">
              <h4 className="text-4xl mb-4">Step 2</h4>
              <p className="my-6 w-1/2">Convert the $SCARAB tokens you bought into $BARACS through the Convert Page on Scarab DAPP.</p>
              <button className="text-[#E7DBC9] font-semibold text-left">Convert Now</button>
            </div>

          </div>

        </div>

        {/* small screens content */}
        <div className="relative z-20 flex flex-col text-center pb-40 lg:hidden">

          <div className="mt-10 mb-64">
            <h5 className="horus text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] via-[#E7DBC9] to-[#e7dbc900]">Become</h5>
            <h5 className="horus text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] via-[#E7DBC9] to-[#e7dbc900]">Pharaoh</h5>
            {/* <p className="text-white w-3/5 mx-auto">Lorem ipsum dolor sit amet, consecte tu r adipiscing elit, </p> */}
          </div>


          <div className="mt-auto">
            <div className="mb-20 relative z-40">
              <h5 className="horus text-xl mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] via-[#E7DBC9] to-[#e7dbc900]">Step 1</h5>
              <h6 className="w-3/4 mx-auto my-3 text-white">Buy $SCARAB tokens from Decentralized Exchange to convert them into $BARACS.</h6>
              <button className="font-semibold">Buy Now</button>
            </div>

            <div className="left-blur h-[70vh] absolute z-40 w-full bg-gradient-to-b from-transparent lg:hidden via-black to-black"></div>

            <div className="mb-20 relative z-40">
              <h5 className="horus text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] via-[#E7DBC9] to-[#e7dbc900]">Step 2</h5>
              <h6 className="w-3/4 mx-auto my-3 text-white">Convert the $SCARAB tokens you bought into $BARACS through the Convert Page on Scarab DAPP.</h6>
              <button className="font-semibold">Convert Now</button>
            </div>

            <div className=" absolute z-40 w-full h-96 bg-gradient-to-b from-transparent lg:hidden via-black to-black"></div>

            <div className="relative z-40">
              <h5 className="horus text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] via-[#E7DBC9] to-[#e7dbc900]">Step 3</h5>
              <h6 className="w-3/4 mx-auto my-3 text-white">Participate in DAO, vote on investing proposals and Judgements to shape the future of Scarab DAO.</h6>
              <button className="font-semibold">Vote Now</button>
            </div>

            <div className="relative w-1/2 z-50 mx-auto">
              <img src="/images/become-god-page/coinFront.png" alt="" className="absolute" />
              <img src="/images/become-god-page/coinBack.png" alt="" className="absolute" />
            </div>
          </div>

        </div>

        <div className="left-blur h-screen absolute z-40 w-full bg-gradient-to-b from-transparent via-black to-black hidden lg:block"></div>

      </div>

      <div className='lg:py-32 py-20'>
        <LandingFooter />
      </div>
    </>
  )
}

export default BecomePharok