import React from 'react'
import PrivacyPolicy from '../components/PrivacyPolicy'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className='flex  mx-auto mt-28 flex-col items-center justify-center'>
        <PrivacyPolicy/>
        <div className='w-full'>
        <Footer/>

        </div>
    </div>
  )
}

export default page