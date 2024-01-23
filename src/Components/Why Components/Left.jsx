import React from 'react'

const Left = () => {
  return (
    <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full lg:w-[65%]'>
        <div className='flex flex-col justify-center items-center lg:items-start'>
            <div className='rounded-full bg-[#F9FAFB] w-[3em] h-[3em] p-[1em] border border-[#EAECF0] animate-bounce'>
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 25" fill="none">
                    <path d="M22 9.43137C22 8.82555 22 8.52265 21.8802 8.38238C21.7763 8.26068 21.6203 8.19609 21.4608 8.20865C21.2769 8.22312 21.0627 8.43731 20.6343 8.86569L17 12.5L20.6343 16.1343C21.0627 16.5627 21.2769 16.7769 21.4608 16.7914C21.6203 16.8039 21.7763 16.7393 21.8802 16.6176C22 16.4774 22 16.1744 22 15.5686V9.43137Z" stroke="#175CD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 10.3C2 8.61984 2 7.77976 2.32698 7.13803C2.6146 6.57354 3.07354 6.1146 3.63803 5.82698C4.27976 5.5 5.11984 5.5 6.8 5.5H12.2C13.8802 5.5 14.7202 5.5 15.362 5.82698C15.9265 6.1146 16.3854 6.57354 16.673 7.13803C17 7.77976 17 8.61984 17 10.3V14.7C17 16.3802 17 17.2202 16.673 17.862C16.3854 18.4265 15.9265 18.8854 15.362 19.173C14.7202 19.5 13.8802 19.5 12.2 19.5H6.8C5.11984 19.5 4.27976 19.5 3.63803 19.173C3.07354 18.8854 2.6146 18.4265 2.32698 17.862C2 17.2202 2 16.3802 2 14.7V10.3Z" stroke="#175CD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className='text-left py-4'>
                <h1 className='text-[#101828] text-[1.5rem] leading-8 font-semibold text-center lg:text-left'>Crystal-clear HD video</h1>
                <p className='text-center lg:text-left text-[#475467] font-normal text-[1.13rem] leading-7 w-full'>No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center lg:items-start'>
            <div className='rounded-full bg-[#F9FAFB] w-[3em] h-[3em] p-[1em] border border-[#EAECF0] animate-bounce'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 25" fill="none">
                    <path d="M3 10.5L3 14.5M7.5 6.5L7.5 18.5M12 3.5V21.5M16.5 6.5V18.5M21 10.5V14.5" stroke="#175CD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className='text-left py-4'>
                <h1 className='text-[#101828] text-[1.5rem] leading-8 font-semibold text-center lg:text-left'>Noise-canceling audio</h1>
                <p className='text-center lg:text-left text-[#475467] font-normal text-[1.13rem] leading-7 w-full'>Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center lg:items-start'>
            <div className='rounded-full bg-[#F9FAFB] w-[3em] h-[3em] p-[1em] border border-[#EAECF0] animate-bounce'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 25" fill="none">
                    <path d="M21 10.5H3M16 2.5V6.5M8 2.5V6.5M7.8 22.5H16.2C17.8802 22.5 18.7202 22.5 19.362 22.173C19.9265 21.8854 20.3854 21.4265 20.673 20.862C21 20.2202 21 19.3802 21 17.7V9.3C21 7.61984 21 6.77976 20.673 6.13803C20.3854 5.57354 19.9265 5.1146 19.362 4.82698C18.7202 4.5 17.8802 4.5 16.2 4.5H7.8C6.11984 4.5 5.27976 4.5 4.63803 4.82698C4.07354 5.1146 3.6146 5.57354 3.32698 6.13803C3 6.77976 3 7.61984 3 9.3V17.7C3 19.3802 3 20.2202 3.32698 20.862C3.6146 21.4265 4.07354 21.8854 4.63803 22.173C5.27976 22.5 6.11984 22.5 7.8 22.5Z" stroke="#175CD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className='text-left py-4'>
                <h1 className='text-[#101828] text-[1.5rem] leading-8 font-semibold text-center lg:text-left'>Scheduling made easy</h1>
                <p className='text-center lg:text-left text-[#475467] font-normal text-[1.13rem] leading-7 w-full'>Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center lg:items-start'>
            <div className='rounded-full bg-[#F9FAFB] w-[3em] h-[3em] p-[1em] border border-[#EAECF0] animate-bounce'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 25" fill="none">
                        <path d="M7 10.5V8.5C7 5.73858 9.23858 3.5 12 3.5C13.6358 3.5 15.0882 4.28555 16.0004 5.5M12 14.5V16.5M19 15.5C19 19.366 15.866 22.5 12 22.5C8.13401 22.5 5 19.366 5 15.5C5 11.634 8.13401 8.5 12 8.5C15.866 8.5 19 11.634 19 15.5Z" stroke="#175CD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </div>
            <div className='text-left py-4'>
                <h1 className='text-[#101828] text-[1.5rem] leading-8 font-semibold text-center lg:text-left'>Bank-grade security</h1>
                <p className='text-center lg:text-left text-[#475467] font-normal text-[1.13rem] leading-7 w-full'>Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.</p>
            </div>
        </div>
    </div>
  )
}

export default Left
