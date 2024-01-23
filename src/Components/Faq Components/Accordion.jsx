import React from 'react'

const Accordion = () => {
  return (
    <>
        <div class="hs-accordion-group" data-hs-accordion-always-open>
            <div class="hs-accordion active border-b border-b-gray-200 py-4 px-8 rounded-[10px] hs-accordion-active:bg-gray-50" id="hs-basic-heading-one">
                <button class="hs-accordion-toggle items-center gap-x-3 w-full rounded-lg disabled:opacity-50 disabled:pointer-events-none text-left text-[#101828] text-[1rem] flex justify-between font-semibold leading-8 py-2" aria-controls="hs-basic-collapse-one">
                    How many participants can join a ClearLink video conference?
                    <svg class="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg class="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                
                </button>
                <div id="hs-basic-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-one">
                    <p class="text-[#475467] text-[1rem] w-[85%] text-left font-normal leading-7">
                        ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                    </p>
                </div>
            </div>
            <div class="hs-accordion border-b border-b-gray-200 py-4 px-8 rounded-[10px] hs-accordion-active:bg-gray-50" id="hs-basic-heading-one">
                <button class="hs-accordion-toggle items-center gap-x-3 w-full rounded-lg disabled:opacity-50 disabled:pointer-events-none text-left text-[#101828] text-[1rem] flex justify-between font-semibold leading-8 py-2" aria-controls="hs-basic-collapse-one">
                    Can I use ClearLink on multiple devices?
                    <svg class="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg class="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div id="hs-basic-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-two">
                    <p class="text-[#475467] text-[1rem] w-[85%] text-left font-normal leading-7">
                        ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                    </p>
                </div>
            </div>
            <div class="hs-accordion border-b border-b-gray-200 py-4 px-8 rounded-[10px] hs-accordion-active:bg-gray-50" id="hs-basic-heading-three">
                <button class="hs-accordion-toggle items-center gap-x-3 w-full rounded-lg disabled:opacity-50 disabled:pointer-events-none text-left text-[#101828] text-[1rem] flex justify-between font-semibold leading-8 py-2" aria-controls="hs-basic-collapse-one">
                    Is ClearLink compatible with other video conferencing platforms?
                    <svg class="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg class="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                
                </button>
                <div id="hs-basic-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-three">
                    <p class="text-[#475467] text-[1rem] w-[85%] text-left font-normal leading-7">
                        ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                    </p>
                </div>
            </div>
            <div class="hs-accordion border-b border-b-gray-200 py-4 px-8 rounded-[10px] hs-accordion-active:bg-gray-50" id="hs-basic-heading-four">
                <button class="hs-accordion-toggle items-center gap-x-3 w-full rounded-lg disabled:opacity-50 disabled:pointer-events-none text-left text-[#101828] text-[1rem] flex justify-between font-semibold leading-8 py-2" aria-controls="hs-basic-collapse-one">
                    How does ClearLink ensure the security of my video conferences?
                    <svg class="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg class="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                
                </button>
                <div id="hs-basic-collapse-four" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-four">
                    <p class="text-[#475467] text-[1rem] w-[85%] text-left font-normal leading-7">
                        ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                    </p>
                </div>
            </div>
            <div class="hs-accordion border-b border-b-gray-200 py-4 px-8 rounded-[10px] hs-accordion-active:bg-gray-50" id="hs-basic-heading-five">
                <button class="hs-accordion-toggle items-center gap-x-3 w-full rounded-lg disabled:opacity-50 disabled:pointer-events-none text-left text-[#101828] text-[1rem] flex justify-between font-semibold leading-8 py-2" aria-controls="hs-basic-collapse-one">
                    Do I need to download any software to use ClearLink?
                    <svg class="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg class="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                
                </button>
                <div id="hs-basic-collapse-five" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-five">
                    <p class="text-[#475467] text-[1rem] w-[85%] text-left font-normal leading-7">
                        ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                    </p>
                </div>
            </div>
            <div class="hs-accordion border-b border-b-gray-200 py-4 px-8 rounded-[10px] hs-accordion-active:bg-gray-50" id="hs-basic-heading-six">
                <button class="hs-accordion-toggle items-center gap-x-3 w-full rounded-lg disabled:opacity-50 disabled:pointer-events-none text-left text-[#101828] text-[1rem] flex justify-between font-semibold leading-8 py-2" aria-controls="hs-basic-collapse-one">
                    What kind of customer support does ClearLink provide?
                    <svg class="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg class="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                
                </button>
                <div id="hs-basic-collapse-six" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-six">
                    <p class="text-[#475467] text-[1rem] w-[85%] text-left font-normal leading-7">
                        ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                    </p>
                </div>
            </div>
        </div>  
    </>
  )
}

export default Accordion
