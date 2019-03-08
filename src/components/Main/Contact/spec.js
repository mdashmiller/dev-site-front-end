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

describe('handleKeyDown()', () => {

  const createCharEvent = field => {
    return {
      target: {
        id: field
      },
      key: 'k'
    }
  }

  const createNonCharEvent = field => {
    return {
      target: {
        id: field
      },
      key: 'Backspace'
    }
  }

  let component, instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
    jest.spyOn(instance, 'handleKeyDown')
  })

  describe('spying on handleKeyDown()', () => {

    it('should be called when user types in "email" field', () => {
      const event = createCharEvent('email')
      const wrapper = findByTestAttr(component, 'email')

      wrapper.simulate('keydown', event)

      expect(instance.handleKeyDown).toHaveBeenCalledTimes(1)
      expect(instance.handleKeyDown).toHaveBeenCalledWith(event)
    })

    it('should be called when user types in "message" field', () => {
      const event = createCharEvent('message')
      const wrapper = findByTestAttr(component, 'message')

      wrapper.simulate('keydown', event)

      expect(instance.handleKeyDown).toHaveBeenCalledTimes(1)
      expect(instance.handleKeyDown).toHaveBeenCalledWith(event)
    })

  })

  describe('directly invoking handleKeyDown()', () => {

    describe('typing in the email field of the form', () => {

      describe('the char limit has not been reached', () => {

        it('should return without setting an email error', () => {
          const event = createCharEvent('email')
          instance.handleKeyDown(event)

          expect(instance.handleKeyDown).toHaveReturned()
          expect(component.state('emailError')).toBe(false)
        })

      })

      describe('the char limit has been reached', () => {

        describe('user presses a char key', () => {

          it('should set the state of email error to true', () => {
            component.setState({ freezeEmail: true })
            const event = createCharEvent('email')

            instance.handleKeyDown(event)

            expect(component.state('emailError')).toBe(true)
          })

        })

        describe('user presses a non-char key', () => {

          it('should return without setting an email error', () => {
            component.setState({ freezeEmail: true })
            const event = createNonCharEvent('email')

            instance.handleKeyDown(event)

            expect(instance.handleKeyDown).toHaveReturned()
            expect(component.state('emailError')).toBe(false)
          })

        })

      })

    })

    describe('typing in the message field of the form', () => {

      describe('the char limit has not been reached', () => {

        it('should return without setting a message error', () => {
          const event = createCharEvent('message')
          instance.handleKeyDown(event)

          expect(instance.handleKeyDown).toHaveReturned()
          expect(component.state('messageError')).toBe(false)
        })

      })

      describe('the char limit has been reached', () => {

        describe('user presses a char key', () => {

          it('should set the state of message error to true', () => {
            component.setState({ freezeMessage: true })
            const event = createCharEvent('message')

            instance.handleKeyDown(event)

            expect(component.state('messageError')).toBe(true)
          })

        })

        describe('user presses a non-char key', () => {

          it('should return without setting a message error', () => {
            component.setState({ freezeMessage: true })
            const event = createNonCharEvent('message')

            instance.handleKeyDown(event)

            expect(instance.handleKeyDown).toHaveReturned()
            expect(component.state('messageError')).toBe(false)
          })

        })

      })

    })

  })

})

describe('handleChange()', () => {

  const createEvent = field => {
    return {
      target: {
        id: field,
        value: 'abc'
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

      describe('user pastes into the field', () => {

        describe('char limit is exceeded', () => {



        })

        describe('char limit is not exceeded', () => {



        })

      })

      describe('user types in the field', () => {

        describe('char limit is exceeded', () => {

          it('should set the value of email field to the truncated email', () => {

          })

          it('should set the number of email chars to the max value', () => {

          })

          it('should freeze the email field', () => {
            component.setState({ email: 'abc' })
            
          })

          it('should set email error to true', () => {

          })

        })

        describe('char limit is not exceeded', () => {

          it('should set the value of the email field in state', () => {
            const event = createEvent('email')
            instance.handleChange(event)

            expect(component.state('email')).toBe('abc')
          })

          it('should set the number of email chars in state', () => {
            const event = createEvent('email')
            instance.handleChange(event)

            expect(component.state('emailChars')).toBe(3)
          })

        })

      })

    })

    describe('when called from the message field', () => {

      describe('user pastes into the field', () => {

        describe('char limit is exceeded', () => {



        })

        describe('char limit is not exceeded', () => {



        })

      })

      describe('user types in the field', () => {

        describe('char limit is exceeded', () => {



        })

        describe('char limit is not exceeded', () => {

          it('should set the value of the message field in state', () => {
            const event = createEvent('message')
            instance.handleChange(event)

            expect(component.state('message')).toBe('abc')
          })

          it('should set the number of message chars in state', () => {
            const event = createEvent('message')
            instance.handleChange(event)

            expect(component.state('messageChars')).toBe(3)
          })

        })

      })

    })

  })

})

describe('trackChars()', () => {

  const createEvent = field => {
    return {
      target: {
        id: field,
        value: 'abc'
      }
    }
  }

  let component, instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
    jest.spyOn(instance, 'trackChars')
  })

  describe('spying on trackChars()', () => {

    describe('typing in the email field of the form', () => {

      it('should be called with any changes to the field', () => {
        const event = createEvent('email')
        const wrapper = findByTestAttr(component, 'email')

        wrapper.simulate('change', event)

        expect(instance.trackChars).toHaveBeenCalledTimes(1)
        expect(instance.trackChars).toHaveBeenCalledWith('email')
      })

    })

    describe('typing in the message field of the form', () => {

      it('should be called with any changes to the field', () => {
        const event = createEvent('message')
        const wrapper = findByTestAttr(component, 'message')

        wrapper.simulate('change', event)

        expect(instance.trackChars).toHaveBeenCalledTimes(1)
        expect(instance.trackChars).toHaveBeenCalledWith('message')
      })

    })

  })

  describe('directly invoking trackChars()', () => {

    describe('typing in email form field', () => {

      it('should set state to freeze the field once char limit is reached', () => {
        component.setState({ emailChars: 3 })
        instance.trackChars('email')
        expect(component.state('freezeEmail')).toBe(true)
      })

      it('should set state to un-freeze the field when under the char limit', () => {
        component.setState({ emailChars: 2, freezeEmail: true })
        instance.trackChars('email')
        expect(component.state('freezeEmail')).toBe(false)
      })

    })

    describe('typing in message form field', () => {

      it('should set state to freeze the field once char limit is reached', () => {
        component.setState({ messageChars: 3 })
        instance.trackChars('message')
        expect(component.state('freezeMessage')).toBe(true)
      })

      it('should set state to un-freeze the field when under the char limit', () => {
        component.setState({ messageChars: 2, freezeMessage: true })
        instance.trackChars('message')
        expect(component.state('freezeMessage')).toBe(false)
      })

    })

  })

})

describe('handleSubmit()', () => {

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

describe('componentDidUpdate()', () => {

  const createEvent = field => {
    return {
      target: {
        id: field,
        value: 'abc'
      }
    }
  }

  let component, instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
  })

  describe('directly invoking componentDidUpdate()', () => {

    describe('updating the email field on the form', () => {

      it('should call trackChars() for the email field', () => {
        const event = createEvent('email')
        const wrapper = findByTestAttr(component, 'email')

        jest.spyOn(instance, 'trackChars')
        wrapper.simulate('change', event)

        expect(instance.trackChars).toHaveBeenCalledTimes(1)
        expect(instance.trackChars).toHaveBeenCalledWith('email')
      })

    })

    describe('updating the message field on the form', () => {

      it('should call trackChars() for the message field', () => {
        const event = createEvent('message')
        const wrapper = findByTestAttr(component, 'message')

        jest.spyOn(instance, 'trackChars')
        wrapper.simulate('change', event)

        expect(instance.trackChars).toHaveBeenCalledTimes(1)
        expect(instance.trackChars).toHaveBeenCalledWith('message')
      })

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
