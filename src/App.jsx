import React from 'react'
import './App.css'
import Home from './Home'
import './App.css'


import Addform from './Components/Addform'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {




  return (
    <>
       <Routes>
    
         <Route path='/' element={<Home/>}/>
         <Route path='/Add' element={<Addform/>}/>

       </Routes>
    </>
  )
}

export default App
