import React from "react";
import { graphql } from "gatsby";
import BlogLayout from '../components/BlogLayout';
import styled from 'styled-components';
import { FaRegClock, FaRegCalendar } from 'react-icons/fa';
import Img from "gatsby-image";


const BlogPostStyle = styled.div`
h2 {
  margin-top: 2em;
  margin-bottom: 0.2em;
};

ul {
  list-style-position: outside;
  list-style-type: square;

  li {
    margin-bottom: 0.4em;
  }
}
`

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, timeToRead } = markdownRemark;
  return (
    <BlogLayout>
      <BlogPostStyle className="blog-post mt-8 mb-12 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl">{frontmatter.title}</h1>
          <h3 className="mb-0 flex items-center justify-center text-gray-600"><FaRegCalendar className="mr-2" /> {frontmatter.date} <FaRegClock className="ml-10 mr-2 " /> {timeToRead} minute read</h3>
          {frontmatter.categories.map((category) => (
            <span className="ml-2 bg-gray-500 text-white rounded px-1 text-xs">{category}</span>
          ))}
        </div>
        <Img className="" fluid={frontmatter.image.childImageSharp.fluid} alt={frontmatter.title} />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </BlogPostStyle>
    </BlogLayout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        categories
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
    }
  }
`