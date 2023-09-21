"use client"
import React, { useState, useEffect } from 'react'
import './BecomeGodPage.css'
import NavLanding from '../navLanding/NavLanding'
import LandingFooter from '../footer/LandingFooter'

const BecomeGodPage = () => {
    const [backgroundPositionBG, setBackgroundPositionBG] = useState('50% 50%')

    const [godTranslateX, setGodTranslateX] = useState(0);
    const [godTranslateY, setGodTranslateY] = useState(0);

    const [godLeftTranslateX, setGodLeftTranslateX] = useState(0);
    const [godLeftTranslateY, setGodLeftTranslateY] = useState(0);

    const [godRightTranslateX, setGodRightTranslateX] = useState(0);
    const [godRightTranslateY, setGodRightTranslateY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const _w = window.innerWidth / 2
            const _h = window.innerHeight / 2

            const _mouseX = e.clientX
            const _mouseY = e.clientY

            const factorBG = 0.003

            const factorGodX = 0.03
            const factorGodY = 0.02

            const factorGodLeftX = 0.009
            const factorGodLeftY = 0.006

            const factorGodRightX = 0.009
            const factorGodRightY = 0.006

            const backgroundXBG = 50 - (_w - _mouseX) * factorBG
            const backgroundYBG = 50 - (_h - _mouseY) * factorBG

            const backgroundPosBG = `${backgroundXBG}% ${backgroundYBG}%`

            const godTranslateX = (_mouseX - _w) * factorGodX * 1.6; // Adjust the factor as needed
            const godTranslateY = (_mouseY - _h) * factorGodY * 1.6; // Adjust the factor as needed

            const godLeftTranslateX = (_mouseX - _w) * factorGodLeftX * 1.6; // Adjust the factor as needed
            const godLeftTranslateY = (_mouseY - _h) * factorGodLeftY * 1.6; // Adjust the factor as needed

            const godRightTranslateX = (_mouseX - _w) * factorGodRightX * 1.6; // Adjust the factor as needed
            const godRightTranslateY = (_mouseY - _h) * factorGodRightY * 1.6; // Adjust the factor as needed

            setBackgroundPositionBG(backgroundPosBG)

            setGodTranslateX(godTranslateX);
            setGodTranslateY(godTranslateY);

            setGodLeftTranslateX(godLeftTranslateX);
            setGodLeftTranslateY(godLeftTranslateY);

            setGodRightTranslateX(godRightTranslateX);
            setGodRightTranslateY(godRightTranslateY);

        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [])

    return (
        <>
            <div className="relative lg:pb-[440px] overflow-hidden">

                {/* large screen bg */}
                <div
                    className="z-10 mt-auto"
                    style={{
                        mixBlendMode: 'screen',
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(/images/become-god-page/godpageBG.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: backgroundPositionBG,
                        position: 'absolute',
                        backgroundSize: 'cover',
                        bottom: '0',
                    }}>
                </div>

                {/* small screen bg */}
                {/* <div
                    className="z-10 mt-auto lg:hidden block"
                    style={{
                        mixBlendMode: 'screen',
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(/images/become-god-page/godpageBG.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: backgroundPositionBG,
                        position: 'absolute',
                        backgroundSize: 'cover',
                        bottom: '0',
                    }}>
                </div> */}

                {/* large screen god */}
                <img
                    src="/images/become-god-page/becomeGodPageHero.png"
                    alt=""
                    className='mx-auto z-20 hidden lg:block lg:w-full 2xl:w-[80%] 3xl:w-[80%] 4xl:w-[43%]'
                    style={{
                        position: 'absolute',
                        left: '0%',
                        bottom: '-30%',
                        right: '0%',
                        transform: `translate(${-godTranslateX}px, ${-godTranslateY}px)`, // Apply horizontal and vertical translation
                    }}
                />

                {/* small image main  */}
                <div
                    className="z-20 mt-auto lg:hidden left-0 right-0 mx-auto"
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(/images/become-god-page/god.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: backgroundPositionBG,
                        position: 'absolute',
                        backgroundSize: 'cover',
                        bottom: '0',
                    }}>
                </div>

                <img
                    src="/images/become-god-page/godleft.png"
                    alt=""
                    className='lg:w-[45%] 2xl:w-[35%] 3xl:w-[35%] 4xl:w-[20%] lg:left-[-5%] 3xl:left-[-1%] mx-auto z-10 hidden lg:block'
                    style={{
                        position: 'absolute',
                        // left: '-1%',
                        bottom: '0%',
                        transform: `translate(${-godLeftTranslateX}px, ${-godLeftTranslateY}px)`, // Apply horizontal and vertical translation
                    }}
                />

                <img
                    src="/images/become-god-page/godright.png"
                    alt=""
                    className='lg:w-[45%] 2xl:w-[35%] 3xl:w-[35%] 4xl:w-[20%] lg:right-[-5%] 3xl:right-[-1%] mx-auto z-10 hidden lg:block'
                    style={{
                        position: 'absolute',
                        // right: '-1%',
                        bottom: '0%',
                        transform: `translate(${-godRightTranslateX}px, ${-godRightTranslateY}px)`, // Apply horizontal and vertical translation
                    }}
                />


                <div className="relative z-30">
                    <NavLanding />
                </div>

                {/* large screen content */}
                <div className="flex-col mt-32 hidden lg:block h-screen">

                    <div className="grid grid-cols-3 px-32">

                        <div className="z-20 col-span-1">
                            <h4 className="text-4xl">Step 1</h4>
                            <p className=" my-6 w-1/2">Buy $SCARAB tokens from Decentralized Exchange to mint your own Scarab NFT.</p>
                            <button className="text-[#E7DBC9] font-semibold text-left">Buy Now</button>
                        </div>

                        <div className="flex flex-col justify-center items-center text-center z-10 col-span-1">
                            <h1 className="horus text-5xl mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] via-[#E7DBC9] to-[#e7dbc900]" >Turn into</h1>
                            <h1 className="horus text-9xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#E7DBC9] via-[#E7DBC9] to-[#e7dbc900]" >Deity</h1>
                        </div>

                        <div className="z-30 flex flex-col">
                            <h4 className="text-4xl w-1/2 ml-auto">Step 3</h4>
                            <p className=" my-6 w-1/2 ml-auto">Propose Investment proposals or judgements, you’re now a true protector of the Scarab DAO.</p>
                            <div className="w-1/2 ml-auto">
                                <button className="text-[#E7DBC9] font-semibold text-left">Proposals</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-16 lg:mt-[35rem] 2xl:mt-[50rem] z-50 col-span-4 w-full">
                            <h6 className="horus text-5xl text-right text-[#E7DBC9]">Step 2</h6>
                            <div className="space-y-6">
                                <p className="w-1/3">Mint a Scarab NFT by locking your $SCARAB tokens inside the locked pool through Scarab DAPP.</p>
                                <button className="text-[#E7DBC9] font-semibold text-left">Mint Now</button>
                            </div>
                        </div>

                    </div>


                </div>


                {/* small screen content */}

                <div className="relative flex flex-col z-20 text-center pb-40 lg:hidden">

                    <div className="mt-10 mb-64">
                        <h5 className="horus text-xl">Turn into</h5>
                        <h5 className="horus text-7xl">Deity</h5>
                        {/* <p className="text-white w-3/5 mx-auto">Lorem ipsum dolor sit amet, consecte tu r adipiscing elit, </p> */}
                    </div>


                    <div className="mt-auto">
                        <div className="mb-20 relative z-40">
                            <h5 className="horus text-xl mt-20">Step 1</h5>
                            <h6 className="text-white w-3/5 mx-auto my-3">Buy $SCARAB tokens from Decentralized Exchange to mint your own Scarab NFT.</h6>
                            <button className="">Buy Now</button>
                        </div>

                        <div className="mb-20 relative z-40">
                            <h5 className="horus text-xl">Step 2</h5>
                            <h6 className="text-white w-3/5 mx-auto my-3">Mint a Scarab NFT by locking your $SCARAB tokens inside the locked pool through Scarab DAPP.</h6>
                            <button className="">Mint Now</button>
                        </div>

                        <div className="left-blur h-[60vh] absolute z-40 w-full bg-gradient-to-b from-transparent lg:hidden via-black to-black"></div>

                        <div className="relative z-40">
                            <h5 className="horus text-3xl">Step 3</h5>
                            <h6 className="text-white w-3/5 mx-auto my-3">Propose Investment proposals or judgements, you’re now a true protector of the Scarab DAO.</h6>
                            <button className="">Proposals</button>
                        </div>

                        <div className="relative w-1/2 z-50 mx-auto">
                            <img src="/images/become-god-page/coinFront.png" alt="" className="absolute" />
                            <img src="/images/become-god-page/coinBack.png" alt="" className="absolute" />
                        </div>
                    </div>

                </div>

                <div className="left-blur lg:h-screen absolute z-40 w-full bg-gradient-to-b from-transparent hidden lg:block via-black to-black"></div>
            </div>

            <div className='lg:py-32 py-20'>
                <LandingFooter />
            </div>
        </>
    )
}

export default BecomeGodPage