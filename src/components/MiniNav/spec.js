import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import MiniNav from './index'

import { findByTestAttr } from '../../../Utils'

// render component for testing
const setUp = (props = {}) => {
  return shallow(<MiniNav {...props} />)
}

describe('MiniNav rendering', () => {

  let component
  beforeEach(() => {
    component = setUp()
  })

  describe('menu button', () => {

    describe('on desktop screens', () => {

      describe('scroll position is at top of window', () => {

        it('should not render', () => {
          const wrapper = findByTestAttr(component, 'menu-btn')
          expect(wrapper.length).toBe(0)
        })

      })

      describe('scroll position is not at top of window', () => {

        it('should render 1 menu button div', () => {
          component.setState({ scrollPosition: 10 })

          const wrapper = findByTestAttr(component, 'menu-btn')
          expect(wrapper.length).toBe(1)
        })

      })

    })

    describe('on mobile screens', () => {

      it('should not render regardless of scroll position', () => {
        // resize browser window for mobile
        global.innerWidth = 992
        global.dispatchEvent(new Event('resize'))

        let wrapper
        wrapper = findByTestAttr(component, 'menu-btn')
        expect(wrapper.length).toBe(0)

        component.setState({ scrollPosition: 10 })

        wrapper = findByTestAttr(component, 'menu-btn')
        expect(wrapper.length).toBe(0)
      })
      
    })
    
  })

  describe('mini-nav menu', () => {

    describe('on desktop screens', () => {

      describe('cursor enters the menu button div', () => {

        beforeEach(() => {
          // make mini-nav button render
          global.innerWidth = 1400
          global.dispatchEvent(new Event('resize'))
          component.setState({ scrollPosition: 50 })
        })

        const makeBtn = component => 
          findByTestAttr(component, 'menu-btn')

        const mouseEnterSim = component => {
          const button = makeBtn(component)
          button.simulate('mouseEnter')
        }

        it('should render 1 mini-nav menu', () => {
          mouseEnterSim(component)

          const wrapper = findByTestAttr(component, 'menu')
          expect(wrapper.length).toBe(1)
        })

        it('should render 1 menu title', () => {
          mouseEnterSim(component)

          const wrapper = findByTestAttr(component, 'menu-title')
          expect(wrapper.length).toBe(1)
        })

        it('should render 4 links', () => {
          mouseEnterSim(component)

          const wrapper = findByTestAttr(component, 'link')
          expect(wrapper.length).toBe(4)
        })

      })

      describe('user clicks a menu item', () => {

        it('should unmount', () => {

        })

      })

      describe('cursor leaves the menu button div', () => {

        it('should unmount', () => {

        })

      })

    })

    // describe('on mobile screens', () => {

    //   it('should not render', () => {

    //   })

    // })

  })

})

describe('setWindowWidth()', () => {

  let component
  let instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
  })

  describe('spying on setWindowWidth()', () => {

    it('should be called when window is resized', () => {
      jest.spyOn(instance, 'setWindowWidth')

      // resize browser window
      global.innerWidth = 1000
      global.dispatchEvent(new Event('resize'))

      expect(instance.setWindowWidth).toHaveBeenCalledTimes(1)
    })

  })
  
  describe('directly invoking setWindowWidth()', () => {

    it('should set the window width in state', () => {
      global.innerWidth = 1200

      instance.setWindowWidth()

      expect(instance.state.windowWidth).toBe(1200)
    })

  })

})

// describe('setScrollPosition()', () => {

//   describe('spying on setScrollPosition()', () => {

//     it('should be called when a scroll event occurs', () => {

//     })

//   })

//   describe('directly invoking setScrollPosition', () => {

//     it('should set scroll position in state', () => {
      
//     })

//     it('should call toggleMenu() with true when scrollY is 0', () => {

//     })

//   })

// })

describe('toggleMenu()', () => {

  let component, instance
  beforeEach(() => {
    component = setUp()

    // make mini-nav button render
    component.setState({ scrollPosition: 100 })

    instance = component.instance()
    jest.spyOn(instance, 'toggleMenu')
  })

  const openMiniNav = () => {
    const button = findByTestAttr(component, 'menu-btn')
    button.simulate('mouseEnter')
  }

  describe('spying on toggleMenu()', () => {

    it('should be called when cursor enters mini-nav div', () => {
      openMiniNav()
      expect(instance.toggleMenu).toHaveBeenCalledTimes(1)
    })

    it('should be called when cursor leaves mini-nav menu', () => {
      openMiniNav()
      const wrapper = findByTestAttr(component, 'menu')

      wrapper.simulate('mouseLeave')

      expect(instance.toggleMenu).toHaveBeenCalledTimes(2)
    })

    it('should be called when a link is clicked', () => {
      openMiniNav()
      const wrapper = findByTestAttr(component, 'link')
      const numOfLinks = wrapper.length
    
      for (let i = 0; i < numOfLinks; i++) {
        wrapper.at(i).simulate('click')
        if (i < numOfLinks - 1) openMiniNav()
      }

      expect(instance.toggleMenu).toHaveBeenCalledTimes(numOfLinks * 2)
    })

    // it('should be called when scrollY is 0', () => {
    //   // simulate scroll event where window.scrollY = 0

    //   expect(instance.toggleMenu).toHaveBeenCalledTimes(1)
    //   expect(instance.toggleMenu).toHaveBeenCalledWith(true)
    // })

  })

  describe('directly invoking toggleMenu()', () => {

    describe('top is false', () => {

      it('should toggle menuOpen in state', () => {
        instance.toggleMenu()
        expect(instance.state.menuOpen).toBe(true)

        instance.toggleMenu()
        expect(instance.state.menuOpen).toBe(false)
      })

    })

    describe('top is true', () => {

      it('should set menuOpen to false', () => {
        openMiniNav()
        instance.toggleMenu(true)

        expect(instance.state.menuOpen).toBe(false)

        instance.toggleMenu(true)

        expect(instance.state.menuOpen).toBe(false)
      })

    })

  })

})

// describe('comoponentDidMount()', () => {

//   describe('directly invoking componentDidMount()', () => {

   
//     it('should attach a resize event listener to the window', () => {
      
//     })

//     it('should attach a scroll event listener to the window', () => {
      
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
