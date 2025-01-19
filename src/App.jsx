import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partner'
import Features from './components/Features'
function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Partners />
    <Features />
    </>
  )
}

export default App
