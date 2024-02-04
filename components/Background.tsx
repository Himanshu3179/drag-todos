import React from 'react'

const Background = () => {
  return (
    <div className='fixed z-[2] w-full h-screen '>
      <div className='absolute top-[5%] w-full py-10 flex justify-center
        
        text-neutral-500 font-bold text-xl
      '>
        Documents
      </div>
      <h1 className='absolute text-[200px]
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      text-neutral-900 
      tracking-tighter
      font-semibold
      '>
        Docs.
      </h1>
    </div>
  )
}

export default Background