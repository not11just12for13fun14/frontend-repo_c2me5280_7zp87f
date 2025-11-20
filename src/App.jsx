import React from 'react'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Tokenomics from './components/Tokenomics'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Manifesto />
      <Tokenomics />
      <Footer />
    </div>
  )
}

export default App
