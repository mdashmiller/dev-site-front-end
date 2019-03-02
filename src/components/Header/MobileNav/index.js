import React, { Component } from 'react'
import './styles.scss'

class MobileNav extends Component {

  state = {
    mobileNavOpen: false
  }

  handleClick = () => {
    const { mobileNavOpen } = this.state
    this.setState({
      mobileNavOpen: !mobileNavOpen
    })
  }

  render() {
    const { mobileNavOpen } = this.state
    const toggle = mobileNavOpen ? 'visible' : null

    return (
      <div>
        <button
          data-test="burger-btn"
          className="burger"
          onClick={() => this.handleClick()}
        >
          <i data-test="menu-icon" className="material-icons">menu</i>
        </button>
        <div
          data-test="menu"
          className={`mobile-menu ${toggle}`}
        >
          <ul>
            <li>
              <a
                data-test="about"
                href="#about"
                onClick={() => this.handleClick()}
              >
                About
              </a>
            </li>
            <li>
              <a
                data-test="portfolio"
                href="#portfolio"
                onClick={() => this.handleClick()}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                data-test="contact"
                href="#contact"
                onClick={() => this.handleClick()}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MobileNav
