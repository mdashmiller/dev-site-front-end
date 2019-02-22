import React from 'react'
import './styles.scss'

const MobileNav = () => {
  return (
    <div>
      <button data-test="burger-btn" className="burger">
        <i data-test="menu-icon" className="material-icons">menu</i>
      </button>
      <div className="mobile-menu">
        <ul data-test="menu">
          <li><a data-test="about" href="#about">About</a></li>
          <li><a data-test="portfolio" href="#portfolio">Portfolio</a></li>
          <li><a data-test="contact" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav
