import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'

const App = () => {
  return (
    <main className='text-sm text-neutral-300 antialiased bg-black'>
      <Navbar/>
      <HeroSection/>
      <HowItWorks/>
    </main>
  )
}

export default App
