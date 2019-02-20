import React, { Component } from 'react'
import './styles.scss'
import logo from '../../assets/images/logo.jpg'
import Burger from './Burger'

class Header extends Component {

  state = {
    windowWidth: null
  }

  render() {
    return (
      <header data-test="header" className="scrollspy">
        <nav data-test="nav">
          <div data-test="nav-wrapper" className="nav-wrapper container">
            <a href="#top" data-test="brand-logo" className="brand-logo">
              <img src={logo} data-test="logo-img" alt="Matt Miller's logo" />
            </a>
            <Burger data-test="burger" />
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
