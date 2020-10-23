const path = require(`path`)
const _ = require("lodash")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("src/templates/BlogPost.jsx")
  const blogTemplate = path.resolve("src/templates/Blog.jsx")

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(blog)/.*.md$/"}}
      ) {
        edges {
          node {
            frontmatter {
              path
              categories
            }
          }
        }
      }
      categories: allMarkdownRemark {
        distinct(field: frontmatter___categories)
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }

  const posts = result.data.postsRemark.edges

  posts.forEach(({ node }) => {
    if (node.frontmatter.path != null) {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/BlogPost.jsx`),
      })  
    }
  })
  
  const categories = result.data.categories.distinct;

  createPage({
    path: "/blog",
    component: blogTemplate,
    context: {
      category: categories
    }
  })
  
  categories.forEach(category => {
    createPage({
      path: `/blog/${category.toLowerCase().replace(" ", "-")}/`,
      component: blogTemplate,
      context: {
        category: [category],
      },
    })
  })
}