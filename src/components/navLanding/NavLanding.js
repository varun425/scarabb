"use client"
import React, { useState } from 'react'
import Link from 'next/link';

const NavLanding = () => {

    const [activeNav, setActiveNav] = useState(false)

    return (
        <>
            <div className='md:flex hidden justify-between max-w-[1200px] font-[HORUS] pt-8 mx-auto'>
                <Link target='#' href="#"><button className='navlink text-[#E7DBC9]'>Home</button></Link>
                <Link href="#"><button className='navlink text-[#E7DBC9]'>Buy Scarab </button></Link>
                <Link target='_blank' href="https://scarab-dao.gitbook.io/scarab/introduction/scarab-dao"><button className='navlink text-[#E7DBC9]'>Docs </button></Link>
                <Link href="#"><button className='text-[#E7DBC9] border-2 border-white rounded-lg py-2 px-8 duration-500 hover:bg-[#4e4e4c80]'>DAPP</button></Link>

            </div>
            <div className='md:hidden flex justify-between items-center p-10'>
                    <h5 className="horus" style={{ fontSize: '20px' }}>Scarab</h5>
                    <h5 className="horus" style={{ fontSize: '20px' }}>Buy Scarab</h5>
                    <h5 style={{ fontSize: '20px' }} onClick={() => setActiveNav(!activeNav)} className='cursor-pointer horus text-xs'>E</h5>
            </div>
            {
                activeNav && <div className='absolute z-30 bg-black w-full md:hidden flex flex-col justify-between text-center font-[HORUS] py-14 gap-5'>
                    {/* <Link target='' href=''><button className='navlink text-[#E7DBC9]'>Home </button></Link>
                    <Link target='' href=''><button className='navlink text-[#E7DBC9]'>Buy Scarab </button></Link> */}
                    <Link target='_blank' href='https://scarab-dao.gitbook.io/scarab/introduction/scarab-dao'><button className='navlink text-[#E7DBC9]'>Docs </button></Link>
                    <Link target='' href=''><button className='navlink text-[#E7DBC9]'>DAPP </button></Link>
                </div>
            }
        </>
    )
}

export default NavLanding