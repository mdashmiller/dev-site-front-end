import React, { Component } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import MiniNav from './components/MiniNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header data-test="header" />
        <Main data-test="main" />
        <MiniNav data-test="mini-nav" />
        <Footer data-test="footer" />
      </div>
    )
  }
}

export default App
