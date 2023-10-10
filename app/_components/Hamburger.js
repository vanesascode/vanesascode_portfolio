"use client"

import styles from "../styles.module.css";

export default function Hamburger() {
  return (
    <>

      <img
        src="/hamburger.svg"
        alt="logo"
        className={`sm:h-[46px] h-[26px] md:h-[54px] ${styles.rotateWhenHovered} md:mt-[-30px]`}
      />


    </>
  )
}
