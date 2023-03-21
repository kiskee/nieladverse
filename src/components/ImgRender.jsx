import React from 'react'

const  ImgRender = ({src,name,h,w})=> {
  return (
    <img  src={src} alt={name} height={h} width={w}/>
  )
}


export default ImgRender