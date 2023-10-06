"use client"

import '../globals.css'
import styles from "../styles.module.css";
import { useEffect, useState } from "react";

const Intro = () => {

  const [intro, setIntro] = useState(true);

  // const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIntro(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  // useEffect(() => {
  //   const hasRendered = sessionStorage.getItem('hasRendered');
  //   if (!hasRendered) {
  //     sessionStorage.setItem('hasRendered', true);
  //     setRendered(true);
  //   }
  // }, []);


  //rendered &&


  return (
    <>
      {intro && (
        <div className={`flexCenter h-screen ${styles.fadeOut}`}  >
          <div className='flex justify-between items-center'>
            <div className="logo"><img src="/bracket-left.svg" alt="logo" className='h-20 cursor-pointer  ' /></div>

            <div className="intro">
              <span className='text-white'>vanesascode</span>  portfolio
            </div>

            <div className="logo"><img src="/bracket-right.svg" alt="logo" className='h-20 cursor-pointer  ' /></div>



          </div>
          <div className={`${styles.line}  bg-secondary w-full lg:h-[4px] md:h-[3px] h-[1px] rounded-full`}></div>
        </div>


      )};


    </>);
};

export default Intro;