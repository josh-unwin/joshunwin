import React from "react"
import styled from 'styled-components'
import device from '../functions/device'

const SecondaryCardStyled = styled.div`
  position: absolute;
  width: 520px;
  height: 300px;
  background-color: ${({ theme }) => theme.cardBkg};
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  border-radius: 7px;
  box-shadow: 3px 3px 15px rgba(0,0,0,0.2);
  justify-content: center;
  transition: transform 0.5s ease, width 0.5s ease, height 0.5s ease, background-color 1s ease;

  &:hover {
      box-shadow: 5px 5px 8px rgba(0,0,0,0.4);
  }

  ${props => props.position2 ?  
    'transform: translate(0, 0) rotate(3deg); z-index: 2;' 
    : ''}

  ${props => props.position3 ?  
    'transform: translate(0, 0) rotate(6deg); z-index: 1;' 
    : ''}

  @media ${device.mobileS} {
    width: 300px;
    height: 520px;
  }

  @media ${device.tablet} {
    width: 520px;
    height: 300px;
  }
`

const SecondaryCard = (props) => {
  const { position2, position3 } = props;

  return (
    <SecondaryCardStyled position2={position2} position3={position3}>

    </SecondaryCardStyled>
  )
}

export default SecondaryCard
