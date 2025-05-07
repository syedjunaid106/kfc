import React from 'react'

const Values = () => {
  const data = [
    { image: '/images/slide1.jpg', title: "Believe in All People", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta eius reiciendis saepe aliquid fugiat. Eveniet culpa dolorem numquam enim." },
    { image: '/images/slide3.jpg', title: "Recognize", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta eius reiciendis saepe aliquid fugiat. Eveniet culpa dolorem numquam enim." },
    { image: '/images/slide2.jpg', title: "Run Great Restaurants", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta eius reiciendis saepe aliquid fugiat. Eveniet culpa dolorem numquam enim." },
    { image: '/images/slide3.jpg', title: "Go for Breakthrough", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta eius reiciendis saepe aliquid fugiat. Eveniet culpa dolorem numquam enim." },
    { image: '/images/slide1.jpg', title: "Build Know How", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta eius reiciendis saepe aliquid fugiat. Eveniet culpa dolorem numquam enim." },
    { image: '/images/slide3.jpg', title: "Work as a Team", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta eius reiciendis saepe aliquid fugiat. Eveniet culpa dolorem numquam enim." }
  ]
  return (
    <div className=' container flex flex-col items-center w-[81vw] justify-center h-full mx-auto'>
      <h2 className='text-[41px] text-brand-secondary font-bold lg:mt-28 mt-32'>Our Values</h2>
      <div className=' w-full grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6 mx-auto mt-10'>
        {data.map((d, index) => (
          <div key={index} className={`value text-brand-secondary w-full flex flex-col flex-shrink gap-5 mb-12`}>
            <img src={d.image} className='w-full object-contain' />
            <p className=' text-[32px] w-full' >{d.title}</p>
            <p className='text-[16px] font-ftr'>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Values

