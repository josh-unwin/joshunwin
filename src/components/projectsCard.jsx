import React from "react"
import styled from 'styled-components'
import device from '../functions/device'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaGithub } from 'react-icons/fa'

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

const ProjectsCard = () => {
  const projectsData = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              technologies
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

  function expandCard() {
    const projectsCardDiv = document.querySelector(".projects-card");
    projectsCardDiv.classList.toggle("expanded-card")
  }

  return (
    <ProjectsCardStyled onClick={expandCard}>
      <div className="projects-card px-3 sm:px-24">
        <div className="projects-card-content">
          <h2 className="text-2xl my-8">Coding Projects</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map(project => {
              return (
                <div className="">
                  <span className="text-xl tracking-wide">{project.node.frontmatter.title}</span>
                  <div className="w-full h-48 object-cover">
                    <Img style={{width: '100%', height: '100%'}} imgStyle={{ objectFit: 'cover' }} fluid={project.node.frontmatter.image.childImageSharp.fluid} />
                  </div>
                  <div className="flex w-full my-2">
                    <a className="cursor-pointer flex-grow text-center capitalize" href={project.node.frontmatter.url}><FaGithub className="inline" /> View project</a>
                    <a className="cursor-pointer flex-grow text-center capitalize" href={project.node.frontmatter.repo}>Git repo</a>
                  </div>
                  <hr />
                  <p className="text-blue-500">{project.node.frontmatter?.technologies?.join(", ")}</p>
                  <div dangerouslySetInnerHTML={{ __html: project.node.excerpt }} />

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </ProjectsCardStyled>
  )
}

export default ProjectsCard
