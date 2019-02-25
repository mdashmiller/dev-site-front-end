import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Footer from './index'

import { findByTestAttr } from '../../../Utils'

// render component for testing
const setUp = (props = {}) => {
  return shallow(<Footer {...props} />)
}

describe('Footer rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 footer element', () => {
    const wrapper = findByTestAttr(component, 'footer')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 row div', () => {

  })

  it('should render 2 column divs', () => {

  })

  it('should render 2 titles', () => {

  })

  it('should render 3 content paragraphs', () => {

  })

  it('should render 2 links', () => {

  })

  it('should render 1 copyright div', () => {

  })

  it('should render 1 copyright statement', () => {

  })

})

describe('Footer mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Footer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
