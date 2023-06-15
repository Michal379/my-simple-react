import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import bootstrap from 'bootstrap'
import Login from './components/Login'
import Games from './components/Games'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
    <Navbar />
    <Games />
    <Login />
    <Footer />    
    </Router>
  )
}

export default App