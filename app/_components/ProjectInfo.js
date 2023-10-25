"use client";

import animations from "../animations.module.css";

import { useContext } from "react";

import DataContext from "../_context/DataContext";

export default function ProjectInfo({ project }) {

  const { lightMode, showMenu, leaveAnimation } = useContext(DataContext);

  return (
    <>
      {!showMenu && (

        <div className='flexCenter flex-col gap-4 lg:gap-8 xl:gap-15 pt-[80px]'>
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
                        {project.title}</p></div></div>
                  <div className={`${animations.goDown3} ${leaveAnimation ? animations.leavePage2 : ""}`}> </div>

                </div>

              </div>
              <div className={'pt-[20px]'}

              >
                <div className="heading2 ">
                  <div className={`${animations.goDown2} ${leaveAnimation ? animations.leavePage3 : ""}`}> <p className='text-secondary dark:text-primary md:tracking-[-0.5px] tracking-tighter xl:tracking-[-0.95px]'>{project.desc}</p></div>

                </div>
              </div >

            </div>


          </div>

          {/*ICONS*/}
          <div>
            <img src={project.icons} alt="programming icon" className="w-[600px] rounded" />

          </div>

          {/*VIDEO*/}

          {/*INFO*/}

          {/* <div className="flexCenter flex-col gap-5 lg:gap-10 xl:gap-20 pt-[80px]'">
        //   <h2>{project.title}</h2>
        //   <p>{project.desc}</p>
        //   <img src={project.img} alt={project.title} />
        //   <img src="/projects/thinkpad.png" />
        //   <a href={project.link}>Visit Project</a>
      // </div> */}

        </div>
      )}
    </>
  )
}
