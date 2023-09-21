
import React, { useEffect, useState } from 'react';
import './BecomeGod.css'
import NavLanding from '@/components/navLanding/NavLanding';
import Link from 'next/link';

const BecomeGod2 = () => {
  const [backgroundPosition, setBackgroundPosition] = useState('50% 50%');
  const [backHeroPosX, setBackHeroPosX] = useState(0);
  const [backHeroPosY, setBackHeroPosY] = useState(0);
  const [tableTranslateX, setTableTranslateX] = useState(0); // Separate translateX for the table
  const [tableTranslateY, setTableTranslateY] = useState(0); // Separate translateY for the table
  const [guardTranslateX, setGuardTranslateX] = useState(0); // Separate translateX for the guard images
  const [guardTranslateY, setGuardTranslateY] = useState(0); // Separate translateY for the guard images

  useEffect(() => {
    const handleMouseMove = (e) => {
      const _w = window.innerWidth / 2;
      const _h = window.innerHeight / 2;
      const _mouseX = e.clientX;
      const _mouseY = e.clientY;

      const factor1 = 0.02; // Slower movement for the background
      const factor2 = 0.01; // Slower movement for the hero
      const factorX = 0.02; // Slower movement for the horizontal translation
      const factorY = 0.01;

      const translateX = (_mouseX - _w) * factorX;
      const translateY = (_mouseY - _h) * factorY;

      const backgroundX = 50 + (_mouseX - _w) * factor1;
      const backgroundY = 50 - (_mouseY - _h) * factor1;

      const backgroundPos = `${backgroundX}% ${backgroundY}%`;

      // Calculate separate translations for the table and guard images
      const backHeroTranslateX = (_mouseX - _w) * factorX * 0.3; 
      const backHeroTranslateY = -(_mouseY - _h) * factorY * 0.3;
      const tableTranslateX = (_mouseX - _w) * factorX * 0.5; // Adjust the factor as needed
      const tableTranslateY = -(_mouseY - _h) * factorY * 0.5; // Adjust the factor as needed
      const guardTranslateX = (_mouseX - _w) * factorX * 1.6; // Adjust the factor as needed
      const guardTranslateY = -(_mouseY - _h) * factorY * 1.6; // Adjust the factor as needed
      
      setBackHeroPosX(backHeroTranslateX);
      setBackHeroPosY(backHeroTranslateY);
      setBackgroundPosition(backgroundPos);
      setTableTranslateX(tableTranslateX);
      setTableTranslateY(tableTranslateY);
      setGuardTranslateX(guardTranslateX);
      setGuardTranslateY(guardTranslateY);

    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (

    <div className=''>
      <div
        id=""
        className='lg:block hidden h-[100vh] relative overflow-hidden'>
        <img src="https://media.scarabdao.io/landing-page/become-bg-three.png" alt="" className='absolute left-0 right-0 z-10  h-full w-full'
        style={{
         transform: `translate(${-backHeroPosX}px, ${-backHeroPosY}px)`,
         objectFit:'cover'
         
        }}
        />
    

        <div className='z-20  h-32 '>
          <img
            src="https://media.scarabdao.io/landing-page/left-table.png"
            alt=""
            className='z-20  '
            style={{
              position: 'absolute',
              left: '-5%', // Align with the left edge
              bottom: '-0%', // Center vertically
              transform: `translate(${-tableTranslateX}px, ${-tableTranslateY}px)`, // Apply horizontal and vertical translation
              maxWidth: '35%'
            }}
          />

          <img
            src="https://media.scarabdao.io/landing-page/right-table.png"
            alt=""
            className='z-20'
            style={{
              position: 'absolute',
              right: '-5%', // Align with the right edge
              bottom: '0%', // Center vertically
              transform: `translate(${-tableTranslateX}px, ${-tableTranslateY}px)`, // Apply horizontal and vertical translation
              maxWidth: '35%'
            }}
          />
        </div>

        <div className=''>
          <img
            src="https://media.scarabdao.io/landing-page/Guard 2.png"
            alt=""
            className='z-30 border-3 '
            style={{
              position: 'absolute',
              left: '-5%', // Align with the left edge
              bottom: '-2%', // Center vertically
              transform: `translate(${-guardTranslateX}px, ${-guardTranslateY}px)`, // Apply horizontal and vertical translation
              maxWidth: '25%',
          
            }}
          />

          <img
            src="https://media.scarabdao.io/landing-page/Guard 3.png"
            alt=""
            className='z-30 '
            style={{
              position: 'absolute',
              right: '-5%', // Align with the right edge
              bottom: '-2%', // Center vertically
              transform: `translate(${-guardTranslateX}px, ${-guardTranslateY}px)`, // Apply horizontal and vertical translation
              maxWidth: '25%'
         
            }}
          />
        </div>

        <div
          className="z-40"
          style={{
            mixBlendMode: 'screen',
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://media.scarabdao.io/landing-page/overlay.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: backgroundPosition,
            position: 'absolute',
            bottom: '0',
            backgroundSize: '150%'
          }}>
          </div>

          <div className='mygap absolute  w-full z-40 flex flex-col justify-between h-[100vh]'
          >

             <div className=' '>
                <NavLanding />
             </div>
            <div className='flex items-center justify-center '>
              <div className=" becomeGod-font mr-20">
                <h5 className='horus'>turn into</h5>
                <h5 className='horus'>
                  Deity
                </h5>
              </div>

              <div className='w-1/4 '>
                <p className='becomeGod-p'>Turn into Deity by minting one of the 50 Scarab NFTs. Help shape the future of Scarab DAO by proposing investment proposals and approving actions. Take control, represent the community and share profits.</p>
                <Link target='_blank' href="becomegodpage"><button className='becomeGod-btn font-bold text-[20px] mt-5'>More +</button></Link>
              </div>
            </div>

            <div className='flex flex-start items-center gap-10 pt-20 ' style={{marginLeft: '15%'}}>
              <div className='becomeGod-font'>
                <h5 className='horus'>be a<br /> pharaoh</h5>
              </div>
              <div className='w-1/4 ml-10'>
                <p className='becomeGod-p'>Become a pharaoh by converting your SCARAB tokens to BARACS. Take part in DAO by voting on judgement and investment proposals to share earned profits.</p>
                <Link target='_blank' href="becomepharok"><button className='becomeGod-btn font-bold text-[20px]'>More +</button></Link>
              </div>
            </div>


            <div className='flex w-3/4 top-0 items-center gap-10 mb-5 mr-10' style={{justifyContent: 'flex-end'}}>
              <div className='becomeGod-font'>
                <h5 className='horus'>
                  Buy<br /> Scarab</h5>
              </div>
              <div className='w-1/4 ml-10'>
                <p className='becomeGod-p'>Start by buying the native token Scarab. Lock Scarab tokens, get Scarab NFTs and turn into a Deity or convert Scarab tokens into Baracs to become a Pharaoh.</p>
                <Link target='_blank' href="https://scarab-dao.gitbook.io/scarab/tokens/scarab"><button className='becomeGod-btn font-bold text-[20px]'>More +</button></Link>
              </div>
            </div>
          </div>
      </div>




      {/* ------------mob-------- */}
      <div className='lg:hidden block mob-back '>
        <NavLanding />
        <div className=' mx-5 text-center items-center justify-center gap-5 -translate-y-10  '>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <h5 className='text-[25px] font-[HORUS] text-[#E7DBC9]'>Turn Into</h5>
            <h5 className='text-[40px] font-[HORUS] text-[#E7DBC9]'>Deity</h5>
          </div>
          <div className=' mt-2 text-justify px-5' >
            <p >Turn into Deity by minting one of the 50 Scarab NFTs. Help shape the future of Scarab DAO by proposing investment proposals and approving actions. Take control, represent the community and share profits.</p>
            <Link target='_blank' href="becomegodpage"><button className='font-bold text-[20px]'>More +</button></Link>
          </div>
        </div>
        <div className='ml-5 flex items-center justify-center  mt-[300px]  first-line: '>
          <div className='    items-center  mx-5' >
            <div className=' '>
              <h5 className='text-[20px] font-[HORUS] text-[#E7DBC9]'>Be a</h5>
              <h5 className='horus'> Pharaoh</h5>
            </div>
            <div className='' style={{ marinLeft: "20px !important" }}>
              <p className=''>Become a pharaoh by converting your SCARAB tokens to BARACS. Take part in DAO by voting on judgement and investment proposals to share earned profits. </p>
              <Link target='_blank' href="becomepharok"><button className='font-bold text-[20px]'>More +</button></Link>
            </div>
          </div>

          <img src="https://media.scarabdao.io/landing-page/mob-side-hero.png" alt="" className='md:w-auto w-[150px] h-full' />
        </div>
        <div className='mx-5 flex  justify-center items-center gap-5 py-5 mt-5 mb-5'>
          <div>
            <h5 className='horus'>Buy<br /> Scarab</h5>
          </div>
          <div className=''>
            <p>Start by buying the native token Scarab. Lock Scarab tokens, get Scarab NFTs and turn into a Deity or convert Scarab tokens into Baracs to become a Pharaoh.</p>
            <Link target='_blank' href="https://scarab-dao.gitbook.io/scarab/tokens/scarab"><button className='font-bold text-[20px]'>More +</button></Link>
          </div>
        </div>
      </div>
    </div>


  );
};

export default BecomeGod2;
