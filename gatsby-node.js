const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(blog)/.*.md$/"}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.path != null) {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/BlogPost.jsx`),
      })  
    }
  })
}