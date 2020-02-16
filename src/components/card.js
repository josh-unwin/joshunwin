import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import ProfileImage from "./profileImage"
import Button from "./button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import device from '../functions/device'

const CardStyled = styled.div`
  position: absolute;
  background-color: white;
  margin: 0 auto;
  display: flex;
  border-radius: 7px;
  box-shadow: 5px 5px 14px rgba(0,0,0,0.2);
  justify-content: center;
  z-index: 3;

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
    
    .card-column {
      margin-right: 0;
      margin-top: 10px;
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
      margin-right: 30px;
    }

    .card-right {
      text-align: left; 
    }

    .links {
      justify-content: left;
    }
  }
`

const Card = () => (
  <CardStyled>
    <div className="card-column">
      <ProfileImage alt="profile_image" />
    </div>
    <div className="card-column card-right">
      <h1>Josh Unwin</h1>
      <h3>FULL STACK DEVELOPER</h3>
      <p>Making stuff for things.</p>
      <div className="links">
        <Button text="Say hi &nbsp;&#128075" link="/contact" />
        <a href="http://www.github.com/josh-unwin" target="_blank" className="icon"><FontAwesomeIcon icon={['fab', 'github']} /></a>
        <a href="https://www.linkedin.com/in/josh-unwin-a4735637/" target="_blank" className="icon"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
      </div>
    </div>
  </CardStyled>
)

export default Card
