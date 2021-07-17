import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

import * as S from "../components/ListWrapper/styled"

const BlogList = props => {                                 // parametros para a tag pagination , pagecontext vem do parametro context criado no gatsbynodes
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1                     // primeira pagina = pagina atual
  const isLast = currentPage === numPages                // ultima pagina = pagina atual = paginal final
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`                // se a pagina atual -1 for = a 1 siginifica que ta na home se nao significa que ela ta na pagecurrente-1
  const nextPage = `/page/${currentPage + 1}`                      // page com currentpage + 1 pq é a prox pagina
                                                                                          // nova pagina principal''index'' baseada no graphql
  return (
    <Layout>
      <SEO title="Home" />
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: { background, category, date, description, title },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostItem
              slug={slug}
              background={background}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
            />
          )
        )}
      </S.ListWrapper>

<Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}
// variavel para o graphl skip = inteiro = var limit = inteiro ,  variaveis declaradas para filtrar a query com funcao skip e limit , prints na pasta
export const query = graphql`                                    
  query PostList($skip: Int!, $limit: Int!) {            
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
      }
    }
  }
`

export default BlogList


// Um Slug é a parte de identificação exclusiva de um endereço da web, normalmente no final da URL