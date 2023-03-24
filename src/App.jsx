import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Interactiva from './pages/Interactiva'
import Educativa from './pages/Educativa'
import Accesible from './pages/Accesible'
import Registro from './pages/Registro'


function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/interactiva' element={<Interactiva />} />
        <Route path='/educativa' element={<Educativa />} />
        <Route path='/accesible' element={<Accesible />} />
        <Route path='/registro' element={<Registro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
