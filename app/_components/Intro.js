"use client"

import '../globals.css'
import animations from "../animations.module.css";
import { useEffect, useState } from "react";

import { useContext } from "react";

import DataContext from "../_context/DataContext";

const Intro = () => {

  const { lightMode } = useContext(DataContext);

  const [intro, setIntro] = useState(true);

  // Important:
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIntro(false);
    }, 700); // this controls the time it takes for the home text to appear

    return () => clearTimeout(timeout);
  }, []);

  //container 

  return (
    <>
      {intro && (

        <div className={`flexCenter items-center h-screen ${animations.fadeOut} bg-primary dark:bg-secondary `}>


          <div>
            {/*TOP LINE*/}

            <div className={`${animations.lineRight}  bg-secondary dark:bg-primary w-full lg:h-[9.5px] sm:h-[8px] h-[6px] sm:me-[10px] mb-[-14px]`}>
            </div>

            {/*LEFT BRACKET*/}



            <div className='flex items-center'>
              <div >
                <img src={lightMode === "light" ? "/bracket-left-white.svg" : "/bracket-left-black.svg"} alt="logo" className='lg:h-[80px] sm:h-[68px] h-[48px]   ' />

              </div>

              {/*INTRO TEXT*/}

              <div className="intro lg:py-[14.5px] md:pt-[17px] md:pb-[18px] sm:py-[25px]     pt-[17px] pb-[18px] dark:text-black">
                <span className='text-white dark:text-black'>vanesascode</span> portfolio
              </div>

              {/*RIGHT BRACKET*/}

              <div >
                <img src={lightMode === "light" ? "/bracket-right-white.svg" : "/bracket-right-black.svg"} alt="logo" className='lg:h-[80px] sm:h-[68px]  h-[48px]   ' />
              </div>

            </div>


            {/*BOTTOM LINE*/}

            <div className={`${animations.lineLeft}  bg-secondary dark:bg-primary w-full lg:h-[9.5px] sm:h-[8px] h-[6px] sm:mt-[-14px] mt-[-14.5px]`}>
            </div>

          </div>

        </div>










      )};


    </>);
};

export default Intro;