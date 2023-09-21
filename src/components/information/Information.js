"use client"
import React, { useState, useEffect } from 'react'
import './Information.css'
import NavLanding from '../navLanding/NavLanding'
import Link from 'next/link'

const Information = () => {

    const [backgroundPosition, setBackgroundPosition] = useState('50% 50%');
    const [backgroundPositionBG, setBackgroundPositionBG] = useState('50% 50%')

    useEffect(() => {
        const handleMouseMove = (e) => {
            const _w = window.innerWidth / 2
            const _h = window.innerHeight / 2

            const _mouseX = e.clientX
            const _mouseY = e.clientY

            const factor = 0.03
            const factorBG = 0.003

            const backgroundX = 50 - (_w - _mouseX) * factor
            const backgroundY = 50 - (_h - _mouseY) * factor

            const backgroundXBG = 50 - (_w - _mouseX) * factorBG
            const backgroundYBG = 50 - (_h - _mouseY) * factorBG

            // const backgroundSize = `${100 + translateY}px ${100 + translateY}px`
            const backgroundPos = `${backgroundX}% ${backgroundY}%`
            const backgroundPosBG = `${backgroundXBG}% ${backgroundYBG}%`

            setBackgroundPosition(backgroundPos)
            setBackgroundPositionBG(backgroundPosBG)
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [])
    return (
        <>
            <div className="relative lg:h-screen lg:overflow-hidden">
                <div
                    className="z-10 absolute inset-0 hidden lg:block"
                    style={{
                        mixBlendMode: 'screen',
                        backgroundImage: 'url(https://media.scarabdao.io/landing-page/overlay.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: backgroundPosition,
                        backgroundSize: '150%',
                    }}
                ></div>

                <div
                    className="z-10 absolute inset-0 lg:block hidden"
                    style={{
                        mixBlendMode: 'screen',
                        backgroundImage: 'url(/images/information/informationBG.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: backgroundPositionBG,
                        backgroundSize: '110%',
                    }}
                ></div>

                <div
                    className="z-10 absolute inset-0 lg:hidden block"
                    style={{
                        mixBlendMode: 'screen',
                        backgroundImage: 'url(/images/information/informationBG.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: backgroundPositionBG,
                        backgroundSize: 'cover',
                    }}
                ></div>
                {/* <img src="images/become-pharok/pharokBG.png" alt="" className='absolute w-full h-screen object-cover' /> */}
                <div className="relative z-30">
                    <NavLanding />
                </div>

                <div className="z-20 relative flex flex-col top-[15%] lg:top-0 lg:flex-row justify-center w-3/4 mx-auto lg:w-full lg:justify-evenly items-center lg:h-full py-20 lg:py-0">
                    <div className="lg:space-y-20 lg:w-1/3 containerInformation flex flex-col justify-center items-center">
                        <div className="lg:w-1/3 containerInformation">
                            <h5 className="horus text-transparent bg-clip-text bg-[#E7DBC9] opacity-75 font-bold text-xl mb-2">What are Scarab NFTs?</h5>
                            <p className="leading-relaxed text-[#E7DBC9] mb-8">Scarab NFTs are unique digital assets minted within Scarab DAO. To get one, lock 0.5% of the max supply of $SCARAB.</p>
                            {/* <button className="text-[#E7DBC9] font-semibold text-left w-fit">More +</button> */}
                        </div>
                        <div className="lg:w-1/3 containerInformation">
                            <h5 className="horus text-transparent bg-clip-text bg-[#E7DBC9] opacity-75 font-bold text-xl mb-2">How are rewards distributed in Scarab DAO?</h5>
                            <p className="leading-relaxed text-[#E7DBC9] mb-8">Scarab rewards are distributed based on active participation in DAO through BARACS tokens.</p>
                            {/* <button className="text-[#E7DBC9] font-semibold text-left w-fit">More +</button> */}
                        </div>

                    </div>
                    <div className="lg:space-y-20 lg:w-1/3 containerInformation flex flex-col">
                        <div className="lg:w-1/3 containerInformation">
                            <h5 className="horus text-transparent bg-clip-text bg-[#E7DBC9] opacity-75 font-bold text-xl mb-2">What is the role of Deities in Scarab DAO?</h5>
                            <p className="leading-relaxed text-[#E7DBC9] mb-8">Deities are holders of Scarab NFTs with the privilege to propose actions, decisions, or investments within the DAO.</p>
                            {/* <button className="text-[#E7DBC9] font-semibold text-left w-fit">More +</button> */}
                        </div>
                        <div className="lg:w-1/3 containerInformation">
                            <h5 className="horus text-transparent bg-clip-text bg-[#E7DBC9] opacity-75 font-bold text-xl mb-2">What is the mission of Scarab DAO?</h5>
                            <p className="leading-relaxed text-[#E7DBC9] mb-8">Scarab DAO's mission is to combine ancient wisdom with modern decentralized governance to create a thriving and equitable ecosystem.</p>
                            {/* <button className="text-[#E7DBC9] font-semibold text-left w-fit">More +</button> */}
                        </div>

                    </div>
                    <div className="text-center lg:w-1/4 w-full containerInformation">
                        <div className="flex flex-col">
                            <h5 className="text-[#E7DBC9] font-semibold text-lg mb-4">Subscribe To Our Newsletter</h5>
                            <input type="email" name="" id="" placeholder='Enter Email' className='w-3/4 mx-auto p-2 bg-transparent rounded-md placeholder:ml-2 placeholder:text-[#E7DBC9] placeholder:font-semibold placeholder:bg-clip-text focus:opacity-100 duration-300 opacity-50 outline-none border border-[#E7DBC9]' />
                            <button className="w-3/4 mx-auto rounded-md border opacity-50 focus:opacity-100 duration-300 p-2 mt-3 mb-5 hover:opacity-75">Subscribe</button>
                            <p className="text-[#E7DBC9] text-cemter mx-auto w-3/4 ">Receive Latest Updates</p>
                        </div>
                        <div className="flex justify-evenly mx-auto lg:mt-32 mt-10 lg:w-3/4">
                            <Link target='_blank' href="https://Twitter.com/ScarabDAO"><img src="https://media.scarabdao.io/information/twitter.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
                            <Link target='_blank' href="https://t.me/ScarabDAO"><img src="https://media.scarabdao.io/information/telegram.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
                            <Link target='_blank' href="https://scarab-dao.gitbook.io/scarab/introduction/scarab-dao"><img src="images/gitbook.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
                            <Link target='' href="#"><img src="images/discord.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Information