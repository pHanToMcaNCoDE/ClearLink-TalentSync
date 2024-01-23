import React, { useState } from 'react'
import {MdOutlineCancel} from 'react-icons/md'

const Navbar = ({open, setOpen}) => {
    
  return (
    <div className={`fixed top-0 ${open ? 'right-0':'right-[-100%]'} lg:right-0 lg:relative lg:my-[2em] bg-[#F2F4F7] border border-[#D0D5DD] lg:rounded-[6.25em] py-[1em] px-[2em] lg:flex lg:flex-row justify-between items-center text-center lg:text-justify z-20 w-[66%] md:w-[45%] h-screen lg:h-auto lg:w-full transition-all duration-300 ease-in-out`}>

        {/* Overlay */}

        <div className=''></div>

        {/* X-mark */}
        <div onClick={() => setOpen(!open)} className='absolute top-[4%] left-[-12%] lg:hidden'>
            <MdOutlineCancel className='cursor-pointer' color='#1570EF' size={27}/>
        </div>
      
      {/* Logo */}
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

        {/* Links */}
        <div className='flex flex-col lg:flex-row justify-end items-end lg:justify-between lg:items-center gap-x-4 lg:gap-x-8'>
            <li className='flex flex-row py-4 lg:py-0 lg:gap-x-2 items-center list-none cursor-pointer'>
                <p className='text-[#667085] text-[1.13rem] font-semibold'>Products</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M5.19183 6.75L9.69183 11.25L14.1918 6.75" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </li>
            <li className='flex flex-row py-4 lg:py-0 lg:gap-x-2 items-center list-none cursor-pointer'>
                <p className='text-[#667085] text-[1.13rem] font-semibold'>Solutions</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M5.19183 6.75L9.69183 11.25L14.1918 6.75" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </li>
            <li className='flex flex-row py-4 lg:py-0 lg:gap-x-2 items-center list-none cursor-pointer'>
                <p className='text-[#667085] text-[1.13rem] font-semibold'>Resources</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M5.19183 6.75L9.69183 11.25L14.1918 6.75" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </li>
            <li className='flex flex-row py-4 lg:py-0 lg:gap-x-2 items-center list-none cursor-pointer'>
                <p className='text-[#667085] text-[1.13rem] font-semibold'>Pricing</p>
            </li>
        </div>

        {/* Buttons */}
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-2 lg:gap-y-0 lg:gap-x-3'>
            <button className='border border-[#98A2B3] py-[0.875em] px-[1.5em] rounded-[6.25em] text-[#101828] text-[1rem] font-semibold'>Talk to sales</button>
            <button className='bg-[#175CD3] text-[#fff] text-[1rem] font-semibold rounded-[6.25em] py-[0.875em] px-[1.5em] border border-[#98A2B3] shadow-sm'>Sign up for free</button>
        </div>
        {/* <SmallNav open={open} setOpen={setOpen}/> */}
        
      </div>
  )
}

export default Navbar
