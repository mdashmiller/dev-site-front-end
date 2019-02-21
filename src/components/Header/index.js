import React, { Component } from 'react'
import './styles.scss'
import logo from '../../assets/images/logo.jpg'
import Burger from './Burger/index'
import DesktopLinks from './DesktopLinks/index'

class Header extends Component {

  state = {
    windowWidth: window.innerWidth
  }

  setWindowWidth = () => {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  responsive = (width) => {
    // return a burger button or a set
    // of desktop links dependent
    // upon viewport width
    if (width < 993) {
      return <Burger data-test="burger" />
    } else {
      return <DesktopLinks data-test="desktop-links" />
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
              <img src={logo} data-test="logo-img" alt="Matt Miller's logo" />
            </a>
            { this.responsive(windowWidth) }
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
