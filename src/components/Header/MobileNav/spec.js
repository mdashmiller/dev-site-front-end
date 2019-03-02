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

  it('should render 1 burger button', () => {
    const wrapper = findByTestAttr(component, 'burger-btn')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 menu icon', () => {
    const wrapper = findByTestAttr(component, 'menu-icon')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 menu div', () => {
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

describe('handleClick', () => {
  
  let component, instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
    jest.spyOn(instance, 'handleClick')
  })

  describe('spying on handleClick', () => {

    it('should be called when burger button is clicked', () => {
      const burger = findByTestAttr(component, 'burger-btn')
      burger.simulate('click')

      expect(instance.handleClick).toHaveBeenCalledTimes(1)
    })

    it('should be called when a link is clicked', () => {
      const about = findByTestAttr(component, 'about')
      const portfolio = findByTestAttr(component, 'portfolio')
      const contact = findByTestAttr(component, 'contact')

      about.simulate('click')
      portfolio.simulate('click')
      contact.simulate('click')

      expect(instance.handleClick).toHaveBeenCalledTimes(3)
    })

  })

  describe('directly invoking handleClick', () => {

    it('should toggle state.mobileNavOpen', () => {
      instance.handleClick()
      expect(component.state('mobileNavOpen')).toBe(true)

      instance.handleClick()
      expect(component.state('mobileNavOpen')).toBe(false)
    })

    it('should add the class "visible" to the mobile-menu ul', () => {
      let menu = findByTestAttr(component, 'menu')
      expect(menu.hasClass('visible')).toBe(false)

      instance.handleClick()
      
      menu = findByTestAttr(component, 'menu')
      expect(menu.hasClass('visible')).toBe(true)
    })

  })

})

describe('MobileNav mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MobileNav />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
