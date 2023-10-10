"use client"

import '../globals.css'
import styles from "../styles.module.css";
import { useEffect, useState } from "react";

const Intro = () => {

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

        <div className={`flexCenter items-center h-screen ${styles.fadeOut} bg-primary dark:bg-secondary`}>


          <div>
            {/*TOP LINE*/}

            <div className={`${styles.lineRight}  bg-secondary w-full lg:h-[9.5px] sm:h-[8px] h-[6px] sm:me-[10px] mb-[-14px]`}>
            </div>

            {/*LEFT BRACKET*/}



            <div className='flex items-center'>
              <div className="logo">
                <img src="/bracket-left-white.svg" alt="logo" className='lg:h-[80px] sm:h-[68px] h-[48px] cursor-pointer  ' />

              </div>

              {/*INTRO TEXT*/}

              <div className="intro lg:py-[14.5px] sm:pt-[17px] sm:pb-[18px] pt-[17px] pb-[18px]">
                <span className='text-white'>vanesascode</span> portfolio
              </div>

              {/*RIGHT BRACKET*/}

              <div className="logo">
                <img src="/bracket-right-white.svg" alt="logo" className='lg:h-[80px] sm:h-[68px]  h-[48px] cursor-pointer  ' />
              </div>

            </div>


            {/*BOTTOM LINE*/}

            <div className={`${styles.lineLeft}  bg-secondary w-full lg:h-[9.5px] sm:h-[8px] h-[6px] sm:mt-[-14px] mt-[-14.5px]`}>
            </div>

          </div>

        </div>










      )};


    </>);
};

export default Intro;