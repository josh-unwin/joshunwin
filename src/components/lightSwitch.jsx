import React from "react"
import styled from 'styled-components'
import { FaAdjust, FaPalette, FaSun, FaMoon } from 'react-icons/fa'

const LightSwitchStyled = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 35px;
  cursor: pointer;
  z-index: 1;
`

const LightSwitch = (props) => {
  function handleClick(themeSelection) {
    props.setSelectedTheme(themeSelection)
  }

  return (
    <LightSwitchStyled className="group">
        <FaAdjust className="hover-link"/>
        <div className="flex-col items-center hidden group-hover:flex">
          <FaSun className="hover-link text-2xl mt-3" onClick={() => {handleClick("light")}}/>
          <FaMoon className="hover-link text-2xl mt-3" onClick={() => {handleClick("dark")}}/>
          <FaPalette className="hover-link text-2xl mt-3" onClick={() => {handleClick("color")}}/>
        </div>
    </LightSwitchStyled>
  )
}

export default LightSwitch
