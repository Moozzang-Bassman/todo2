import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Detail from './pages/Detail'
import Home from './pages/Home'


function App() {



  return (


    <>
      <Routes>
        <Route path='/detail' element={
          <Detail></Detail>
        }></Route>

        <Route path='/' element={
          <Home></Home>
        }></Route>
      </Routes>
    </>

  )
}

export default App