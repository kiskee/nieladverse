import React from 'react'

export const ButtonContact = ({text}) => {
    
  return (
    <div className="flex justify-center items-center">
 <button className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2 px-4 border border-purple-700 rounded">
  {text}
</button>
    </div>
   
  )
}
