import { useState } from 'react'
import Question from './Question.jsx'
import Navigation from './Navigation.jsx'
import { Route, Routes} from 'react-router-dom'
import List from './List.jsx'
import './App.css'

function App() {

  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/Question" element={<Question/>}/>
    </Routes>
    <List/>
    </>
  )
}

export default App
