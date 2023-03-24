import React from 'react'
import TitleComponent  from './TitleComponent'
import { BoxText } from './BoxText'
import ImgRender from './ImgRender'
import { ButtonContact } from './ButtonContact'

const FeatureComponent = ({title,text,img}) => {
  return (
    <div className='p-4 h-full'>
      <TitleComponent title={title} />
      <div className="flex m-2">
      <BoxText className='w-1/2'
          text={text}
        />
        <ImgRender src={img}
       name={title} h="1000" w="1000" className='w-1/2'/>
       </div>
       <ButtonContact text="Contactanos" back="bg-neutral-800 hover:bg-neutral-700"/>
        <ButtonContact text="Registrate" back="bg-purple-700 hover:bg-neutral-700"/>
    </div>
  )
}

export default FeatureComponent
