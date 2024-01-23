import React from 'react'

const Left = () => {
  return (
    <div className='w-full lg:w-[60%]'>
        <h1 className='text-[#101828] text-[3rem] font-semibold leading-[3.75rem] text-center lg:text-left w-full'>Ready to clear the path to perfect communication?</h1>
        <div className='flex flex-col justify-center lg:justify-start items-center lg:items-start'>
            <div className='flex gap-x-2 pt-3 lg:flex-row items-start'>
                <svg className='animate-pulse' xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                    <path d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z" stroke="#175CD3" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>30 days free trial</p>
            </div>
            <div className='flex gap-x-2 pt-3 lg:flex-row items-start'>
                <svg className='animate-pulse' xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                    <path d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z" stroke="#175CD3" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Cancel at any time</p>
            </div>
            <div className='flex gap-x-2 pt-3 lg:flex-row items-start'>
                <svg className='animate-pulse' xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                    <path d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z" stroke="#175CD3" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Access to all features</p>
            </div>
            <div className='flex gap-x-2 pt-3 lg:flex-row items-start'>
                <svg className='animate-pulse' xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                    <path d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z" stroke="#175CD3" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Peronalized onboarding</p>
            </div>
        </div>
        <div className='flex flex-row py-4 justify-center lg:justify-start items-center gap-x-4'>
            <button className='py-[.875em] px-[1.5em] rounded-full bg-[#FFF] border border-[#98A2B3] shadow-sm text-[#101828] text-[1rem] font-semibold leading-6'>Talk to sales</button>
            <button className='py-[.875em] px-[1.5em] rounded-full bg-[#175CD3] text-[#fff] text-[1rem] leading-6 font-semibold'>Start your free trial</button>
        </div>
    </div>
  )
}

export default Left
