import React from 'react'
import Img from "gatsby-image"
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectItem = (props) => {
  return (
    <div className="">
      <span className="text-xl text-bold tracking-wide">{props.project.frontmatter.title}</span>
      <a href={props.project.frontmatter.url} target="_blank">
        <div className="w-full h-56 object-cover">
          <Img style={{width: '100%', height: '100%'}} imgStyle={{ objectFit: 'cover' }} fluid={props.project.frontmatter.image.childImageSharp.fluid} />
        </div>
      </a>
      <div className="flex w-full my-2">
        <span className="flex-grow text-center">
          {props.project.frontmatter.url ? 
            <a className="cursor-pointer hover-link" href={props.project.frontmatter.url} target="_blank"><FaExternalLinkAlt className="inline mb-1" /> View project</a>
            :
            <span><FaExternalLinkAlt className="inline mb-1" /> Work in progress</span>
          }
        </span>
        <span className="flex-grow text-center">
          {props.project.frontmatter.repo ?
            <a className="cursor-pointer hover-link" href={props.project.frontmatter.repo} target="_blank"><FaGithub className="inline mb-1" /> Git repo</a>
            :
            <span><FaGithub className="inline mb-1" /> Coming soon</span>
          }
        </span>
      </div>
      <hr className="border-gray-500 opacity-50" />
      <p><span className="text-blue-500">Contribution: </span>{props.project.frontmatter?.contribution}</p>
      <p><span className="text-blue-500">Key Technologies: </span>{props.project.frontmatter?.technologies?.join(", ")}</p>
      <div className="text-sm" dangerouslySetInnerHTML={{ __html: props.project.html }} />
    </div>
  )
}

export default ProjectItem