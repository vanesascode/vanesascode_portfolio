"use client"

import styles from "../styles.module.css";

export default function CloseButton() {
  return (
    <>

      <img
        src="/close.svg"
        alt="logo"
        className={`sm:h-[46px] h-[26px] md:h-[56px] ${styles.rotateWhenHovered} mt-[-8px]`}
      />

    </>
  )
}
