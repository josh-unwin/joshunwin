import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import BlogLayout from '../components/BlogLayout';
import BlogFilterControls from '../components/BlogFilterControls';
import { FaRegClock, FaRegCalendar } from 'react-icons/fa';

const Blog = ({data, location}) => {
  const [sortByMethod, setSortByMethod] = useState("date_asc");
  
  return (
    <BlogLayout>
      <BlogFilterControls location={location} sortByMethod={sortByMethod} setSortByMethod={setSortByMethod} />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className="mb-10 flex">
          <Link to={node.frontmatter.path} className="text-body-gray flex">
            <div className="sm:w-48 pt-2">
              <Img className="" fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.title} />
            </div>
          </Link>
            <div className="sm:ml-4">
            <Link to={node.frontmatter.path} className="text-body-gray flex">
            <div className="w-24 mr-2 sm:mr-0 sm:w-0 pt-2">
                <Img className="" fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.title} />
              </div>
              <h2>{node.frontmatter.title}</h2>
            </Link>
              <div className="flex flex-col lg:flex-row text-xs text-gray-600">
                <span className="flex items-center">
                  <FaRegCalendar className="mr-1" />{node.frontmatter.date}
                  <FaRegClock className="ml-4 mr-1" />{node.timeToRead} minute read
                </span>
                <div className="ml-0 lg:ml-2">
                  {node.frontmatter.categories.map((category) => (
                    <span key={category} className="mr-2 bg-gray-500 text-white rounded px-1 w-auto inline-block">{category}</span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-800">
                {node.excerpt}
              </p>
            </div>
        </div>
      ))}
    </BlogLayout>
  )
}

export const blogsQuery = graphql`
query($category: [String]) {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(blog)/.*.md$/"}, frontmatter: {categories: {in: $category}}},
    sort: { fields: [frontmatter___date], order: DESC }
    ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          subtitle
          path
          date(formatString: "DD MMMM, YYYY")
          categories
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
        timeToRead
      }
    }
  }
}
`

export default Blog