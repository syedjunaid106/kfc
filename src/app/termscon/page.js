import React from 'react'
import TermsCond from '../components/TermsCond'
import Footer from '../components/Footer'
const page = () => {
  return (
    <div className='flex  mx-auto mt-28 flex-col items-center justify-center'>
<TermsCond/>
<div className='w-full'>
<Footer/>

</div>
    </div>
  )
}

export default page