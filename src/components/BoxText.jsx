import React from 'react'

export const BoxText = ({text}) => {

  return (
    <div
      className="shadow-md p-5 m-4 text-center"
      style={{ boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.4)" }}
    >
      <p>{text}</p>
    </div>
  )
}




