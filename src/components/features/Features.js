import React from 'react'
import NavLanding from '../navLanding/NavLanding'
import './Features.css'

const Features = () => {
    return (
        <>
            <div className="relative lg:h-screen lg:overflow-hidden">
                <div
                    className="z-10 absolute inset-0 left-0 right-0 mx-auto"
                    style={{
                        mixBlendMode: 'screen',
                        backgroundImage: 'url(/images/features/featuresBG.png)',
                        backgroundRepeat: 'no-repeat',
                        // backgroundPosition: backgroundPositionBG,
                        backgroundSize: 'cover',
                    }}
                ></div>
                <div className=" absolute z-40 w-[50vw] right-0 h-screen bg-gradient-to-r from-transparent via-black to-black"></div>


                <div className="relative z-40">
                    <NavLanding />
                </div>

                <div className="relative z-40 w-screen h-screen justify-center flex flex-col">

                    <div className="flex absolute space-x-16 top-[20%] left-[20%]">
                        <h1 className="horus text-4xl ">Decentralized <br />Autonomous<br />organization</h1>
                        <div className="">
                            <p className="w-1/3">
                                A sophisticated and professional decentralized autonomous organization that pioneers decentralized governance and financial empowerment.
                            </p>
                            <button className="mt-4">More +</button>
                        </div>
                    </div>

                    <div className="flex gap-20 absolute top-1/2 -left-[20%]">

                        <div className="w-1/6 ml-auto">
                            <h1 className="horus text-2xl">Proposals</h1>
                            <p className="">
                                Propose investments that can encompass a wide range of actions & activities. Proposals serve as the foundation for shaping the DAO's trajectory
                            </p>
                            <button className="text-left mt-4">More + </button>
                        </div>

                        <div className="w-1/6 mr-auto">
                            <h1 className="horus text-2xl">Judgement</h1>
                            <p className="">
                                Judgement within Scarab DAO serves as a means to enforce accountability and adherence to the DAO's rules, guidelines, and ethical standards.
                            </p>
                            <button className="text-left mt-4">More +</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Features