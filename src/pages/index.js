import React, { useState } from "react"
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
  perspective: 600px;
  transition: background-color 1s ease;
`

const IndexPage = (props) => {
  console.log(props);
  const [backgroundSelection, setBackgroundSelection] = useState(0);

  return (
    <Layout>
      <SEO title="Home" />
      <Home className={backgroundSelection === 0 ? 'bkg-color1' : 'bkg-color2'}>
        <Card style={{position: 'absolute'}} setBackgroundSelection={setBackgroundSelection} backgroundSelection={backgroundSelection} />
        <SecondaryCard style={{position: 'absolute'}} position2 />
        <SecondaryCard style={{position: 'absolute'}} position3 />
        <Tag />
      </Home>
    </Layout>
  )
}

export default (IndexPage)
