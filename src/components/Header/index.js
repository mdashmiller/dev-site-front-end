import React from 'react'
import './styles.scss'

const Header = () => {
  return (
    <header data-test="header" className="scrollspy">
      <nav data-test="nav">
        <div data-test="nav-wrapper" className="nav-wrapper container">
          <a href="#top" data-test="brand-logo" className="brand-logo">
            <img src="" data-test="logo-img" alt="Matt Miller's logo" />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
