import '../styles/tailwind.css'
import '../styles/global.scss'
import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import LightSwitch from "./lightSwitch"
import { useEffect } from 'react'



const Container = styled.div`
  margin: 0;

  main {
    height: 100%
  }
`

const Layout = ({ children }) => {
  const themes = ["light", "dark"];
  let randomThemeSelection = '';
  library.add(fab, faEnvelope);
  const [selectedTheme, setSelectedTheme] = useState('light');
  
  useEffect(() => {
    setSelectedTheme(themes[Math.floor(Math.random() * themes.length)]);
  }, []);
  
  return (
    <ThemeProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <LightSwitch setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
