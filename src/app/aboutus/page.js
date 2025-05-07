import React from 'react'
import AboutUs from '../components/AboutUs'
import History from '../components/History'
import KfcStory from '../components/KfcStory'
import FastFacts from '../components/FastFacts'
import BhookMitao from '../components/BhookMitao'
import Donate from '../components/Donate'
import Footer from '../components/Footer'
const page = () => {
  return (
   <div className='font-ftr'>
    <AboutUs/>
    <History/>
    <KfcStory/>
    <FastFacts/>
    <BhookMitao/>
    <Donate/>
    <Footer/>
   </div>
  )
}

export default page