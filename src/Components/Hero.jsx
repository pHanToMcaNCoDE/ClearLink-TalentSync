import React, { useState } from 'react'
import Navbar from './Navbar'
// import bg from '../assets/Rows.png'
import bg from '../assets/Background.png'
import './hero.css'

import Left from './Hero Components/Left'
import Right from './Hero Components/Right'
import SmallNav from './SmallNav'
import Companies from './Companies'

const Hero = () => {
    let [open, setOpen] = useState(false)
  return (
    <div className='pt-0 pb-[6.25rem] lg:h-[100vh]'>
        <img className='hidden w-full h-[50%] lg:h-full object-cover lg:flex justify-center items-center' src={bg} alt='Background'></img>
        <div className='lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0'>
            <SmallNav open={open} setOpen={setOpen}/>
            <Navbar open={open} setOpen={setOpen}/>
            <div className='pt-[4em] flex flex-col lg:flex-row justify-between text-center lg:text-left gap-x-3 max-w-[1200px] mx-auto p-2'>

                {/* Left */}
                <Left/>

                {/* Right */}
                <Right/>
            </div>
        </div>
        {/* <Companies/> */}
    </div>
  )
}

export default Hero
