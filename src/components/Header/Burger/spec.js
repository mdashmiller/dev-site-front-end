import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Burger from './index'

import { findByTestAttr } from '../../../../Utils'

// render component for testing
const setUp = (props = {}) => {
  return shallow(<Burger {...props} />)
}

describe('Burger rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 burger button', () => {
    const wrapper = findByTestAttr(component, 'burger-btn')
    expect(wrapper.length).toBe(1)
  })
  
  it('should render 1 menu icon', () => {
    const wrapper = findByTestAttr(component, 'menu-icon')
    expect(wrapper.length).toBe(1)
  })

})

describe('Burger mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Burger />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
