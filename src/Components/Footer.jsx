import React from 'react'
import Apple from './Icons/Apple'
import Google from './Icons/Google'

const Footer = () => {
  return (
    <div className='py-[6.25em] flex flex-col lg:flex-row justify-between items-center max-w-[1200px] mx-auto p-2'>
        <div className='flex flex-col justify-center items-center lg:items-start lg:w-[32%]'>
            <div className='flex flex-row justify-center lg:items-center gap-y-2 lg:gap-x-1'>
                {/* <div> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 28" fill="none">
                        <path d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z" fill="#1570EF"/>
                        <path d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z" fill="#53B1FD"/>
                    </svg>
                {/* </div> */}
                <div className='flex items-baseline'>
                    <p className='text-[1.2rem] text-[#101828] font-semibold'>ClearLink</p>
                    <div className='bg-[#528BFF] w-[.2rem] h-[.2rem] rounded-full'></div>
                </div>
            </div>
            <p className='text-[#475467] text-[1.13rem] font-normal leading-7 text-center md:text-center lg:text-left pt-8'>ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
        </div>
        <div className='flex flex-col md:flex-col lg:flex-row lg:w-[68%] py-6 lg:py-0'>
            <div className='flex flex-row w-full lg:w-[60%]'>
                <div className='flex flex-col text-justify px-4 lg:px-6'>
                    <li className='list-none py-2 text-[#475467] text-[1rem] font-semibold leading-6'>Product</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Overview</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Features</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Solutions</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Tutorials</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Pricing</li>
                </div>
                <div className='text-justify px-4 lg:px-6'>
                    <li className='list-none py-2 text-[#475467] text-[1rem] font-semibold leading-6'>Company</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>About Us</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Careers</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Press</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>News</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Contact</li>
                </div>
                <div className='text-justify px-4 lg:px-6'>
                    <li className='list-none py-2 text-[#475467] text-[1rem] font-semibold leading-6'>Resources</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Blog</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Events</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Help center</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Tutorials</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Support</li>
                </div>

            </div>
            <div className='flex flex-row justify-center items-center lg:justify-start lg:items-start w-full lg:w-[40%]'>
                <div className='text-justify px-4 lg:px-6'>
                    <li className='list-none py-2 text-[#475467] text-[1rem] font-semibold leading-6'>Legal</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Terms</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Privacy</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Cookies</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Licenses</li>
                    <li className='list-none py-2 text-[#475467] text-[1.13rem] font-semibold leading-7'>Contact</li>
                </div>
                <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start px-4 lg:px-8'>
                    <p className='text-[#004EEB] text-[1rem] text-center lg:text-left font-semibold leading-6 pb-3'>Get the app</p>
                    <Apple/>
                    <Google/>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Footer
