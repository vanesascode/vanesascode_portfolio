"use client"

import Link from 'next/link'
import styles from "../styles.module.css";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


export default function Menu() {

  // MOUSE BALL

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      height: 20,
      width: 20,
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      backgroundColor: "#11101d",
      border: "1px solid rgb(186 182 228)",
    },
    text: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: "rgb(186 182 228)",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");



  return (
    <div className="container ">

      {/*NAVBAR*/}


      <div className={`flex justify-between items-center ${styles.goDown1} paddingXNavbar paddingYNavbar`}>

        {/*Logo*/}

        <Link href="/" >
          <div className={`flex items-center ${styles.rotateWhenHovered}`} onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div ><img src="/bracket-left.svg" alt="logo" className='md:h-[60px] sm:h-[50px] h-[30px]  ' /></div>
            <span className='logo sm:mb-2 mb-1'>v</span>
            <div ><img src="/bracket-right.svg" alt="logo" className='md:h-[60px] sm:h-[50px] h-[30px] ' /></div>
          </div>
        </Link>

        {/*Hamburger*/}

        <Link href="/about" >
          <div className='md:mt-[20px]'>

            <img src="/hamburger.svg" alt="logo" className={`sm:h-[46px] h-[26px] md:h-[56px] ${styles.rotateWhenHovered}`} onMouseEnter={textEnter} onMouseLeave={textLeave} />

          </div>
        </Link>
      </div >
      <div className='h-screen flexCenter mt-[-50px] sm:mt-[-110px] md:mt-[-120px] lg:mt-[-130px] xl:mt-[-140px]'>
        <div>

          {/*TEXT*/}

          < div className='flexCenter  flex-col paddingXBody ' >
            <div className='max-w-4xl' >
              <div className="heading1 "
              >
                <div className={`${styles.goDown4}`}> <p onMouseEnter={textEnter} onMouseLeave={textLeave}>Hi, I'm <br className='block sm:hidden' /> Vanesa Juarez Paris</p></div>
                <div className={`${styles.goDown3}`}> <p onMouseEnter={textEnter} onMouseLeave={textLeave}><span className='tracking-tighter xl:tracking-normal'>but you can call me </span><span className="text-white">vanesascode</span></p></div>

              </div>

            </div>
            <div className={'max-w-[500px] pt-[20px]'} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <div className="heading2 ">
                <div className={`${styles.goDown2}`}> <p>I'm a full stack developer</p></div>
                <div className={`${styles.goDown1}`}> <p>& an addict to learning</p></div>
              </div></div >

          </div>

          {/*BOTTONS*/}
          <div className={` md:flexCenter max-md:flexCol xl:gap-[50px] gap-[8px] pt-[60px] ${styles.goUp} paddingXBody `} >

            <div className='flex flex-col items-center justify-center '>
              <Link href="/" >
                <div className='flex items-center linksUnderlines relative' onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  <img src="/arrow.svg" alt="logo" className=' h-[35px]   ' />
                  <p className='links'>See my projects</p>
                </div>
              </Link>
            </div>

            <Link href="/" >
              <div className='flex items-center linksUnderlines relative' onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <img src="/arrow.svg" alt="logo" className=' h-[35px]   ' />
                <p className='links'>More about me</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/*Mouse Ball*/}
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
        whileHover={{ rotate: 360, scale: 1.2 }}
      />
    </div >
  )
}
