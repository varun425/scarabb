import React, { useEffect, useState } from 'react';

const Test = () => {
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const _w = window.innerWidth / 2;
      const _h = window.innerHeight / 2;
      const _mouseX = e.clientX;
      const _mouseY = e.clientY;

      // Adjust the factors to control the speed and direction of translation
      const factorX = 0.02; // Slower movement for the horizontal translation
      const factorY = 0.01; // Slower movement for the vertical translation

      // Calculate translation values based on mouse movement
      const translateX = (_mouseX - _w) * factorX;
      const translateY = (_mouseY - _h) * factorY;

      // Set the translation values in state
      setTranslateX(translateX);
      setTranslateY(translateY);
    };

    // Add the mousemove event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='bg-[#0c0c0c] w-full'>
      <div
        id="parallax"
        className='lg:block hidden'
        style={{
          backgroundImage: 'url(/images/landing-page/become-bg.png)',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          position: 'relative',
          backgroundColor: '#0c0c0c',
          backgroundSize:'100% 100%',
          overflow:'hidden'
        }}
      >
        <div
          className=' '
          style={{
            mixBlendMode: 'exclusion',
            position: 'absolute',
            left: '50%',
            top: '10%',
            marginInline: 'auto',
            transform: `translate(-50%, ${translateY}px)`, // Apply translation
          }}
        ></div>

       
            <img 
            src="/images/landing-page/l.png"
            alt=""
            className='h-[400px]'
            style={{
           position: 'absolute',
           left: '0', // Align with the left edge
           bottom: '0', // Align with the bottom edge
           transform: `translate(${translateX}px, ${translateY}px)`, // Apply translation
            }} />
        
        <img 
            src="/images/landing-page/r.png"
            alt=""
            className='h-[400px]'
            style={{
           position: 'absolute',
           right: '0', // Align with the left edge
           bottom: '0', // Align with the bottom edge
           transform: `translate(${translateX}px, ${translateY}px)`, // Apply translation
            }} />

        <div
          className="mix-blend-mode-div"
          style={{
            mixBlendMode: 'screen',
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/landing-page/Overlay.png)',
            transform: `translate(0, ${translateY}px)`, // Apply vertical translation
            position: 'absolute',
            bottom: '0',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Test;
