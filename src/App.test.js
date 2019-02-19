import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import Enzyme, { shallow } from 'enzyme'

import { findByTestAttr } from '../Utils'

// render component for testing
const setUp = (props={}) => {
  return shallow(<App {...props} />)
}

describe('App rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 h1', () => {
    const wrapper = findByTestAttr(component, 'title')
    expect(wrapper.length).toBe(1)
  })
})

describe('App mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
