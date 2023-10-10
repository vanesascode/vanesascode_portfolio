import Link from "next/link";
import styles from "../styles.module.css";

import { useContext } from "react";

import DataContext from "../_context/DataContext";


export default function Logo() {

  const { lightMode } = useContext(DataContext);

  return (
    <>

      <Link href="/">
        <div
          className={`flex items-center ${styles.rotateWhenHovered} `}
        >
          <div>
            <img
              src={lightMode === "light" ? "/bracket-left-white.svg" : "/bracket-left-black.svg"}
              alt="logo"
              className="md:h-[60px] sm:h-[50px] h-[30px]  "
            />
          </div>
          <span className="logo sm:mb-2 mb-1">v</span>
          <div>
            <img
              src={lightMode === "light" ? "/bracket-right-white.svg" : "/bracket-right-black.svg"}
              alt="logo"
              className="md:h-[60px] sm:h-[50px] h-[30px] "
            />
          </div>
        </div>
      </Link>
    </>
  )
}
