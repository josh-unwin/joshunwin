import React from 'react'
import styled from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'

const BackButtonDiv = styled.div`
  .back-arrow {
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 12px;
    color: ${({ theme }) => theme.text};
  }
`

const BackButton = (props) => {

  return (
    <BackButtonDiv>
      <FaArrowLeft onClick={props.action} className='back-arrow' />
    </BackButtonDiv>
  )
}

export default BackButton