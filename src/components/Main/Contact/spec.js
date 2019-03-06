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

describe('handleChange()', () => {

  const createEvent = field => {
    return {
      target: {
        id: field,
        value: 'a'
      }
    }
  }

  let component, instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
    jest.spyOn(instance, 'handleChange')
  })

  describe('spying on handleChange()', () => {

    it('should be called when user types in the email field', () => {
      const event = createEvent('email')
      const wrapper = findByTestAttr(component, 'email')
      wrapper.simulate('change', event)

      expect(instance.handleChange).toHaveBeenCalledTimes(1)
      expect(instance.handleChange).toHaveBeenCalledWith(event)
    })

    it('should be called when user types in the message field', () => {
      const event = createEvent('message')
      const wrapper = findByTestAttr(component, 'message')
      wrapper.simulate('change', event)

      expect(instance.handleChange).toHaveBeenCalledTimes(1)
      expect(instance.handleChange).toHaveBeenCalledWith(event)
    })

  })

  describe('directly invoking handleChange()', () => {

    describe('when called from the email field', () => {

      it('should set the value of the email field in state', () => {
        const event = createEvent('email')
        instance.handleChange(event)

        expect(component.state('email')).toBe('a')
      })

    })

    describe('when called from the message field', () => {

      it('should set the value of the message field in state', () => {
        const event = createEvent('message')
        instance.handleChange(event)

        expect(component.state('message')).toBe('a')
      })

    })

  })

})

describe('handleSubmit', () => {

  const event = {
    preventDefault: jest.fn()
  }

  let component, instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
    jest.spyOn(instance, 'handleSubmit')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('spying on handleSubmit()', () => {

    it('should be called when user clicks submit', () => {
      const wrapper = findByTestAttr(component, 'form')
      wrapper.simulate('submit', event)

      expect(instance.handleSubmit).toHaveBeenCalledTimes(1)
      expect(instance.handleSubmit).toHaveBeenCalledWith(event)
    })

  })

  describe('directly invoking handleSubmit()', () => {

    it('should call e.preventDefault()', () => {
      jest.spyOn(event, 'preventDefault')

      instance.handleSubmit(event)

      expect(event.preventDefault).toHaveBeenCalledTimes(1)
    })

  })

})

describe('Contact mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Contact />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
