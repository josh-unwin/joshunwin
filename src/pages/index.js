import React, { useState } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import SecondaryCard from "../components/secondaryCard"
import Tag from "../components/tag"
import { connect } from "react-redux"
import { faStepBackward } from "@fortawesome/free-solid-svg-icons"

const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  perspective: 600px;
`

const IndexPage = () => {
  const [background, setBackground] = useState("#FF9D7A");

  return (
    <Layout>
      <SEO title="Home" />
      <Home style={{background: background}}>
        <Card style={{position: 'absolute'}} setBackground={setBackground} />
        <SecondaryCard style={{position: 'absolute'}} position2 />
        <SecondaryCard style={{position: 'absolute'}} position3 />
        <Tag />
      </Home>
      {/* <Home style={{background: "#9DD2E2"}}>

      </Home> */}
    </Layout>
  )
}

function mapStateToProps(reduxState, ownProps) {
  const backgroundColor = reduxState.backgroundColor
  return { backgroundColor };
}

export default (IndexPage)
