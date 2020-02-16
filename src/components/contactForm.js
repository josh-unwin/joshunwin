import React, { useState } from 'react'
import styled from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'
import axios from "axios"
import * as qs from "query-string"

const Form = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: translateZ(0);
  background: white;

  .feedback {
    width: 50%;
    padding: 10px 10px;
    border-radius: 5px;
    margin-bottom: 20px;
  };

  .sent {
    background-color: #e6ffe2;
    border: 1px solid #97E08B;
  };

  .error {
    background-color: #ffe2e2;
    border: 1px solid #f4b0b0;
  }

  .control {
    margin: 0px 0px 0px 0px;
  }

  .input, .textarea {
    font-weight: 400;
  }

  .back-arrow {
    cursor: pointer;
    position: absolute;
    top: 5px;
    left: 12px;
  }
`

const ContactForm = (props) => {
  const [messageFeedback, setMessageFeedback] = useState('');
  const [messageStatus, setMessageStatus] = useState('');

  function flipBack() {
    console.log('go back');
    props.flipCard()
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.persist();

    const formData = {
      "form-name": 'Contact Form',
      "email": e.target[2].value,
      "message": e.target[3].value
    };
    // Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))
    
    const axiosOptions = {
      url: '/contact/',
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
      }

      axios(axiosOptions)
        .then(response => {
          setMessageFeedback("Message has been sent, thank you!");
          setMessageStatus('sent');
          document.querySelector('#contact-form').reset();
        })
        .catch(err => {
          setMessageFeedback("There was a problem :( Please check your message and try again.");
          setMessageStatus('failed')
        }
      )
  }

  return(
    <Form>
      <FaArrowLeft onClick={flipBack} className='back-arrow' />
      <h2>Get in touch below!</h2>
      {messageFeedback && 
      <span className={messageStatus === 'sent' ? 'feedback sent' : 'feedback error'}
            style={{width:'90%'}}>
              {messageFeedback}
      </span>}
      <form onSubmit={e => handleSubmit(e)} id='contact-form' className='h100' method="post" 
            name="Contact Form" netlify-honeypot="bot-field" data-netlify="true"
            style={{width:'90%'}}>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="Contact Form" />
        <div className="field">
            <div className="control">
              <input className="input " type="email" placeholder="Email" name="email" />
            </div>
        </div>
        <div className="field h100">
            <div className="control h100">
              <textarea className="textarea h100" placeholder="Message" name="message"></textarea>
            </div>
        </div>
        <div className="control">
          <button className="button is-small is-primary" style={{color: 'white'}}>Submit</button>
        </div>
        </form>
      </Form>
  )
}

export default ContactForm