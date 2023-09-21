"use client"
import React, { useState, useEffect } from 'react';
import './LandingMenu.css'

const LandingMenu = () => {

    // const [backgroundsize, setBackgroundSize] = useState('100% 100%');
    const [backgroundPosition, setBackgroundPosition] = useState('50% 50%');
    const [backgroundPositionHero, setBackgroundPositionHero] = useState('50% 50%')

    useEffect(() => {
        const handleMouseMove = (e) => {
            const _w = window.innerWidth / 2
            const _h = window.innerHeight / 2

            const _mouseX = e.clientX
            const _mouseY = e.clientY

            const factor = 0.03
            const factorHero = 0.006

            // const factorX = 0.02
            // const factorY = 0.01

            // const translateX = (_w - _mouseX) * factorX
            // const translateY = (_h - _mouseY) * factorY;

            const backgroundX = 50 - (_w - _mouseX) * factor
            const backgroundY = 50 - (_h - _mouseY) * factor

            const backgroundXHero = 50 - (_w - _mouseX) * factorHero
            const backgroundYHero = 50 - (_h - _mouseY) * factorHero

            // const backgroundSize = `${100 + translateY}px ${100 + translateY}px`
            const backgroundPos = `${backgroundX}% ${backgroundY}%`
            const backgroundPosHero = `${backgroundXHero}% ${backgroundYHero}%`

            setBackgroundPosition(backgroundPos)
            setBackgroundPositionHero(backgroundPosHero)
            // setBackgroundSize(backgroundSize)
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [])

    return (
        <>
            <div className="relative landing-menu flex flex-col items-center h-screen w-screen lg:overflow-hidden">
                <img src="images/Logo.png" alt="" className="top-10 z-40 lg:w-1/2 w-[80%] opacity-50 mt-10 lg:mb-auto mb-10" />

                <div className="left-blur h-screen absolute z-20 w-full bg-gradient-to-r from-black via-transparent to-black hidden lg:block"></div>

                <div
                    className="z-10 absolute h-screen w-full object-cover hidden lg:block"
                    style={{
                        backgroundImage: 'url(/images/landing-page/landingmenu.png)',
                        backgroundPosition: backgroundPositionHero,
                        mixBlendMode: 'screen',
                        width: '65%',
                        height: '100%',
                        position: 'absolute',
                        bottom: '0',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '110%',
                        willChange: 'transform',
                    }}
                ></div>

                <div
                    className="z-10 absolute h-screen w-full object-cover block lg:hidden"
                    style={{
                        backgroundImage: 'url(/images/landing-page/landingmenu.png)',
                        backgroundPosition: backgroundPositionHero,
                        mixBlendMode: 'screen',
                        position: 'absolute',
                        bottom: '0',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                ></div>

                <div className="right-blur h-screen absolute z-20 w-full bg-gradient-to-l from-black via-transparent to-black hidden lg:block"></div>

                <div
                    className="z-30 hidden lg:block"
                    style={{
                        mixBlendMode: 'screen',
                        opacity: '0.6',
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(/images/landing-page/Overlay.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: backgroundPosition,
                        position: 'absolute',
                        bottom: '0',
                        backgroundSize: '150%'
                    }}>
                </div>

                <div
                    className="z-30 block lg:hidden"
                    style={{
                        mixBlendMode: 'screen',
                        opacity: '0.6',
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(/images/landing-page/Overlay.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: backgroundPosition,
                        position: 'absolute',
                        bottom: '0',
                        backgroundSize: 'cover'
                    }}>
                </div>

                <div className="z-40 lg:w-1/2 lg:mt-32 containerLandingMenu lg:flex lg:flex-row flex-col lg:justify-between h-full justify-center mb-16">

                    {/* large screens */}
                    <div className="flex-col space-y-10 w-full hidden lg:flex">
                        <div className="flex flex-col space-y-4">
                            <h5 className="horus text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] to-transparent font-bold text-xl">Egyptian ERA again</h5>
                            <p className="horus text-[#E7DBC9] w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            <button className="text-[#E7DBC9] font-semibold mt-10 text-left w-fit">More +</button>
                        </div>
                        <div className="flex flex-col">
                            <h5 className="horus text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] to-transparent font-bold text-3xl ml-14">Lorem ipsum</h5>
                            <h5 className="horus text-[#E7DBC9] text-3xl">SAN % TI TASAR M</h5>
                            <h5 className="horus text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] to-transparent font-bold text-3xl">KONGRESI</h5>
                            <button className="text-[#E7DBC9] font-semibold mt-10 text-left w-fit">More +</button>
                        </div>
                    </div>

                    <div className="flex-col space-y-16 w-1/2 ml-auto hidden lg:flex">
                        <div className="flex flex-col">
                            <h5 className="horus text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] to-transparent font-bold w-1/2">How we managed to earn more?</h5>
                            <button className="text-[#E7DBC9] font-semibold mt-10 text-left w-fit">More +</button>
                        </div>
                        <div className="flex flex-col">
                            <h5 className="horus text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] to-transparent font-bold text-3xl">Gods</h5>
                            <p className="horus text-[#E7DBC9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            <button className="text-[#E7DBC9] font-semibold mt-10 text-left w-fit">More +</button>
                        </div>
                    </div>



                    {/* small screens */}
                    <div className="flex lg:hidden w-full justify-between"> 
                        <div className="flex flex-col w-1/2">
                            <h5 className="horus text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] to-transparent font-bold text-xl">Egyptian ERA again</h5>
                            {/* <p className="horus text-[#E7DBC9] w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p> */}
                            <button className="text-[#E7DBC9] font-semibold mt-2 text-left w-fit">More +</button>
                        </div>
                        <div className="flex flex-col">
                            <h5 className="horus text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] to-transparent font-bold text-xl">Gods</h5>
                            <button className="text-[#E7DBC9] font-semibold mt-2 text-left">More +</button>
                        </div>
                    </div>

                    <div className="flex flex-col lg:hidden space-y-5 justify-end absolute bottom-5">
                        <div className="flex flex-col">
                            <h5 className="horus text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] to-transparent font-bold w-1/2 text-xl">How we managed to earn more?</h5>
                            <button className="text-[#E7DBC9] font-semibold mt-2 text-left w-fit">More +</button>
                        </div>
                        <div className="flex flex-col">
                            <h5 className="horus text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] to-transparent font-bold text-xl">Lorem ipsum</h5>
                            <h5 className="horus text-[#E7DBC9] text-xl">SAN % TI TASAR M</h5>
                            <h5 className="horus text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] to-transparent font-bold text-xl">KONGRESI</h5>
                            <h5 className="horus text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] to-transparent font-bold text-xl">Gods</h5>
                            {/* <p className="horus text-[#E7DBC9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p> */}
                            <button className="text-[#E7DBC9] font-semibold mt-2 text-left w-fit">More +</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LandingMenu;