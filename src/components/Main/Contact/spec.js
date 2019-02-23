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

describe('Contact mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Contact />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
