import React, { Component } from 'react'
import './styles.scss'
import logo from '../../assets/images/logo.jpg'
import DesktopNav from './DesktopNav/index'
import MobileNav from './MobileNav/index'

class Header extends Component {

  state = {
    windowWidth: window.innerWidth
  }

  setWindowWidth = () => {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  renderForDesktop = (width) => {
    // return desktop links for larger viewports
    if (width > 992) {
      return <DesktopNav data-test="desktop-nav" />
    } else {
      return null
    }
  }

  renderForMobile = (width) => {
    // return a mobile menu for smaller viewports
    if (width < 993) {
      return <MobileNav data-test="mobile-nav" />
    } else {
      return null
    }
  }

  componentDidMount() {
    // track changes in browser width
    window.addEventListener('resize', this.setWindowWidth)
  }

  render() {
    const { windowWidth } = this.state
    
    return (
      <header data-test="header" className="scrollspy">
        <nav data-test="nav">
          <div data-test="nav-wrapper" className="nav-wrapper container">
            <a href="#top" data-test="brand-logo" className="brand-logo">
              <img src={logo} data-test="logo-img" alt="Matt Miller Web Developer" />
            </a>
            { this.renderForDesktop(windowWidth) }
          </div>
        </nav>
        { this.renderForMobile(windowWidth) }
      </header>
    )
  }
}

export default Header
