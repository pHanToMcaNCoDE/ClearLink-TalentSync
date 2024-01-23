import React from 'react'
import Hero from './Components/Hero'
import Companies from './Components/Companies'
import Why from './Components/Why'
import Upgrade from './Components/Upgrade'
import FAQS from './Components/FAQS'
import Ready from './Components/Ready'
import Footer from './Components/Footer'
import CopyRight from './Components/CopyRight'

const Layout = () => {
  return (
    <div>
      <Hero/>
      <Companies/>
      <Why/>
      <Upgrade/>
      <FAQS/>
      <Ready/>
      <Footer/>
      <CopyRight/>
    </div>
    // <div className='max-w-[1200px] p-2 mx-auto'>
    //   <Hero/>
    // </div>
  )
}

export default Layout
