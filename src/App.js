import React from 'react'
import { About, Testimonials, Header, Work, Footer, Skills } from './container'
import { Navbar } from './components'
import './App.scss'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer/>
    </div>
  )
}

export default App