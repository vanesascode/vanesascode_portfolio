"use client"

import styles from "./styles.module.css";
import Particles from "./_components/Particles";
import Menu from "./_components/Menu";
import Intro from "./_components/Intro";
import { useEffect, useState } from "react";


export default function Home() {



  // PARTICLES BACKGROUND
  const [showParticles, setShowParticles] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowParticles(true);
    }, 500);

    return () => clearTimeout(timeout);
    // }
  }, []);


  return (

    <div className="container">

      <Intro />


      {
        showParticles && (
          <>
            <div className={styles.fadeIn1}>
              {/*Particles Background*/}
              <Particles id="tsparticles" />
            </div>
            {/*Home elements*/}
            <div className={styles.fadeIn2}>
              <Menu />

            </div>


          </>
        )
      }







    </div >
  )
}
