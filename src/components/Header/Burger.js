import React from 'react'
import PropTypes from 'prop-types'

const Burger = ({ width }) => {
  // only render the burger button
  // on mobile screens
  if (width < 993) {
    return (
      <button data-test="burger-btn" className="burger">
        <i className="material-icons">menu</i>
      </button>
    )
  } else {
    return null
  }
}

Burger.propTypes = {
  width: PropTypes.number.isRequired
}

export default Burger
