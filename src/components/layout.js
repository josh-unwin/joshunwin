import '../styles/global.scss'
import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' 

const Container = styled.div`
  margin: 0;

  main {
    height: 100%
  }
`

const Layout = ({ children }) => {
  library.add(fab, faEnvelope)

  return (
      <Container>
        <main>{children}</main>
      </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
