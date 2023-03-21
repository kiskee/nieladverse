import React from 'react'
import ImgRender from './ImgRender'
import  oveja  from '../assets/oveja.svg'


const TitleComponent =({title}) =>{
  return (
    <div className='w-full bg-neutral-800 m-0 mb-4 text-white shadow-lg shadow-purple-300 flex justify-center items-center'>
      <ImgRender src={oveja} name='oveja' w={90} h={90}  />
      <h1 className='font-mono text-center py-5 text-2xl basis-1/6 '>
       {title}
      </h1>
      <ImgRender src={oveja} name='oveja' w={90} h={90}  />
    </div>
  )
}


export default TitleComponent