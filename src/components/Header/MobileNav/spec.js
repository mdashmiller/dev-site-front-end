import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import MobileNav from './index'

import { findByTestAttr } from '../../../../Utils'

// render component for testing
const setUp = (props = {}) => {
  return shallow(<MobileNav {...props} />)
}

describe('MobileNav rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 menu ul', () => {
    const wrapper = findByTestAttr(component, 'menu')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 link to the about section', () => {
    const wrapper = findByTestAttr(component, 'about')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 link to the portfolio section', () => {
    const wrapper = findByTestAttr(component, 'portfolio')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 link to the contact section', () => {
    const wrapper = findByTestAttr(component, 'contact')
    expect(wrapper.length).toBe(1)
  })

})

describe('MobileNav mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MobileNav />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
