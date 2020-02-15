import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import ProfileImage from "./profileImage"
import Button from "./button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardStyled = styled.div`
  position: absolute;
  width: 520px;
  height: 300px;
  background-color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  border-radius: 7px;
  box-shadow: 5px 5px 14px rgba(0,0,0,0.2);
  justify-content: center;
  z-index: 3;

  &:hover {
      box-shadow: 5px 5px 8px rgba(0,0,0,0.4);
  }

  .card-column {
    margin-right: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .card-right {
    text-align: left;
  }

  .profile-card {
    width: 520px;
    height: 300px;
  }

  .contact-card {
    width: 800px;
    height: 500px;
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
        <Button text="Reach out" link="/contact" />
        <a href="http://www.github.com/josh-unwin" target="_blank" className="icon"><FontAwesomeIcon icon={['fab', 'github']} /></a>
        <a href="https://www.linkedin.com/in/josh-unwin-a4735637/" target="_blank" className="icon"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
      </div>
    </div>
  </CardStyled>
)

export default Card
