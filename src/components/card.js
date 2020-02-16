import React, { useState } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import ProfileImage from "./profileImage"
import Button from "./button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import device from '../functions/device'
import ContactForm from './contactForm'

const CardStyled = styled.div`
  position: absolute;
  background-color: white;
  margin: 0 auto;
  border-radius: 7px;
  box-shadow: 5px 5px 14px rgba(0,0,0,0.2);
  z-index: 3;

  &.is-flipped {
    transform: rotateY(180deg) scale(1.2);
  }

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
    color: #484848;
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
    transition: transform 1s;
    transform-style: preserve-3d;

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
    overflow: scroll;
    padding: 10px 0;
  }
`

const Card = () => {
  const [flipped, setFlipped] = useState(false)

  function flipCard() {
    setFlipped(!flipped);

  }

  return (
    <CardStyled className={flipped ? 'is-flipped' : ''}>
      <div class="card__face card__face--front">
        <div className="card-column">
          <ProfileImage alt="profile_image" className='profile-image' />
        </div>
        <div className="card-column card-right">
          <h1>josh unwin</h1>
          <h3>FULL STACK DEVELOPER</h3>
          <p>Making stuff for things.</p>
          <div className="links">
            <Button text="Say hi &nbsp;&#128075" link="/contact" flipCard={flipCard} />
            <a href="http://www.github.com/josh-unwin" target="_blank" className="icon"><FontAwesomeIcon icon={['fab', 'github']} style={{fontSize: '26px'}} /></a>
            <a href="https://www.linkedin.com/in/josh-unwin-a4735637/" target="_blank" className="icon"><FontAwesomeIcon icon={['fab', 'linkedin']} style={{fontSize: '26px'}} /></a>
          </div>
        </div>
      </div>
      <div class="card__face card__face--back">
        <ContactForm flipCard={flipCard} />
      </div>
    </CardStyled>
  )
}

export default Card
