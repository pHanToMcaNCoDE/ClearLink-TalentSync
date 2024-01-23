import React from 'react'
import img from '../../assets/3_2 screen mockup.svg'

const Right = () => {
  return (
    <div className='w-full lg:w-[45%] flex justify-center items-center lg:absolute lg:right-0'>
      <img src={img} alt='Image'></img>
    </div>
  )
}

export default Right
