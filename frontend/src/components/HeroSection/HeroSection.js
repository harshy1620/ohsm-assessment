import React from 'react'
import './HeroSection.css'
import Plan from '../../components/Plan/Plan'
import Faq from '../../components/Faq/Faq'

const HeroSection = () => {
  return (
    <div className='hero-wrapper'>
     <Plan/>
     <Faq/>
    </div>
  )
}

export default HeroSection