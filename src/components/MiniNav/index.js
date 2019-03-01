import React, { Component } from 'react'
import './styles.scss'

class MiniNav extends Component {

  state = {
    windowWidth: window.innerWidth,
    scrollPosition: 0,
    menuOpen: false
  }

  setWindowWidth = () => {
    this.setState({
      windowWidth: window.innerWidth 
    })
  }

  setScrollPosition = () => {
    this.setState({
      scrollPosition: window.scrollY
    })
  }

  handleMouseEnter = () => {
    this.setState({
      menuOpen: true
    })
  }

  componentDidMount() {
    // track window width and scroll position
    window.addEventListener('resize', () => this.setWindowWidth())
    window.addEventListener('scroll', () => this.setScrollPosition())
  }

  render() {
    const {
      windowWidth,
      scrollPosition,
      menuOpen
    } = this.state

    if (windowWidth < 993) {
      return null
    } else {
      if (scrollPosition) {
        return (
          <div>
            <div 
              data-test="menu-btn"
              className="mini-nav-btn"
              onMouseEnter={() => this.handleMouseEnter()}
            >
              MENU
            </div>
            {
              menuOpen &&
                <div data-test="menu" className="mini-nav-menu">
                  <ul>
                    <li><a data-test="link" href="#top">Top</a></li>
                    <li><a data-test="link" href="#about">About</a></li>
                    <li><a data-test="link" href="#portfolio">Portfolio</a></li>
                    <li><a data-test="link" href="#contact">Contact</a></li>
                    <li data-test="menu-title">Menu</li>
                  </ul>
                </div>
            }
          </div>
        )
      } else {
        return null
      }
    }
  }
}

export default MiniNav
