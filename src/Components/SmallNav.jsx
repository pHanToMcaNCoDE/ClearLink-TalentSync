import React, { useState } from 'react'
import {CiMenuFries} from 'react-icons/ci'

const SmallNav = ({open, setOpen}) => {
    
  return (
        <div className='flex flex-row justify-between items-center lg:hidden w-full h-[70px] p-2'>

            <div className='flex flex-row justify-end lg:justify-center lg:items-center gap-y-2 lg:gap-x-1 cursor-pointer py-4 lg:py-0'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 28" fill="none">
                        <path d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z" fill="#1570EF"/>
                        <path d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z" fill="#53B1FD"/>
                    </svg>
                </div>
                <div className='flex items-baseline'>
                    <p className='text-[1.2rem] text-[#101828] font-semibold'>ClearLink</p>
                    <div className='bg-[#528BFF] w-[.2rem] h-[.2rem] rounded-full'></div>
                </div>
            </div>
            <div onClick={() => setOpen(!open)}>
                <CiMenuFries className='cursor-pointer' size={27} color='#1570EF'/>
            </div>
            {/* <Navbar open={open} setOpen={setOpen}/> */}
        </div>
  )
}

export default SmallNav
