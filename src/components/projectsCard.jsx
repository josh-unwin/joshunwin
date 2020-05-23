import React, { useEffect } from "react"
import styled from 'styled-components'
import device from '../functions/device'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import BackButton from '../components/backButton'

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
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
          <h2 className="text-3xl my-8">Coding Projects</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 pb-8">
            {projects.map(project => {
              return (
                <div className="">
                  <span className="text-xl text-bold tracking-wide">{project.node.frontmatter.title}</span>
                  <a href={project.node.frontmatter.url} target="_blank">
                    <div className="w-full h-56 object-cover">
                      <Img style={{width: '100%', height: '100%'}} imgStyle={{ objectFit: 'cover' }} fluid={project.node.frontmatter.image.childImageSharp.fluid} />
                    </div>
                  </a>
                  <div className="flex w-full my-2">
                    <span className="flex-grow text-center">
                      <a className="cursor-pointer hover-link" href={project.node.frontmatter.url} target="_blank"><FaExternalLinkAlt className="inline mb-1" /> View project</a>
                    </span>
                    <span className="flex-grow text-center">
                      <a className="cursor-pointer hover-link" href={project.node.frontmatter.repo} target="_blank"><FaGithub className="inline mb-1" /> Git repo</a>
                    </span>
                  </div>
                  <hr />
                  <p><span className="text-blue-500">Contribution: </span>{project.node.frontmatter?.contribution}</p>
                  <p><span className="text-blue-500">Key Technologies: </span>{project.node.frontmatter?.technologies?.join(", ")}</p>
                  <div className="text-sm" dangerouslySetInnerHTML={{ __html: project.node.html }} /></div>
              )
            })}
          </div>
        </div>
      </div>
    </ProjectsCardStyled>
  )
}

export default ProjectsCard
