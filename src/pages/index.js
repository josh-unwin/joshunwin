import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import SecondaryCard from "../components/secondaryCard"
import Tag from "../components/tag"

const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home style={{background: "#FF9D7A"}}>
      <Card style={{position: 'absolute'}} />
      <SecondaryCard style={{position: 'absolute'}} position2 />
      <SecondaryCard style={{position: 'absolute'}} position3 />
      <Tag />
    </Home>
    <Home style={{background: "#9DD2E2"}}>

    </Home>
  </Layout>
)

export default IndexPage
