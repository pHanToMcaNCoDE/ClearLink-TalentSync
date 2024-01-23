import React from 'react'
import MeetingIcons from '../Icons/MeetingIcons'
import imgOne from '../../assets/image 21.svg'
import imgTwo from '../../assets/image 100.svg'
import imgThree from '../../assets/image 8.svg'
import imgFour from '../../assets/image 72.svg'
import imgFive from '../../assets/image 108.svg'
import imgSix from '../../assets/image 103.svg'

const Right = () => {
  return (
        <div className='w-full lg:w-[42%] py-[2.5em] lg:py-0'>
            <div className='bg-[#EFF8FF] border border-[#B2DDFF] rounded-[1rem]'>
                <div className='p-[2em] grid-cols-2 grid md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4'>
                    <img className='rounded-[10px] duration-300 hover:scale-110 w-[8em] h-[7.9em] bg-[#FF9C66]' src={imgOne} alt='Avatar'></img>
                    <img className='rounded-[10px] duration-300 hover:scale-110 w-[8em] h-[7.9em] bg-[#D6BBFB]' src={imgTwo} alt='Avatar'></img>
                    <img className='rounded-[10px] duration-300 hover:scale-110 w-[8em] h-[7.9em] bg-[#ACDC79]' src={imgThree} alt='Avatar'></img>
                    <img className='rounded-[10px] duration-300 hover:scale-110 w-[8em] h-[7.9em] bg-[#B3B8DB]' src={imgFour} alt='Avatar'></img>
                    <img className='rounded-[10px] duration-300 hover:scale-110 w-[8em] h-[7.9em] bg-[#FEC84B]' src={imgFive} alt='Avatar'></img>
                    <img className='rounded-[10px] duration-300 hover:scale-110 w-[8em] h-[7.9em] bg-[#FEA3B4]'g src={imgSix} alt='Avatar'></img>
                </div>
                {/* Down */}
                <div className='pt-[1em] pb-[2em] flex flex-col md:flex-row lg:flex-row gap-y-4 lg:gap-y-0 justify-center items-center gap-x-5'>
                    <MeetingIcons/>
                </div>
            </div>
        </div>
  )
}

export default Right
