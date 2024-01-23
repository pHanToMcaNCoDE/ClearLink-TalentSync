import React from 'react'
import Left from './Why Components/Left'
import Right from './Why Components/Right'
import Arrow from './Why Components/Arrow'

const Why = () => {
  return (
    <div className='relative py-[6.25em] lg:h-[100vh] max-w-[1200px] mx-auto p-2'>
        <Arrow/>
      {/* Heading */}
      <div className='text-center lg:text-left'>
        <p className='text-[#175CD3] text-[1.13rem] font-medium leading-7'>The ClearLink Advantage</p>
        <h1 className='py-2 text-[#1D2939] text-5xl font-semibold'>Why Choose ClearLink</h1>
        <p className='lg:w-[73%] py-2 text-[#667085] font-normal text-[1.5rem]'>In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:</p>
      </div>

      <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-x-14'>
        <Left/>
        <Right/>
      </div>
    </div>
  )
}

export default Why
