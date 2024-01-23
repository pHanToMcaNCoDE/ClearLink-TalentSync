import React from 'react'
// import Stars from '../Icons/Stars'
import img from '../../assets/Avatar group.svg'
import Robo from '../Icons/Robo'
import Stars from '../Icons/Stars'
// import Stars from '../Icons/Stars'
// import Stars from '../Icons/Stars'

const Left = () => {
  return (
    <> 
            {/* Left */}
        <div className='w-full lg:w-[58%]'>
            <h1 className='text-[3.5rem] text-[#1D2939] font-semibold'>Uniting the world, <br></br>one video call at a time</h1>
            <p className='py-2 lg:w-full text-[#667085] text-[1.5rem]'>Experience the future of communication with ClearLink – where crystal-clear video conferencing meets unparalleled simplicity.</p>
            {/* Trial button and co */}
            <div className='flex flex-col lg:flex-row justify-center lg:justify-start items-center py-8 gap-x-6'>
                <button className='bg-[#175CD3] py-[1em] px-[1.75em] rounded-[6.25em] text-[1.13rem] text-[#fff] font-semibold leading-7'>Start your free trial</button>
                <div className='flex items-center gap-x-2 py-2 lg:py-0'>
                    <Robo/>
                    <p className='text-[#175CD3] text-[1.13rem] font-semibold leading-7'>Discover AI assistant</p>
                </div>
            </div>
            
            <div className='flex flex-row justify-center lg:justify-start items-center gap-x-4 pt-5'>
                <img src={img} alt='Avatar'></img>
                {/* Rating */}
                <div className='flex flex-col'>
                    <div className='flex flex-row gap-x-2'>
                        <Stars/>
                        <p className='text-[#344054] text-[1rem] font-semibold'>5.0</p>
                    </div>
                    <p className='text-[#475467] text-[1rem] font-semibold'>from 3,000+ reviews</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Left
