import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Contact from './index'

import { findByTestAttr } from '../../../../Utils'

// render component for testing
const setUp = (props = {}) => {
  return shallow(<Contact {...props} />)
}

describe('Contact rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 contact section', () => {
    const wrapper = findByTestAttr(component, 'contact')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 row div', () => {
    const wrapper = findByTestAttr(component, 'row')
    expect(wrapper.length).toBe(1)
  })

  it('should render 2 column divs', () => {
    const wrapper = findByTestAttr(component, 'col')
    expect(wrapper.length).toBe(2)
  })

  it('should render 1 title', () => {
    const wrapper = findByTestAttr(component, 'title')
    expect(wrapper.length).toBe(1)
  })

  it('should render 2 content paragraphs', () => {
    const wrapper = findByTestAttr(component, 'content')
    expect(wrapper.length).toBe(2)
  })

  it('should render 1 form', () => {
    const wrapper = findByTestAttr(component, 'form')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 noscript element', () => {
    const wrapper = findByTestAttr(component, 'nojs')
    expect(wrapper.length).toBe(1)
  })

  it('should render 3 input field divs', () => {
    const wrapper = findByTestAttr(component, 'input-field')
    expect(wrapper.length).toBe(3)
  })

  it('should render 2 form icons', () => {
    const wrapper = findByTestAttr(component, 'form-icon')
    expect(wrapper.length).toBe(2)
  })

  it('should render 1 email input', () => {
    const wrapper = findByTestAttr(component, 'email')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 message input', () => {
    const wrapper = findByTestAttr(component, 'message')
    expect(wrapper.length).toBe(1)
  })

  it('should render 2 input labels', () => {
    const wrapper = findByTestAttr(component, 'label')
    expect(wrapper.length).toBe(2)
  })

  it('should render 1 submit button', () => {
    const wrapper = findByTestAttr(component, 'submit')
    expect(wrapper.length).toBe(1)
  })

  // describe('redering upon submission', () =>  {

  //   describe('submission error', () => {

  //   })

  //   describe('submission success', () => {

  //   })

  // })

})

describe('Contact mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Contact />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
