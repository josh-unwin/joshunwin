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
    font-family: 'Open Sans', sans-serif;
    margin-right: 10px;

  &:hover {
    background-color: rgb(100,200,240)
  }

  &:active {
    background-color: rgb(60,160,200)
  }
`

const Button = (props) => (
  <ButtonStyled href={props.link}>{props.text}</ButtonStyled>
)

export default Button
