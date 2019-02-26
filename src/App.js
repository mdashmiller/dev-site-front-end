import React, { Component } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header data-test="header" />
        <Main data-test="main" />
        <Footer data-test="footer" />
      </div>
    )
  }
}

export default App
