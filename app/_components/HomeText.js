"use client"

import Link from 'next/link'
import animations from "../animations.module.css";

import { useContext } from "react";

import DataContext from "../_context/DataContext";


export default function HomeText() {

  const { lightMode } = useContext(DataContext);

  return (
    <>

      <div className='h-screen flexCenter mt-[-50px] sm:mt-[-110px] md:mt-[-120px] lg:mt-[-130px] xl:mt-[-140px]'>
        <div>

          {/*TEXT*/}

          < div className='flexCenter  flex-col paddingXBody ' >
            <div className='max-w-4xl' >
              <div className="heading1 "
              >
                <div className={`${animations.goDown4}`}>
                  <p
                    //  onMouseEnter={textEnter} onMouseLeave={textLeave} text-secondary
                    className='text-secondary dark:text-primary'
                  >
                    Hi, I'm <br className='block sm:hidden' /> Vanesa Juarez Paris</p></div>
                <div className={`${animations.goDown3}`}> <p
                // onMouseEnter={textEnter} onMouseLeave={textLeave}
                ><span className='tracking-tighter xl:tracking-normal text-secondary dark:text-primary'>but you can call me </span><span className="text-white dark:text-accent">vanesascode</span></p></div>

              </div>

            </div>
            <div className={'max-w-[500px] pt-[20px]'}
            // onMouseEnter={textEnter} onMouseLeave={textLeave}
            >
              <div className="heading2 ">
                <div className={`${animations.goDown2}`}> <p className='text-secondary dark:text-primary'>I'm a full stack developer</p></div>
                <div className={`${animations.goDown1}`}> <p className='text-secondary dark:text-primary'>& an addict to learning</p></div>
              </div></div >

          </div>

          {/*BOTTONS*/}
          <div className={` md:flexCenter max-md:flexCol xl:gap-[50px] gap-[8px] pt-[60px] ${animations.goUp} paddingXBody `} >

            <div className='flex flex-col items-center justify-center '>
              <Link href="/" >
                <div className={`flex items-center  relative ${lightMode === "light" ? "linksUnderlinesWhite" : "linksUnderlinesBlack"} cursor-crosshair`}
                // onMouseEnter={textEnter} onMouseLeave={textLeave}
                >
                  <img src={lightMode === "light" ? "/arrow-white.svg" : "/arrow-black.svg"} alt="logo" className=' h-[45px]   ' />
                  <p className='links text-secondary dark:text-primary'>See my projects</p>
                </div>
              </Link>
            </div>

            <Link href="/" >
              <div className={`flex items-center relative ${lightMode === "light" ? "linksUnderlinesWhite" : "linksUnderlinesBlack"} cursor-crosshair`}
              // onMouseEnter={textEnter} onMouseLeave={textLeave}
              >
                <img src={lightMode === "light" ? "/arrow-white.svg" : "/arrow-black.svg"} alt="logo" className=' h-[45px]   ' />
                <p className='links text-secondary dark:text-primary '>More about me</p>
              </div>
            </Link>
          </div>
        </div>
      </div>


    </>

  )
}
