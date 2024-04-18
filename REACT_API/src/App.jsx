import { useState } from 'react'
import Ajout from './Ajout.jsx'
import Navigation from './Navigation.jsx'
import { Route, Routes} from 'react-router-dom'
import List from './List.jsx'
import './App.css'

function App() {

  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/Ajout" element={<Ajout/>}/>
      <Route path="/List" element={<List/>}/>
    </Routes>
    </>
  )
}

export default App
