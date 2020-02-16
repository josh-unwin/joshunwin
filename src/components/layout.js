/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import '../styles/global.scss'
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import stylesReducer from '../reducers/stylesReducer'
 

const Container = styled.div`
  margin: 0;

  main {
    height: 100%
  }
`

const Layout = ({ children }) => {
  library.add(fab, faEnvelope)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const reducers = combineReducers({
  //   backgroundColor: stylesReducer
  // });

  // const initialState = {
  //   backgroundColor: "#FF9D7A",
  // };

  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(logger)));

  return (
    // <Provider store={store}>
      <Container>
        <main>{children}</main>
      </Container>
    // </Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
