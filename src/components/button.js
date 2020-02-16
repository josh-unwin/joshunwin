import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const ButtonStyled = styled.a`
    text-decoration: none;
    width: fit-content;
    color: white;
    background-color: #70D6FF;
    border-radius: 3px;
    padding: 6px 12px;
    border: 0;
    font-size: 16px;
    margin-right: 10px;
    cursor: pointer;

  &:hover {
    background-color: rgb(100,200,240);
    color: white;
  }

  &:active {
    background-color: rgb(60,160,200)
  }
`

const Button = (props) => {
  function handleClick() {
    console.log('clicked button');
    props.flipCard()
  }

  return (
    <ButtonStyled dangerouslySetInnerHTML={{ __html: props.text}} onClick={handleClick}></ButtonStyled>
  )
}

export default Button
