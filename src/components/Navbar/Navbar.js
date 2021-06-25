import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [clickedLink, setClickedLink] = useState('Home')

  //function to change the document title
  useEffect(() => {
    document.title = clickedLink
  }, [clickedLink])

  //function to toggle menu bar
  useEffect(() => {
    showMenu ? document.querySelector('.right-nav').classList.add('show-hide') : document.querySelector('.right-nav').classList.remove('show-hide')
  }, [showMenu])

  return (
    <nav>
      <div className="nav-container">
        <NavLink onClick={() => { setClickedLink("Home"); setShowMenu(false) }} exact to='/' className='logo' ><img src={Logo} /></NavLink>
        <div className='menu-btn' onClick={() => { setShowMenu(!showMenu) }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="right-nav">
          <NavLink onClick={() => { setClickedLink("Home"); setShowMenu(false) }} activeClassName='selected' exact to="/">Home</NavLink>
          <NavLink onClick={() => { setClickedLink("A propos"); setShowMenu(false) }} activeClassName='selected' to="/about">A propos</NavLink>
          <NavLink onClick={() => { setClickedLink("Conditions d'utilisation"); setShowMenu(false) }} activeClassName='selected' to="/terms">Conditions d'utilisation</NavLink>
        </ul>
      </div>
    </nav>
  )
}