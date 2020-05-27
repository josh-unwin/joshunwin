import '../styles/tailwind.css'
import '../styles/global.scss'
import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, colorTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import LightSwitch from "./lightSwitch"
import { useLocation } from '@reach/router';
import queryString from 'query-string';

const Container = styled.div`
  margin: 0;

  main {
    height: 100%;
  }
`

const Layout = ({ children }) => {
  library.add(fab, faEnvelope);

  const urlQueries = queryString.parse(useLocation().search);
  const themes = ["light", "dark", "color"];
  const themesMap = {
    "light": lightTheme,
    "dark": darkTheme,
    "color": colorTheme
  };

  let initialTheme;

  if (urlQueries.theme) {
    initialTheme = urlQueries.theme
  } else {
    initialTheme = themes[Math.floor(Math.random() * themes.length)]
  }

  const [selectedTheme, setSelectedTheme] = useState(initialTheme);
  
  return (
    <ThemeProvider theme={themesMap[selectedTheme]}>
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
