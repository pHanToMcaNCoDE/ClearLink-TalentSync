import React from 'react'
import Stars from '../Icons/Stars'
import Shopify from '../Icons/Shopify'
import avatar from '../../assets/Avatar.svg'

const Left = () => {
  return (
    <div className='w-full lg:w-[58%] flex flex-col items-center lg:items-start'>
        <div className='pt-5 lg:pt-10'>
            <Shopify/>
        </div>
        <div className='pt-5 lg:pt-10'>
            <Stars/>
        </div>
        <div className='pt-10'>
            <p className='text-[#101828] text-[2rem] lg:text-[2.8rem] font-medium leading-tight lg:text-left w-full text-center'>ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.</p>
        </div>
        <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center py-10 gap-x-64'>
            <div className='flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-x-4'>
                <img src={avatar} alt='Avatar'></img>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='font-semibold text-[#101828] text-[1.3rem] leading-8'>Sarah Thompson</h1>
                    <p className='text-[#475467] text-[1.13rem] font-normal leading-7'>Project Manager, Shopify</p>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center gap-x-5 pt-5 lg:pt-0'>
                <div className='rounded-full bg-[#F9FAFB] w-[3em] h-[3em] p-[1em] border border-[#EAECF0] animate-bounce cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#175CD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className='rounded-full bg-[#F9FAFB] w-[3em] h-[3em] p-[1em] border border-[#EAECF0] animate-bounce cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#175CD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Left
