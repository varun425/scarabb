// pages/index.js

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import styles from './Slider.module.css';

const Slider3d=()=>{
  const sliderRef = useRef(null);
  const wrapRef = useRef(null);
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [slideAmount, setSlideAmount] = useState(6);

  useEffect(() => {
    
    createSlider3d();
  }, []);
  
  const createSlider3d = () => {
    const slider = sliderRef.current;
    const wrap = wrapRef.current;
    const arr = wrap.children;
    const all = arr.length;
    
    const gCS = window.getComputedStyle(slider)
    const width = parseInt(gCS.width);
    // const width=800;
    const myR = width / (2 * Math.tan(Math.PI / all));
    const step = 360 / all;
    let angle = 0;

    for (let i = 0; i < all; i++) {
      const rad = (i * step * Math.PI) / 180;

      arr[i].style.transform = `
        translate3d(${myR * Math.sin(rad)}px, 0, ${myR * Math.cos(rad)}px)
        rotateY(${i * step}deg)`;
    }

    const nav = (d) => {
      angle += step * d;
      wrap.style.transform = `
        translateZ(${-myR}px)
        rotateY(${angle}deg)`;
    };

    const handleLeftClick = () => nav(1);
    const handleRightClick = () => nav(-1);

    slider.addEventListener('resize', createSlider3d);
    slider.addEventListener('load', createSlider3d);
  };

  return (
    <div className={styles.container} >
      <Head>
        <title>3D Slider</title>
        <meta name="description" content="3D Slider in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.slider3d} ref={sliderRef}>
        <div className={styles.slider3d_wrap} ref={wrapRef}>
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <div key={number}>{number}</div>
          ))}
        </div>
      </div>
      {/* <div className={styles.slider3d_left} onClick={handleLeftClick}>
        left
      </div>
      <div className={styles.slider3d_right} onClick={handleRightClick}>
        &rarr;
      </div> */}

      <div className={styles.ctrl}>
        <div className={styles.visibility}>
          <label>
            <input type="checkbox" className={styles.bfv} defaultChecked />backface-visibility
          </label>
          <label>
            <input type="checkbox" className={styles.oh} defaultChecked />overflow
          </label>
        </div>

        <div className={styles.perspOrig}>
          <p>perspective-origin:</p>
          <input
            type="number"
            className={styles.po_x}
            value={x}
            onChange={(e) => setX(e.target.value)}
            min="-200"
            max="200"
            step="10"
          />
          <span>%</span>
          <input
            type="number"
            className={styles.po_y}
            value={y}
            onChange={(e) => setY(e.target.value)}
            min="-200"
            max="200"
            step="10"
          />
          <span>%</span>
        </div>

        <div className={styles.slideAmount}>
          <span className={styles.slideRem}>-</span>
          <span>slide</span>
          <span className={styles.slideAdd}>+</span>
        </div>

        <div className={styles.perspValue}>
          <p>Perspective</p>
          <input
            type="range"
            value="800"
            min="10"
            max="1000"
            step="10"
            onChange={(e) => slider.style.perspective = `${e.target.value}px`}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider3d;