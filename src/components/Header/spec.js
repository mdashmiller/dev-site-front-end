import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Header from './index'

import { findByTestAttr } from '../../../Utils'

// render component for testing
const setUp = (props = {}) => {
  return shallow(<Header {...props} />)
}

describe('App rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 header', () => {
    const wrapper = findByTestAttr(component, 'header')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 nav', () => {
    const wrapper = findByTestAttr(component, 'nav')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 nav-wrapper div', () => {
    const wrapper = findByTestAttr(component, 'nav-wrapper')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 brand logo', () => {
    const wrapper = findByTestAttr(component, 'brand-logo')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 logo img', () => {
    const wrapper = findByTestAttr(component, 'logo-img')
    expect(wrapper.length).toBe(1)
  })
})

describe('App mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Header />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

// describe('App snapshot', () => {

//   it('should have a valid snapshot', () => {
//     const component = renderer.create(<Header />)
//     let tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })
