import React from 'react'

export const Feature = ({feature}) => {
  return (
    <div className='w-1/3 max-w-400 bg-neutral-800 p-4 rounded-lg text-center '>
    <h2 className='text-lg font-bold text-purple-700 mb-4'>
      {feature.title}
    </h2>
    <hr className='border-purple-800 my-2' />
    <img src='' alt='Image 1' className='w-full h-auto my-4' />
    <p className='text-sm text-white leading-relaxed'>
      {feature.text}
    </p>
  </div>
  )
}
