const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    // Ensures we are processing only markdown files
    if (node.internal.type === "MarkdownRemark") {
      // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
      const slug = createFilePath({
        node,
        getNode,
        basePath: "pages",
      })
  
      // Creates new query'able field with name of 'slug'
      createNodeField({
        node,
        name: "slug",
        value: `/${slug.slice(12)}`,
      })
    }
  }

  // To create the posts pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
            timeToRead
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,                               // busca no graphql para dar o contexto de prox post e post anterior
          previousPost: next,
          nextPost: previous,       
        },
      })
    })
    
const postsPerPage = 7                                           // cada pagina com 6 posts
    const numPages = Math.ceil(posts.length / postsPerPage)   // Math.ceil arredonda o numero para inteiro,ex 10post.length / 6 = 1.6 o ceil converte para = 2 = pag2 

    Array.from({ length: numPages }).forEach((_, index) => {   // cria array com numero de paginas , e para cada pagina vai ser um index no array
      createPage({                                             // cria pagina
        path: index === 0 ? `/` : `/page/${index + 1}`,       // endereço :  se index for 0 a pagina é / ou seja =  home , se o index for 0+1  entao é a  pagina '2'
        component: path.resolve(`./src/templates/blog-list.js`),      // component gerado para cada index  o blog-list.js pagina principal que é a nova index
        context: {                                    // passa os dados como variaveis para o graphql
          limit: postsPerPage,                       // 6 posts por pagina (skip 0)  page2 (skip6)  page3 (skip12)...
          skip: index * postsPerPage,               //   index1 * 6  = + uma index      ou 12x12 = pag 3
          numPages,
          currentPage: index + 1,                   // pagina atual + 1 pagina
        },
      })
    })
  })
}