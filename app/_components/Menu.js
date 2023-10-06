import Link from 'next/link'


export default function Menu() {
  return (
    <div className="container ">

      {/*NAVBAR*/}
      <div className='flex justify-between items-center'>
        <Link href="/" >
          <div className='flex items-center'>
            <div className="logo"><img src="/bracket-left.svg" alt="logo" className='h-20 cursor-pointer  ' /></div>
            <p className='logo'>V</p>
            <div className="logo"><img src="/bracket-right.svg" alt="logo" className='h-20 cursor-pointer  ' /></div>
          </div>
        </Link>

        <Link href="/about" >
          <div >

            <img src="/menu3.svg" alt="logo" className='h-[95px] cursor-pointer   ' />

          </div>
        </Link>
      </div >

      {/*TEXT*/}
      < div className='flexCenter pt-[120px] flex-col' >
        <div className='max-w-4xl '>
          <div className="heading1 "
          >
            Hi, I'm Vanesa Juarez Paris
            but you can call me <span className="text-white">vanesascode</span>

          </div>

        </div>
        <div className='max-w-[500px] pt-[20px]'>
          <div className="heading2 ">
            I'm a full stack developer
            & an addict to learning
          </div></div >

      </div>
    </div >
  )
}
