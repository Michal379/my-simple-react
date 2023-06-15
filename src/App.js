import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Games from './components/Games'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
    <Navbar />
    <Games />
    <Footer />    
    </Router>
  )
}

export default App