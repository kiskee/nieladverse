import React from 'react'
import { BsLinkedin, BsTwitter, BsTwitch } from 'react-icons/bs'

const Layout = ({ children }) => {
  return (
    <>
      <header className='flex justify-between items-center p-4 bg-neutral-800 border-b-4 border-b-purple-800   text-white'>
        <div className='text-2xl font-mono font-bold text-purple-600'>
          NielAdverse
        </div>
        <div className='flex font-mono font-bold'>
        <a href='/' className='mr-4 no-underline text-white'>
            Home
          </a>
          <a href='/interactiva' className='mr-4 no-underline text-white'>
            Interactiva
          </a>
          <a href='/educativa' className='mr-4 no-underline text-white'>
            Educativa
          </a>
          <a href='/accesible' className='no-underline text-white'>
            Accesible
          </a>
        </div>
      </header>
      <main>{children}</main>
      <footer className=' bg-neutral-800 p-5 flex items-center justify-center border-t-4 border-t-purple-800 text-white'>
        <div className='flex items-center justify-center '>
          <i className='m-2 cursor-pointer'>
            <BsLinkedin />
          </i>
          <i className='m-2 cursor-pointer'>
            {' '}
            <BsTwitter />
          </i>
          <i className='m-2 cursor-pointer'>
            {' '}
            <BsTwitch />
          </i>
        </div>
        <p className='font-bold m-0 ml-4 font-mono font-bold'>NielAdverse</p>
      </footer>
    </>
  )
}

export default Layout
