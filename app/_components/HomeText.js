"use client"

import Link from 'next/link'
import styles from "../styles.module.css";


export default function HomeText() {


  return (
    <>

      <div className='h-screen flexCenter mt-[-50px] sm:mt-[-110px] md:mt-[-120px] lg:mt-[-130px] xl:mt-[-140px]'>
        <div>

          {/*TEXT*/}

          < div className='flexCenter  flex-col paddingXBody ' >
            <div className='max-w-4xl' >
              <div className="heading1 "
              >
                <div className={`${styles.goDown4}`}>
                  <p
                    //  onMouseEnter={textEnter} onMouseLeave={textLeave} text-secondary
                    className='text-secondary'
                  >
                    Hi, I'm <br className='block sm:hidden' /> Vanesa Juarez Paris</p></div>
                <div className={`${styles.goDown3}`}> <p
                // onMouseEnter={textEnter} onMouseLeave={textLeave}
                ><span className='tracking-tighter xl:tracking-normal text-secondary'>but you can call me </span><span className="text-white dark:text-black">vanesascode</span></p></div>

              </div>

            </div>
            <div className={'max-w-[500px] pt-[20px]'}
            // onMouseEnter={textEnter} onMouseLeave={textLeave}
            >
              <div className="heading2 ">
                <div className={`${styles.goDown2}`}> <p className='text-secondary'>I'm a full stack developer</p></div>
                <div className={`${styles.goDown1}`}> <p className='text-secondary'>& an addict to learning</p></div>
              </div></div >

          </div>

          {/*BOTTONS*/}
          <div className={` md:flexCenter max-md:flexCol xl:gap-[50px] gap-[8px] pt-[60px] ${styles.goUp} paddingXBody `} >

            <div className='flex flex-col items-center justify-center '>
              <Link href="/" >
                <div className='flex items-center linksUnderlines relative'
                // onMouseEnter={textEnter} onMouseLeave={textLeave}
                >
                  <img src="/arrow.svg" alt="logo" className=' h-[35px]   ' />
                  <p className='links'>See my projects</p>
                </div>
              </Link>
            </div>

            <Link href="/" >
              <div className='flex items-center linksUnderlines relative'
              // onMouseEnter={textEnter} onMouseLeave={textLeave}
              >
                <img src="/arrow.svg" alt="logo" className=' h-[35px]   ' />
                <p className='links'>More about me</p>
              </div>
            </Link>
          </div>
        </div>
      </div>


    </>

  )
}
