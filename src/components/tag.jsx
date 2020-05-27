import React from "react"
import styled from 'styled-components'

const TagStyled = styled.div`
  position: absolute;
  bottom: 70px;
  right: -24px;
  transform: rotate(90deg);
  font-family: 'Share Tech Mono', monospace;

    .tag-block {
      position: absolute;
      bottom: -5px;
      font-family: 'Share Tech Mono', monospace;
      font-size: 28px;
    }

    .blink_me {
      animation: blinker 1s ease-out infinite;
    }

    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
`

const Tag = (props) => (
  <TagStyled> Hello, World<span className="tag-block blink_me" dangerouslySetInnerHTML={{ __html: '&#9646'}}></span></TagStyled>
)

export default Tag
