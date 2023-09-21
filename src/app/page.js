'use client'
import BecomeGod from '@/landingPageComponents/BecomeGod/BecomeGod'
import Landing from '@/landingPageComponents/Landing/Landing'
import { useState } from 'react'
import Head from 'next/head';

export default function Home() {
  const [isClick, setIsClick] = useState(false);

  return (
   
    <main className='relative'>
      <div className={isClick ? 'fade-in' : ''}>
        {isClick ? (
          <BecomeGod />
        ) : (
          <Landing setIsClick={setIsClick} />
        )}
      </div>
    </main>
  );
}

