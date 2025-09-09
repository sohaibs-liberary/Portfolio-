import React from 'react'
import Navbar from './Comopnents/Navbar/Navbar'
import About from './Comopnents/About/About'
import Skills from './Comopnents/Skills/Skills'
import Projects from './Comopnents/Projects/Projects'
import Contact from './Comopnents/Contacts/Contact'
const App = () => {
  return (
    <>
    <Navbar />
    <div className="pt-24">
    <About />
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
    </>
  )
}

export default App