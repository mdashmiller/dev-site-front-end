import React from 'react'
import './styles.scss'

const Burger = () => {
  return (
    <button data-test="burger-btn" className="burger">
      <i data-test="menu-icon" className="material-icons">menu</i>
    </button>
  )
}

export default Burger
