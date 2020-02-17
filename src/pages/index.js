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
  transition: background-color 1s ease;

  .orange-bkg {
    background-color: #FF9D7A;
  }
  
  .purple-bkg {
    background-color: #70D6FF;
  }
`

const IndexPage = () => {
  const [backgroundSelection, setBackgroundSelection] = useState(0);

  return (
    <Layout>
      <SEO title="Home" />
      <Home className={backgroundSelection === 0 ? 'orange-bkg' : 'purple-bkg'}>
        <Card style={{position: 'absolute'}} setBackgroundSelection={setBackgroundSelection} backgroundSelection={backgroundSelection} />
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
