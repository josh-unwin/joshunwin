import React from "react"
import styled from 'styled-components'
import { FaAdjust } from 'react-icons/fa'

const LightSwitchStyled = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 35px;
  cursor: pointer;
  z-index: 1;
`

const LightSwitch = (props) => {
  function handleClick() {
    props.setSelectedTheme(props.selectedTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <LightSwitchStyled className="hover-link"><FaAdjust  onClick={handleClick}/></LightSwitchStyled>
  )
}

export default LightSwitch
