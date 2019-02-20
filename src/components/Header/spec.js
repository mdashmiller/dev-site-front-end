import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow, render } from 'enzyme'

import Header from './index'

import { findByTestAttr } from '../../../Utils'

// render component for testing
const setUp = (props = {}, children) => {
  if (!children) {
    return shallow(<Header {...props} />)
  } else {
    return render(<Header {...props} />)
  }
}

describe('Header rendering', () => {

  let component
  let deepComponent
  beforeAll(() => {
    component = setUp(undefined, false)
    deepComponent = setUp(undefined, true)
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

  it('should render 1 burger component', () => {
    const wrapper = findByTestAttr(component, 'burger')
    expect(wrapper.length).toBe(1)
  })
  
  // describe('mobile specific rendering', () => {

  //   // change viewport to mobile size
  //   beforeAll(() => {
  //     global.innerWidth = 992
  //     global.dispatchEvent(new Event('resize'))
  //   })

  //   it('should display the burger button', () => {
  //     const wrapper = findByTestAttr(component, 'burger')
  //     expect(wrapper.props.style).toHaveProperty(
  //       'display',
  //       ''
  //     )
  //   })
  // })

  // describe('desktop specific rendering', () => {

  //   // change viewport to desktop size
  //   beforeAll(() => {
  //     global.innerWidth = 993
  //     global.dispatchEvent(new Event('resize'))
  //   })

  //   it('should not display the burger button', () => {
  //     const wrapper = findByTestAttr(component, 'burger')
  //     expect(wrapper.props.style).toHaveProperty(
  //       'display',
  //       'none'
  //     )
  //   })
  // })
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
