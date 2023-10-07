"use client"

import Link from 'next/link'
import styles from "../styles.module.css";


export default function Menu() {
  return (
    <div className="container padding">

      {/*NAVBAR*/}


      <div className={`flex justify-between items-center ${styles.goDown1}`}>

        {/*Logo*/}

        <Link href="/" >
          <div className='flex items-center'>
            <div className="logo"><img src="/bracket-left.svg" alt="logo" className='h-[70px] cursor-pointer  ' /></div>
            <span className='logo mb-2'>v</span>
            <div className="logo"><img src="/bracket-right.svg" alt="logo" className='h-[70px] cursor-pointer  ' /></div>
          </div>
        </Link>

        {/*Hamburger*/}

        <Link href="/about" >
          <div >

            <img src="/hamburger.svg" alt="logo" className='h-[70px] cursor-pointer   ' />

          </div>
        </Link>
      </div >

      {/*TEXT*/}
      < div className='flexCenter pt-[100px] flex-col' >
        <div className='max-w-4xl' >
          <div className="heading1 "
          >
            <div className={`${styles.goDown4}`}> <p>Hi, I'm Vanesa Juarez Paris</p></div>
            <div className={`${styles.goDown3}`}> <p>but you can call me <span className="text-white">vanesascode</span></p></div>

          </div>

        </div>
        <div className={'max-w-[500px] pt-[20px]'}>
          <div className="heading2 ">
            <div className={`${styles.goDown2}`}> <p>I'm a full stack developer</p></div>
            <div className={`${styles.goDown1}`}> <p>& an addict to learning</p></div>
          </div></div >

      </div>

      {/*BOTTONS*/}
      <div className={`flexCenter links gap-[50px] pt-[60px] ${styles.goUp}`}>


        <div className='flex flex-col items-center justify-center '>
          <Link href="/" >
            <div className='flex items-center cursor-pointer linksUnderlines relative'>
              <img src="/arrow.svg" alt="logo" className=' h-[35px]   ' />
              See my projects
            </div>
          </Link>
        </div>

        <Link href="/" >
          <div className='flex items-center cursor-pointer linksUnderlines relative'>
            <img src="/arrow.svg" alt="logo" className=' h-[35px]   ' />
            More about me
          </div>
        </Link>

      </div>
    </div >
  )
}
