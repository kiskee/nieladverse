import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Interactiva from './pages/Interactiva'

function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/interactiva' element={<Interactiva />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
