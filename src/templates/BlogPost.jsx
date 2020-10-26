import React from "react";
import { graphql } from "gatsby";
import BlogLayout from '../components/BlogLayout';
import styled from 'styled-components';
import { FaRegClock, FaRegCalendar } from 'react-icons/fa';
import Img from "gatsby-image";
import SEO from "../components/seo"

const BlogPostStyle = styled.div`
h2 {
  font-size: 26px;
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

.blog-post-content {
  h4 {
    font-size: 1.3em;
    font-weight: bold;
    letter-spacing: 0.025em;
    margin-bottom: 0;
    margin-top: 2em;
  }

  h5 {
    font-weight: bold;
    letter-spacing: 0.025em;
    margin-bottom: 0;
    margin-top: 2em;
  }

  p, li {
    margin-top: 0;
    font-size: 1em;
    line-height: 2em;
  }

  blockquote {
    font-size: 2em;
    font-style: italic;
    padding: 10px;
  }

  hr {
    margin: 20px 0;
  }
}
`

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, timeToRead, excerpt } = markdownRemark;
  return (
    <BlogLayout>
      <SEO description={excerpt} title={frontmatter.title} image={frontmatter.image.childImageSharp.resize} />
      <BlogPostStyle className="blog-post mt-8 mb-12 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl">{frontmatter.title}</h1>
          <span className="mt-0 text-xl text-gray-600">{frontmatter.subtitle}</span>
          <div className="mt-1 mb-0 flex sm:flex-row flex-col text-gray-600 justify-center">
            <h3 className="mb-1 flex items-center justify-center"><FaRegCalendar className="mr-2" /> {frontmatter.date}</h3>
            <h3 className="mb-1 flex items-center justify-center"><FaRegClock className="sm:ml-10 mr-2 " /> {timeToRead} minute read</h3>
          </div>
          {frontmatter.categories.map((category) => (
            <span className="ml-2 bg-gray-500 text-white rounded px-1 text-xs">{category}</span>
          ))}
        </div>
        <div className="md:border-8 md:p-1 mb-5">
          <Img className="" fluid={frontmatter.image.childImageSharp.fluid} alt={frontmatter.title} />
        </div>
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
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        categories
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
      timeToRead
    }
  }
`