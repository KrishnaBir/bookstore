import React from 'react'

function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 mt-12 md:mt-32'>
          <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>Hello, welcomes here to learn something <span className='text-pink-500'>new everyday!!!!</span> </h1>
            <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat cumque illo veniam, repellendus impedit hic porro temporibus aperiam laboriosam, culpa vitae iure unde?</p>
          </div>
        </div>
        <div className='w-full md:w-1/2'>right</div>
      </div>
    </>
  )
}

export default Banner
