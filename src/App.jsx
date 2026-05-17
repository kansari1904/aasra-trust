import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
    </div>
  )
}

export default App