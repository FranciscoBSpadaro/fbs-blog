import React from "react"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {               // conteudo dos posts , e na parte do dangeroushtml é uma forma de dizer que vai entrar uma html supostamente insegura , ele substitui um document.innerHTML
  const post = data.markdownRemark

  return (
    <> 
      <h1>Title: {post.frontmatter.title}</h1>                             
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>        
    </>
  )
}
// varivel criada apartir do graphql , print na pasta do projeto
export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default BlogPost