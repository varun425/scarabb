import React, { useEffect, useState } from 'react';
import './Landing.css'
import Link from 'next/link';
import Presale from "../../components/preSale/PreSale"
const Landing = ({ setIsClick }) => {

  const [open, setOpen] = useState(true);

  const [backgroundPosition, setBackgroundPosition] = useState('50% 50%');
  const [heroPosition, setHeroPosition] = useState('50% 50%');
  const [overlayPos, setOverlayPos] = useState('50% 50%');
  const [mainHeroX, setmainHeroX] = useState(0); // Separate translateX for the table
  const [mainHeroY, setmainHeroY] = useState(0); // Separate translateY for the table
  useEffect(() => {
    const handleMouseMove = (e) => {
      const _w = window.innerWidth / 2;
      const _h = window.innerHeight / 2;
      const _mouseX = e.clientX;
      const _mouseY = e.clientY;

      // Adjust the factors to control the speed of movement
      const factor1 = 0.003; // Slower movement for the background
      const factor2 = 0.01; // Slower movement for the hero
      const factorover = 0.02;
      const factorX = 0.02; // Slower movement for the horizontal translation
      const factorY = 0.01;
      const translateX = (_mouseX - _w) * factorX;
      const translateY = (_mouseY - _h) * factorY;
      // Calculate background positions based on mouse movement
      const backgroundX = 50 + (- _mouseX + _w) * factor1;
      const backgroundY = 50 + (_mouseY - _h) * factor1;
      const heroX = 50 + (_mouseX - _w) * factor2;
      const heroY = 50 + (_mouseY - _h) * factor2;
      const overlayX = 50 + (_mouseX - _w) * factorover;
      const overlayY = 50 + (_mouseY - _h) * factorover;
      // Create the background and hero position strings
      const mainHeroX = (_mouseX - _w) * factorX * 0.2; // Adjust the factor as needed
      const mainHeroY = (_mouseY - _h) * factorY * 0.2; // Adjust the factor as needed
      const backgroundPos = `${backgroundX}% ${backgroundY}%`;
      const overlayPos = `${overlayX}% ${overlayY}%`;
      const heroPos = `${heroX}% ${heroY}%`;
      // Set the background and hero positions in state
      setBackgroundPosition(backgroundPos);
      setHeroPosition(heroPos);
      setOverlayPos(overlayPos);
      setmainHeroX(mainHeroX);
      setmainHeroY(mainHeroY);
    };

    // Add the mousemove event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

  return (
    <div className=''>

      {
        open &&
        <Link target='_blank' href='presale'>
          <div onClick={() => { setOpen(!open) }} className="absolute z-50 lg:w-1/2 w-[90%] mx-auto left-0 right-0 bg-[#07070480] border border-[#ffffff33] rounded-2xl backdrop-blur-lg p-4" style={{ top: '8%' }}>
            <div className="absolute right-0">
              {/* <img src="https://media.scarabdao.io/landing-page/Union.png" alt="" className="w-1/2 mx-auto" /> */}
              <svg style={{ backgroundColor: '#fff', padding: '2px', borderRadius: '3px', color: '#000', fontWeight: 'bold', fontSize: '100px', marginRight: '10px' }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(!open) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>

            <div className="flex flex-col justify-center items-center text-center">
              <h1 className='horus font-bold mt-10 mb-8'>SCARAB DAO PRESALE</h1>
              <div className="horus">
                <h1 className="text-3xl">Thursday</h1>
                <h1 className="text-3xl">2:00PM <span className=''>UTC</span></h1>
                <h1 className="text-3xl">21th September 2023</h1>
              </div>
              <button className="lg:w-1/6 py-2 px-8 rounded-lg mt-5 border border-[#ffffff33] font-semibold text-3xl" style={{ backgroundColor: '#493419' }}>PRESALE</button>
            </div>
          </div>
        </Link>
      }

      <div
        id="parallax"
        className='lg:block hidden'
        style={{
          backgroundImage: ' url(https://media.scarabdao.io/landing-page/landing-bg1.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: backgroundPosition,
          width: '100vw',
          height: '100vh',
          position: 'relative',
          backgroundSize: '105%'
        }}
      >
        <div className='absolute w-3/4 left-0 right-0 mt-20 mx-auto aspect-w-16 aspect-h-9'>
          <img className="object-cover w-full h-full opacity-75" src="https://media.scarabdao.io/landing-page/Union.png" alt="" />

          {/* social media icons desktop*/}
          <div className="flex absolute justify-evenly z-20 mt-10 social-icons"
            style={{
              width: '20%',
            }}
          >
            <Link target='_blank' href="https://Twitter.com/ScarabDAO"><img src="https://media.scarabdao.io/information/twitter.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
            <Link target='_blank' href="https://t.me/ScarabDAO"><img src="https://media.scarabdao.io/information/telegram.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
            {/* <Link href="#"><img src="https://media.scarabdao.io/information/alien.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
                <Link href="#"><img src="https://media.scarabdao.io/information/insta.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link> */}
            <Link target='_blank' href="https://scarab-dao.gitbook.io/scarab/introduction/scarab-dao"><img src="images/gitbook.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
            <Link target='' href="#"><img src="images/discord.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
          </div>

        </div>

        <img src="https://media.scarabdao.io/landing-page/hero-4x.png" alt="" className='absolute mx-auto aspect-w-16 aspect-h-9'
          style={{
            position: 'absolute',
            left: '0', // Align with the left edge
            right: '0',
            bottom: '-1%',
            width: '60%',
            transform: `translate(${-mainHeroX}%, ${-mainHeroY}%)`, // Apply horizontal and vertical translation
          }}
        />

        {/* Apply mix blend mode only to the first URL */}
        <div className='absolute z-20 bottom-0 left-0 right-0 w-full'>
          <div className='flex gap-10 mb-10 items-center justify-center'>
            <div className='font-semibold rise-font'>
              <h1 className='h1-heading'>Rise Of The</h1>
              <h1 className='h1-heading flex gap-5'>Ancient DAO</h1>
            </div>
            <p className='w-1/3 text-lg rise-p leading-loose'>Scarab DAO is a platform for collective decision-making and governance where participants can engage in a variety of activities, including investment proposals, voting on proposals, investing funds, and sharing in the profits generated.</p>
            <button onClick={() => setIsClick(true)} className='btn-border px-8 py-3 text-lg ml-20 rise-btn'>Enter</button>
          </div>
        </div>
        <div
          className="mix-blend-mode-div"
          style={{
            mixBlendMode: 'screen',
            width: '100vw',
            height: '100vh',
            backgroundImage: 'url(https://media.scarabdao.io/landing-page/overlay.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: overlayPos,
            position: 'absolute',
            backgroundSize: "150%"
          }}
        ></div>
      </div>

      {/* ---------- mobile view */}
      <div className='mob-backgournd lg:hidden flex flex-col relative'>

        <img src="https://media.scarabdao.io/landing-page/mob-logo.png" alt="logo" className=' mt-20  w-[300px] mx-auto' />
        <img src="https://media.scarabdao.io/landing-page/mob-hero.png" alt="hero" className='w-full h-full ' />
        <div className='mob-content w-full'>
          <div className='px-10 flex flex-col justify-center gap-5 lg:w-[500px]  w-[300px] mx-auto'>
            <div className='   text-center '>
              <h1 className='text-3xl font-bold text-left'>Egyptian Era again</h1>
            </div>
            <p className='text-justify text-[#E7DBC9] opacity-75' style={{ letterSpacing: '2px', lineHeight: '153%' }}>Scarab DAO is a platform for collective decision-making and governance where participants can engage in a variety of activities, including investment proposals, voting on proposals, investing funds, and sharing in the profits generated.</p>
            <button onClick={() => setIsClick(true)} className='btn-border px-8 py-2 mb-10'>Enter</button>
          </div>
          {/* social media icons mobile*/}
          <div className="absolute w-full justify-evenly flex z-20">
            <Link target='_blank' href="https://Twitter.com/ScarabDAO"><img src="https://media.scarabdao.io/information/twitter.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
            <Link target='_blank' href="https://t.me/ScarabDAO"><img src="https://media.scarabdao.io/information/telegram.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
            {/* <img src="https://media.scarabdao.io/information/alien.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" />
            <img src="https://media.scarabdao.io/information/insta.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /> */}
            <Link target='_blank' href="https://scarab-dao.gitbook.io/scarab/introduction/scarab-dao"><img src="images/gitbook.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
            <Link target='' href="#"><img src="images/discord.png" alt="" className="border p-2 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Landing;