import React, { useEffect } from "react"
import styled from 'styled-components'
import device from '../functions/device'
import { useStaticQuery, graphql } from "gatsby"
import BackButton from '../components/backButton'
import ProjectItem from "./projectItem"

const ProjectsCardStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .projects-card-content {
    display: none;
  }

  .projects-card {
    position: absolute;
    width: 520px;
    height: 300px;
    background-color: ${({ theme }) => theme.cardBkg};
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    border-radius: 7px;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.2);
    justify-content: center;
    transition: transform 0.5s ease, width 0.5s ease, height 0.5s ease, background-color 1s ease;
    transform: translate(0, 0) rotate(3deg); 
    z-index: 2;
    overflow: scroll;

    ::-webkit-scrollbar { 
        display: none;
    }

    &:hover {
        box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
    }
    
    @media ${device.mobileS} {
      width: 300px;
      height: 520px;
    }
  
    @media ${device.tablet} {
      width: 520px;
      height: 300px;
    }
  }

  .expanded-card {
    transform: translate(0, 0) rotate(0deg); z-index: 5;
    width: 90%;
    height: 90%;

    .projects-card-content {
      display: block;
    }
  }
`

const ProjectsCard = (props) => {
  const projectsData = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            html
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              technologies
              contribution
              url
              repo
              image {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = projectsData.allMarkdownRemark.edges;

  return (
    <ProjectsCardStyled>
      <div className={`projects-card py-4 px-3 sm:px-24 ${props.isProjectsOpen ? "expanded-card" : ""}`}>
        <div className="projects-card-content">
          <BackButton action={() => {props.setIsProjectsOpen(false)}} />
          <div className="my-8">
            <h2 className="text-3xl">Coding Projects</h2>
            <p>Looking for a full CV? Please don't hesitate to get in touch via the "Say Hi" button, LinkedIn or otherwise.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 pb-8">
            {projects.map(project => {
              return (
                <ProjectItem project={project.node} />
              )
            })}
          </div>
        </div>
      </div>
    </ProjectsCardStyled>
  )
}

export default ProjectsCard
