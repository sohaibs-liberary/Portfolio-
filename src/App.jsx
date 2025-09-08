import React from 'react'
import Navbar from './Comopnents/Navbar/Navbar'
import About from './Comopnents/About/About'
import Skills from './Comopnents/Skills/Skills'
import Projects from './Comopnents/Projects/Projects'
const App = () => {
  return (
    <>
    <Navbar />
    <div className="pt-24">
    <About />
    <Skills/>
    <Projects/>
    </div>
    </>
  )
}

export default App