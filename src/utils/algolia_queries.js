const postQuery = `{
    posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }){
      edges {
        node {
          objectID: id
          fields {
            slug
          }
          frontmatter {
            title
            category
            date_timestamp: date
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`
  
  const flatten = arr =>
    arr.map(({ node: { frontmatter, ...rest } }) => ({
      ...frontmatter,
      date_timestamp: parseInt(
        (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
      ),
      ...rest,
    }))
  const settings = { attributesToSnippet: [`excerpt:20`] }
  
  const queries = [
    {
      query: postQuery,
      transformer: ({ data }) => flatten(data.posts.edges),
      indexName: `Posts`,
      settings,
    },
  ]
  
  module.exports = queries              // export do node usa o termo module



  // object id é um item necessario para o algolia para identificar os postas . no caso so temos id
  //excerpt é um resumo e (pruneLength: 5000) é maximo de caracteres é util para nao ter uma carga alta de dados na busca
  //indexName: `Posts`, é o nome do index no algolia
  // const settings = { attributesToSnippet: [`excerpt:20`] serve para que o algolia separe de 20 em 20 dentro do excerpt
  // transformer transforma o dados para o algolia
  // const flatten = arr => metodo que recebe um array com map e pega os dados do objeto {} ...rest , rest operator com 3 pontos pega td que sobra do objeto , e retorna todo o frontmatter
  //date_timestamp é necessario para o algolia pois o formato padrado de dia mes ano do graphql n serve para ele , ele é parseado para numeros divide por 1000ms para segundos
  //  transformer: ({ data }) => flatten(data.posts.edges), , metodo flateen deixa tudo linear pega data é tudo e posts e edges é a query