"use client"

import Link from 'next/link'
import animations from "../animations.module.css";

import { useContext } from "react";

import DataContext from "../_context/DataContext";

import { ProjectsList } from "../_components";

export default function ProjectsElements() {

  const { lightMode, showMenu, leaveAnimation } = useContext(DataContext);

  return (
    <>
      {!showMenu && (


        <div className='flexCenter flex-col gap-5 lg:gap-10 xl:gap-20 pt-[80px]'>
          {/*TITLE*/}

          <div className="flex justify-start items-center flex-col gap-5 w-[200px] md:w-[500px] xl:w-[1000px]">


            < div className='flexCenter flex-col paddingXBody ' >
              <div className='max-w-5xl heading1' >
                <div
                >
                  <div className={`${animations.goDown4} ${leaveAnimation ? animations.leavePage1 : ""}`}>
                    <div className={`flex items-center relative ${lightMode === "light" ? "linksUnderlinesWhite" : "linksUnderlinesBlack"} cursor-crosshair max-md:mt-[10px]`}

                    >
                      <p

                        className='text-secondary dark:text-primary tracking-[-1px] sm:tracking-normal pb-3'
                      >
                        Projects</p></div></div>
                  <div className={`${animations.goDown3} ${leaveAnimation ? animations.leavePage2 : ""}`}> </div>

                </div>

              </div>
              <div className={'pt-[20px]'}

              >
                <div className="heading2 ">
                  <div className={`${animations.goDown2} ${leaveAnimation ? animations.leavePage3 : ""}`}> <p className='text-secondary dark:text-primary md:tracking-[-0.5px] tracking-tighter xl:tracking-[-0.95px]'>Thank you for checking out my work:</p></div>

                </div></div >

            </div>


          </div>

          {/*PROJECTS LIST*/}
          <div className={`${animations.goUp} ${leaveAnimation ? animations.leavePageDown : ""} pb-10 mx-auto`}>
            <ProjectsList />
          </div>
        </div>

      )}
    </>

  )
}
