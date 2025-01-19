import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partner'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Testimonial from './components/Testimonial'
import Blog from './components/Blog'
import Trial from './components/Trial'
import Footer from './components/Footer'
function App() {
  return (
    <div className='bg-white'>
    <Navbar />
    <Hero />
    <Partners />
    <Features />
    <Testimonial /> 
    <FAQ/>
    <Blog />
    <Trial />
    <Footer />
    </div>
  )
}

export default App
