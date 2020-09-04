module.exports = {
  siteMetadata: {
    title: `Francisco Bianchi Spadaro`,
    description: `Blog com meus projetos,Novidades Tecnologicas,DevOps e Serviços`,
    position:`©FBS-DEV`,
    author:`@franciscobspadaro`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
        // needs to be the first to work with gatsby-remark-images
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `uploads`,
            path: `${__dirname}/static/assets/img`,
          },
        },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",            // abriu o objeto e gerou o parametros ao plugin que serve para acha os arquivos que nao estao na msm pasta do post
            options: {
              name: "uploads",                               // uploads que consta no resolve: `gatsby-source-filesystem`, acima
            },
          },
          {
            resolve: "gatsby-remark-images",                // o resolve entao gera parametros de config aos plugins
            options: {                                        // existe varias options na documentacao desse plugin no gatsby docs
              maxWidth: 960,                                // tamanho maximo da img
              linkImagesToOriginal: false,                     // o remark img colaca toda img como link externo por padrao, nao queremos isso e colocamos falso
            },
          },
          `gatsby-remark-lazy-load`,    // lazyload é declarado mas nao precisa de configs apenas é importado no gatsby browser
          `gatsby-remark-prismjs`,                    
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo1.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
