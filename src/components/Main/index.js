import React from 'react'
import './styles.scss'

import About from './About/index'
import Portfolio from './Portfolio/index'
import Contact from './Contact/index'

const Main = () => {
  return (
    <div>
      <About data-test="about" />
      <Portfolio data-test="portfolio" />
      <Contact data-test="contact" />
    </div>
  )
}

export default Main
