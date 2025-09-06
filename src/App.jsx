import React from 'react'
import Navbar from './Comopnents/Navbar/Navbar'
import About from './Comopnents/About/About'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="pt-24">
    <About />
    </div>
    </>
  )
}

export default App