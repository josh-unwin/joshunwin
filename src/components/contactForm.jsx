import React, { useState } from 'react'
import styled from 'styled-components'
import BackButton from '../components/backButton'
import { FaCheck } from 'react-icons/fa'
import axios from "axios"
import * as qs from "query-string"

const FormDiv = styled.div`
  position: relative;
  height: 100%;

  .form-contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transform: translateZ(0);
    transition: 1s ease;

    #contact-form {
      display: flex;
      margin: 10px auto;
      flex-direction: column;
      width: max-content;
    }

    .feedback {
      width: 50%;
      padding: 5px 5px;
      font-size: 0.8em;
      border-radius: 5px;
      margin: 5px 0;
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

    .message-field {
      flex-grow: 1;
    }
  }
`

const ContactForm = (props) => {
  const [messageFeedback, setMessageFeedback] = useState('');
  const [messageStatus, setMessageStatus] = useState('unsent');

  function flipBack() {
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

    if (formData.email === "" || formData.message === "") {
      setMessageStatus('formNotComplete')
      setMessageFeedback("Looks like there's an issue, have you filled in both fields?")
      console.log("sorry there's an issue with the form");
      console.log(messageStatus);
    } else {
      const axiosOptions = {
        url: '/',
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(formData),
        }

      axios(axiosOptions)
        .then(response => {
          console.log(response);
          setMessageFeedback("Message has been sent, thank you!");
          setMessageStatus('sent');
        })
        .catch(err => {
          console.log(err);
          setMessageFeedback("There was a problem :( Please check your message and try again.");
          setMessageStatus('failed')
        })
      }
  }

  switch (messageStatus) {
    default:
      return(
      <FormDiv>
        <div className="form-contents">
        <BackButton action={flipBack} />
          <h2>Get in touch :)</h2>
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
            <div className="my-1 field w-full">
                <div className="control w-full">
                  <input className="form-input-field p-2 w-full rounded border border-gray-300" type="email" placeholder="Email" name="email" />
                </div>
            </div>
            <div className="my-1 field message-field w-full">
                <div className="control h100 w-full">
                  <textarea className="form-input-field textarea h100 p-2 w-full rounded border border-gray-300" placeholder="Message" name="message"></textarea>
                </div>
            </div>
            <div className="control">
              <button className="bg-josh-blue rounded px-3 py-1 mt-1" style={{color: 'white'}}>Submit</button>
            </div>
            </form>
          </div>
        </FormDiv>
      )
    case 'sent':
      return (
        <FormDiv>
          <BackButton action={flipBack} />
          <span style={{fontSize: '4em', color: '#00D1B2'}}><FaCheck /></span>
          <h2>I've got it!</h2>
          <p style={{textAlign: 'center'}}>
            Thanks for your message, I'll get back to you asap.
          </p>
      </FormDiv>
      )
  }
}

export default ContactForm