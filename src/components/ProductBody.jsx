import React from 'react'
import { Feature } from './Feature'

export const ProductBody = ({ features }) => {
  return (
    <div className='flex space-x-6 w-full p-4'>
      {features.map(feature => (
        <Feature key={feature.name}
        feature={feature} 
        img={feature.img}
         />
      ))}
    </div>
  )
}
