import React from 'react'
import Right from './Upgrade Components/Right'
import Left from './Upgrade Components/Left'

const Upgrade = () => {
  return (
    <div className='py-[6.25em] lg:h-[100vh] bg-[#F9FAFB]'>
      <div className='flex flex-col lg:flex-row justify-between items-center max-w-[1200px] mx-auto p-2'>
        <Left/>
        <Right/>
      </div>
    </div>
  )
}

export default Upgrade
