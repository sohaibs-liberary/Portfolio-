import React from 'react'
import Navbar from './Comopnents/Navbar/Navbar'
import About from './Comopnents/About/About'
import Skills from './Comopnents/Skills/Skills'
import Projects from './Comopnents/Projects/Projects'
import Contact from './Comopnents/Contacts/Contact'
import Footer from './Comopnents/Footer/Footer'
const App = () => {
  return (
    <>
    <Navbar />
    <div className="">
    <About />
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default App