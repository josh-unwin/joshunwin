import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import BlogLayout from '../components/BlogLayout';
import { FaRegClock, FaRegCalendar } from 'react-icons/fa';

const Blog = ({data}) => (
  <BlogLayout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id} className="mb-10">
        <Link to={node.frontmatter.path} className="text-body-gray flex">
          <div className="w-48 pt-2">
            <Img className="" fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.title} />
          </div>
          <div className="ml-4">
            <h2>
              {node.frontmatter.title}
            </h2>
            <span className="flex items-center text-xs text-gray-600"><FaRegCalendar className="mr-1" /> {node.frontmatter.date} <FaRegClock className="ml-4 mr-1" /> {node.timeToRead} minute read</span>
            <p className="text-sm text-gray-800">
              {node.excerpt}
            </p>
          </div>
        </Link>
      </div>
    ))}
  </BlogLayout>
)

export const blogsQuery = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(blog)/.*.md$/"}},
    sort: { fields: [frontmatter___date], order: DESC }
    ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          path
          date(formatString: "DD MMMM, YYYY")
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