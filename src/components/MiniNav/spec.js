import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import MiniNav from './index'

import { findByTestAttr } from '../../../Utils'

// render component for testing
const setUp = (props = {}) => {
  return shallow(<MiniNav {...props} />)
}

// describe('MiniNav rendering', () => {

//   let component
//   beforeEach(() => {
//     component = setUp()
//   })

//   describe('menu button', () => {

//     describe('on desktop screens', () => {

//       describe('scroll position is at top of window', () => {

//         it('should not render', () => {

//         })

//       })

//       describe('scroll position is not at top of window', () => {

//         it('should render 1 menu button div', () => {

//         })

//       })

//     })

//     describe('on mobile screens', () => {

//       it('should not render regardless of scroll position', () => {

//       })

//     })

//   })

//   describe('mini-nav menu', () => {

//     describe('on desktop screens', () => {

//       describe('cursor enters the menu button div', () => {

//         it('should render 1 mini-nav menu', () => {

//         })

//         it('should render 1 menu title', () => {

//         })

//         it('should render 4 links', () => {

//         })

//       })

//       describe('user clicks a menu item', () => {

//         it('should unmount', () => {

//         })

//       })

//       describe('cursor leaves the menu button div', () => {

//         it('should unmount', () => {

//         })

//       })

//     })

//     describe('on mobile screens', () => {

//       it('should not render', () => {

//       })

//     })

//   })

// })

describe('MiniNav mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MiniNav />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
