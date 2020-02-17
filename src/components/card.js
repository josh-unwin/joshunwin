import React, { useState } from "react"
import styled from 'styled-components'
import ProfileImage from "./profileImage"
import Button from "./button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaReact } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaGem } from 'react-icons/fa'
import device from '../functions/device'
import ContactForm from './contactForm'

const CardStyled = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.cardBkg};
  margin: 0 auto;
  border-radius: 7px;
  box-shadow: 3px 3px 15px rgba(0,0,0,0.2);
  z-index: 3;
  transition: transform 0.7s ease, width 0.7s ease, height 0.7s ease, background-color 1s ease;


  &:hover {
      box-shadow: 5px 5px 8px rgba(0,0,0,0.4);
  }

  .card-column {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .icon {
    margin-right: 10px;
    font-size: 26px;
    color: ${({ theme }) => theme.text};
    transition: 1s ease;
  }
  
  .icon:hover {
    color: #70D6FF;
  }

  .links {
    margin: 10px 0;
    display: flex;
    align-items: center
  }

  @media ${device.mobileS} {
    width: 300px;
    height: 520px;
    flex-direction: column;
    align-items: center;
    transform-style: preserve-3d;

    &.is-flipped {
      transform: rotateY(180deg);
      width: 320px;
      height: 580px;
    }

    .card__face {
      flex-direction: column;
    }
    
    .card-column {
      margin-right: 0;
      margin-top: 10px;
      align-items: center;
    }

    .card-right {
      text-align: center; 
    }

    .links {
      justify-content: center;
    }
  }

  @media ${device.tablet} {
    width: 520px;
    height: 300px;
    flex-direction: row;

    &.is-flipped {
      transform: rotateY(180deg);
      width: 600px;
      height: 550px;
    }

    .card-column {
      margin-right: 26px;
      align-items: center;
    }

    .card__face {
      flex-direction: row;
    }

    .card-right {
      align-items: start;
    }

    .links {
      justify-content: left;
    }
  }

  .card__face {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
  }

  .card__face--front {
    display: flex;
    justify-content: center;
  }
  
  .card__face--back {
    transform: rotateY( 180deg );
    padding: 10px 0;
  }

  .react-icon {
    font-size: 1em;
    vertical-align: middle;
    margin-bottom: 3px;
  }
`

const Card = (props) => {
  const [flipped, setFlipped] = useState(false)

  function flipCard() {
    setFlipped(!flipped);
    props.setBackgroundSelection(props.backgroundSelection === 1 ? 0 : 1);
  }

  return (
    <CardStyled className={flipped ? 'is-flipped' : ''}>
      <div className="card__face card__face--front">
        <div className="card-column">
          <ProfileImage alt="profile_image" className='profile-image' />
        </div>
        <div className="card-column card-right">
          <h1>josh unwin</h1>
          <h3>FULL STACK DEVELOPER</h3>
          <p>Making stuff for things.</p>

          <p><FaReact className='react-icon' /> React, <FaJsSquare className='react-icon' /> JS, <FaGem className='react-icon' /> Rails</p>
          <div className="links">
            <Button text="Say hi &nbsp;&#128075" link="/contact" flipCard={flipCard} />
            <a href="http://www.github.com/josh-unwin" target="_blank" className="icon"><FontAwesomeIcon icon={['fab', 'github']} style={{fontSize: '26px'}} /></a>
            <a href="https://www.linkedin.com/in/josh-unwin-a4735637/" target="_blank" className="icon"><FontAwesomeIcon icon={['fab', 'linkedin']} style={{fontSize: '26px'}} /></a>
          </div>
        </div>
      </div>
      <div className="card__face card__face--back">
        <ContactForm flipCard={flipCard} />
      </div>
    </CardStyled>
  )
}

export default Card
