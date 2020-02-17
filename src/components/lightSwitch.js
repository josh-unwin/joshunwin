import React from "react"
import styled from 'styled-components'
import { FaLightbulb } from 'react-icons/fa'

const LightSwitchStyled = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 35px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    color: #a8c1e8;
  }
`

const LightSwitch = (props) => {
  function handleClick() {
    console.log('clicked');
    props.setSelectedTheme(props.selectedTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <LightSwitchStyled><FaLightbulb  onClick={handleClick}/></LightSwitchStyled>
  )
}

export default LightSwitch
