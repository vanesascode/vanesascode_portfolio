"use client"

import Link from 'next/link'
import animations from "../animations.module.css";

import { useContext } from "react";

import DataContext from "../_context/DataContext";

//md:tracking-normal tracking-[-0.9px]
//md:tracking-normal tracking-[0.9px]

export default function HomeElements() {

  const { lightMode, showMenu, leaveAnimation } = useContext(DataContext);

  return (
    <>
      {!showMenu && (


        <div className='h-screen flexCenter mt-[-50px] sm:mt-[-110px] md:mt-[-120px] lg:mt-[-130px] xl:mt-[-140px]'>
          <div>

            {/*TEXT*/}

            < div className='flexCenter  flex-col paddingXBody ' >
              <div className='max-w-5xl text-center heading1 ' >
                <div
                >
                  <div className={`${animations.goDown4} ${leaveAnimation ? animations.leavePage1 : ""}`}>
                    <p

                      className='text-secondary dark:text-primary tracking-[-1px] sm:tracking-normal'
                    >
                      Hi, I'm <br className='block sm:hidden ' /> Vanesa Juarez Paris</p></div>
                  <div className={`${animations.goDown3} ${leaveAnimation ? animations.leavePage2 : ""}`}> <p

                  ><span className='tracking-[-1px] sm:tracking-normal text-secondary dark:text-primary '>but you can call me </span><br className='block sm:hidden' /><span className="text-white dark:text-accent tracking-[1px] md:tracking-normal">vanesascode</span></p></div>

                </div>

              </div>
              <div className={'max-w-[500px] pt-[20px]'}

              >
                <div className="heading2 ">
                  <div className={`${animations.goDown2} ${leaveAnimation ? animations.leavePage3 : ""}`}> <p className='text-secondary dark:text-primary md:tracking-[-0.5px] tracking-tighter xl:tracking-[-0.95px]'>I'm a full stack developer</p></div>
                  <div className={`${animations.goDown1} ${leaveAnimation ? animations.leavePage4 : ""}`}> <p className='text-secondary dark:text-primary md:tracking-[0.8px] tracking-[0.2px] xl:tracking-[1px]'>& an addict to learning</p></div>
                </div></div >

            </div>

            {/*BOTTONS*/}
            <div className='flexCenter'>
              <div className={` md:flexCenter max-md:flexCol md:gap-[50px] md:pt-[60px] pt-[50px] ${animations.goUp} paddingXBody ${leaveAnimation ? animations.leavePageUp : ""}`} >


                <Link href="/" >
                  <div className={`flex items-center relative ${lightMode === "light" ? "linksUnderlinesWhite" : "linksUnderlinesBlack"} cursor-crosshair `}

                  >
                    <img src={lightMode === "light" ? "/arrow-white.svg" : "/arrow-black.svg"} alt="logo" className=' xl:h-[45px] md:h-[35px] sm:h-[28px] h-[20px] ' />
                    <p className='links text-secondary dark:text-primary '>See my projects</p>
                  </div>
                </Link>


                <Link href="/" >
                  <div className={`flex items-center relative ${lightMode === "light" ? "linksUnderlinesWhite" : "linksUnderlinesBlack"} cursor-crosshair max-md:mt-[10px]`}

                  >
                    <img src={lightMode === "light" ? "/arrow-white.svg" : "/arrow-black.svg"} alt="logo" className=' xl:h-[45px] md:h-[35px] sm:h-[28px] h-[20px]' />
                    <p className='links text-secondary dark:text-primary '>More about me</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

      )}
    </>

  )
}
