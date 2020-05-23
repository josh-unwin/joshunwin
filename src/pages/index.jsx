import React, { useState } from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import SecondaryCard from "../components/secondaryCard"
import ButtonsContainer from "../components/buttonsContainer"
import ProjectsCard from "../components/projectsCard"
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
  const [backgroundSelection, setBackgroundSelection] = useState(0);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <Layout>
      <SEO title="Josh Unwin" />
      <Home className={backgroundSelection === 0 ? 'bkg-color1' : 'bkg-color2'}>
          <Card style={{position: 'absolute'}} setBackgroundSelection={setBackgroundSelection} backgroundSelection={backgroundSelection} />
          <ProjectsCard isProjectsOpen={isProjectsOpen} setIsProjectsOpen={setIsProjectsOpen} style={{position: 'absolute'}} position2 />
          <SecondaryCard style={{position: 'absolute'}} position3 />
          <ButtonsContainer isProjectsOpen={isProjectsOpen} setIsProjectsOpen={setIsProjectsOpen}/>
        <Tag />
      </Home>
    </Layout>
  )
}

export default (IndexPage)
