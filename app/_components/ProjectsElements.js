"use client"


import animations from "../animations.module.css";

import { useContext } from "react";

import DataContext from "../_context/DataContext";

import { ProjectsList } from "../_components";

export default function ProjectsElements() {

  const { lightMode, showMenu, leaveAnimation } = useContext(DataContext);

  return (
    <>
      {!showMenu && (


        <div className='flexCenter flex-col pt-[80px]'>


          <div className="flex  items-center flex-col w-[200px] md:w-[500px] xl:w-[1000px] mx-auto">


            {/*TITLE*/}
            <div className='heading1' >

              <div className={`${animations.goDown4} ${leaveAnimation ? animations.leavePage1 : ""}`}>
                <p className='text-secondary dark:text-primary tracking-[-1px] sm:tracking-normal pb-3'>
                  Projects</p>
              </div>
            </div>

            {/*SUBTITLE*/}

            <div className="heading2 ">
              <div className={`${animations.goDown3} ${leaveAnimation ? animations.leavePage2 : ""}`}> <p className='text-secondary dark:text-primary md:tracking-[-0.5px] tracking-tighter xl:tracking-[-0.95px]'>Thank you for checking out my work:</p></div>

            </div>

          </div>

          {/*PROJECTS LIST*/}
          <div className={`${animations.goUp1} ${leaveAnimation ? animations.leavePageDown1 : ""} pb-10 mx-auto mt-[20px] md:mt-[30px] xl:mt-[40px]`}>
            <ProjectsList />
          </div>
        </div>

      )}
    </>

  )
}
