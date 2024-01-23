import React from 'react'
import Left from './Faq Components/Left'
import Right from './Faq Components/Right'

const FAQS = () => {
  return (
    <div className='py-[6.25em] flex flex-col lg:flex-row justify-between max-w-[1200px] mx-auto p-2'>
        <Left/>
        <Right/>
    </div>
  )
}

export default FAQS
