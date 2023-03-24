import React from 'react'
import { useNavigate } from 'react-router-dom';

export const ButtonContact = ({ text, back, target }) => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center m-2'>
      <button
      onClick={() => navigate(target)}
        className={
          back +
          ' text-white font-bold py-2 px-4 border border-purple-700 rounded'
        }
      >
        {text}
      </button>
    </div>
  )
}
