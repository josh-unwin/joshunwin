import React from "react"
import styled from 'styled-components'
import device from '../functions/device'

const SecondaryCardStyled = styled.div`
  position: absolute;
  
  .secondary-card-contents {
    width: 520px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    border-radius: 7px;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.2);
    justify-content: center;
    transition: transform 0.5s ease, width 0.5s ease, height 0.5s ease, background-color 1s ease;
    transform: translate(0, 0) rotate(6deg); z-index: 1;

    &:hover {
        box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
    }

    @media ${device.mobileS} {
      width: 300px;
      height: 520px;
    }

    @media ${device.tablet} {
      width: 520px;
      height: 300px;
    }
  }
`

const SecondaryCard = () => {
  return (
    <SecondaryCardStyled>
      <div className="secondary-card-contents">

      </div>
    </SecondaryCardStyled>
  )
}

export default SecondaryCard
