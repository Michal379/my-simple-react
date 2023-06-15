import React from 'react'
import {SiLegacygames} from 'react-icons/si'

const Header = () => {
  return (
    <header className='header'>
        <h1> Surreal Gamers 
         <span className='logo'>
        <SiLegacygames />
        </span>
        </h1>
    </header>
  )
}

export default Header