import React, { useState } from "react"
import styled from 'styled-components'
import ProfileImage from "./profileImage"
import Button from "./button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaReact, FaJsSquare, FaGem, FaGithub, FaLinkedin, FaKeybase, FaPython } from 'react-icons/fa'
import device from '../functions/device'
import ContactForm from './contactForm'
import ClapperboardIcon from './clapperboardIcon'
import TreeIcon from './treeIcon'

const CardStyled = styled.div`
  position: absolute;
  margin: 0 auto;
  z-index: 3;
  transition: transform 0.7s ease, width 0.7s ease, height 0.7s ease, background-color 1s ease;

  .card-column {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .social-icon {
    margin-right: 8px;
    transition: 0.5s ease;
  }
  
  .social-icon:hover {
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
    transition: transform 0.7s ease, width 0.7s ease, height 0.7s ease, background-color 1s ease;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.2);
    border-radius: 7px;

    &:hover {
        box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
    }
  }

  .card__face--front {
    display: flex;
    justify-content: center;
  }
  
  .card__face--back {
    transform: rotateY( 180deg );
    padding: 10px 0;
  }

  .skills-icon {
    display: inline;
    font-size: 1em;
    vertical-align: middle;
    margin-bottom: 3px;
  }
`

const Card = (props) => {
  function flipCard() {
    props.setFlipped(!props.flipped);
    props.setBackgroundSelection(props.backgroundSelection === 1 ? 0 : 1);
  }

  return (
    <CardStyled className={props.flipped ? 'is-flipped' : ''}>
      <div className="card__face card__face--front">
        <div className="card-column">
          <ProfileImage alt="profile_image" className='profile-image' />
        </div>
        <div className="card-column card-right">
          <h1>josh unwin</h1>
          <h3>FRONT END DEVELOPER</h3>
          <ul>
            <li className="flex flex-row items-center">
              <TreeIcon />
              <p className="ml-1 sm:text-left text-centered tracking-wide">
              Green revolution advocate
              </p>
            </li>
            <li className="flex flex-row items-center">
              <ClapperboardIcon /> 
              <p className="ml-1 sm:text-left text-centered tracking-wide">
              Background in film workflow
              </p>
            </li>
          </ul>

          <p><FaReact className='skills-icon' /> React | <FaJsSquare className='skills-icon' /> JS | <FaGem className='skills-icon' /> Rails | <FaPython className='skills-icon' /> Python</p>
          <div className="links">
            <Button text="Say hi &nbsp;&#128075" link="/contact" flipCard={flipCard} />
            <a href="http://www.github.com/josh-unwin" target="_blank"><FaGithub className="social-icon text-3xl" /></a>
            <a href="https://www.linkedin.com/in/josh-unwin-a4735637/" target="_blank"><FaLinkedin className="social-icon text-3xl" /></a>
            <a href="https://keybase.io/joshunwin/" target="_blank"><FaKeybase className="social-icon text-3xl" /></a>
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
