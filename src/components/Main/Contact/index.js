import React from 'react'
import './styles.scss'

const Contact = () => {
  return (
    <section
      data-test="contact"
      className="container section scrollspy"
      id="contact"
    >
      <div data-test="row" className="row">
        <div data-test="col" className="col sm12 l5">
          <h2 data-test="title">Contact Me</h2>
          <p data-test="content">
            Questions? Comments? Got a job that needs doing? 
            Drop me a line.
        	</p>
          <p data-test="content">
            I'd love to work remotely but don't mind going in 
            to an office either, and I'm willing to relocate 
            for the right company or team. Happy hunting!
        	</p>
        </div>
        <div data-test="col" className="col s12 l5 offset-l2">
          <form data-test="form">
            {/* JS disabled message */}
            <noscript data-test="nojs">
              <p id="no-js">Enable JavaScript to use this form</p>
            </noscript>
            <div data-test="input-field" className="input-field">
              <i data-test="form-icon" className="material-icons prefix">
                email
              </i>
              <input data-test="email" type="email" id="email" />
              <label data-test="label" htmlFor="email">Your Email</label>
            </div>
            <div data-test="input-field" className="input-field">
              <i data-test="form-icon" className="material-icons prefix">
                message
              </i>
              <textarea
                data-test="message"
                className="materialize-textarea"
                id="message"
              >
              </textarea>
              <label data-test="label" htmlFor="message">Message</label>
            </div>
            <div data-test="input-field" className="input-field center">
              <button data-test="submit" className="btn" id="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
