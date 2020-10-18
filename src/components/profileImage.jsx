import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ProfileImage = ({size}) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "profile-photo.png" }) {
        small: childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
        medium: childImageSharp {
          fixed(width: 180) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  let imageSize = data.image.medium.fixed;
  if (size === "small") imageSize = data.image.small.fixed; 

  return <Img className="circular" fixed={imageSize} />
}

export default ProfileImage
