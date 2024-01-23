import React from 'react'
import Left from './Ready Components/Left'
import Right from './Ready Components/Right'

const Ready = () => {
  return (
    <div className='py-[6.25em] flex flex-col lg:flex-row justify-between lg:relative'>
        <div className='lg:mx-auto lg:p-2'>
            <Left/>
        </div>
            <Right/>
    </div>
  )
}

export default Ready
