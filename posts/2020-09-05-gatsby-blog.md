---
date: 2020-09-05 01:00:23
title: Blog Feito com Gatsby
description: esse é um blog desenvolvido com gatsby 100% javascript.
category: JS
background: "#bf58a9"
---

# Esse é um blog PWA Com React, Graphql e Netlify , Algolia , Disqus

-veja os plugins usados abaixo

```jsx
  "dependencies": {
    "dotenv": "^8.1.0",
    "gatsby": "^2.13.50",
    "gatsby-image": "^2.2.8",
    "gatsby-plugin-algolia-search": "^0.5.7",
    "gatsby-plugin-manifest": "^2.2.4",
    "gatsby-plugin-netlify-cms": "^4.1.9",
    "gatsby-plugin-offline": "^2.2.4",
    "gatsby-plugin-react-helmet": "^3.1.3",
    "gatsby-plugin-sharp": "^2.2.9",
    "gatsby-plugin-sitemap": "^2.2.8",
    "gatsby-plugin-styled-components": "^3.1.2",
    "gatsby-plugin-transition-link": "^1.12.4",
    "gatsby-remark-images": "^3.1.12",
    "gatsby-remark-lazy-load": "^1.0.1",
    "gatsby-remark-prismjs": "^3.3.5",
    "gatsby-remark-relative-images": "^0.2.3",
    "gatsby-source-filesystem": "^2.1.8",
    "gatsby-transformer-remark": "^2.6.14",
    "gatsby-transformer-sharp": "^2.2.5",
    "gsap": "^2.1.3",
    "lazysizes": "^5.2.1",
    "netlify-cms-app": "^2.9.7",
    "prismjs": "^1.21.0",
    "prop-types": "^15.7.2",
    "react": "^16.8.6",
    "react-disqus-comments": "^1.4.0",
    "react-dom": "^16.8.6",
    "react-helmet": "^5.2.1",
    "react-instantsearch-dom": "^5.7.0",
    "styled-components": "^4.4.1",
    "styled-icons": "^10.19.0",
    "styled-media-query": "^2.1.2"
```
## Oque é Gatsby ? Graphql ? Algolia? Netlify ?
![gatsbygitnet](/assets/img/gatsbygitnet.png)

## Oque é Gatsby ? 
A maneira moderna de construir a web
Gatsby é uma estrutura de código aberto baseada no React para a criação de sites e aplicativos.
Construa qualquer coisa que você possa imaginar com mais de 2.000 plug-ins e desempenho, escalabilidade e segurança integrados por padrão.
Resumindo podemos enviar o projeto desenvolvido no gatsby para o repositorio do github e pelo netlify sincronizamos a conta com o github,
o netlify vai subir a o site pegando o projeto pelo github e cada commit realizado no projeto pelo github o netlify faz o deploy automaticamente 
site oficial : https://www.gatsbyjs.org/


## Oque é Graphql ?
Uma linguagem de consulta para sua API
GraphQL é uma linguagem de consulta para APIs e um tempo de execução para atender a essas consultas com seus dados existentes.
GraphQL fornece uma descrição completa e compreensível dos dados em sua API, dá aos clientes o poder de pedir exatamente o que precisam e nada mais, torna mais fácil evoluir APIs ao longo do tempo e permite ferramentas poderosas de desenvolvedor.
- site oficial : https://graphql.org/


## Oque é Algolia ?
- " Algolia é um mecanismo de pesquisa hospedado, que oferece pesquisa em texto completo, numérica e facetada, capaz de fornecer resultados em tempo real desde o primeiro toque de tecla. A poderosa API do Algolia permite que você implemente de forma rápida e perfeita a pesquisa em seus sites e aplicativos móveis.
Nossa API de pesquisa alimenta bilhões de consultas para milhares de empresas todos os meses, entregando resultados relevantes em menos de 100 ms em qualquer lugar do mundo."
https://www.algolia.com/doc/
instalação : https://www.algolia.com/doc/guides/building-search-ui/installation/react/

## Oque é Netlify ?
   Gerenciamento de conteúdo de código aberto para seu fluxo de trabalho Git , Use o Netlify CMS com qualquer gerador de site estático para um projeto da web mais rápido e flexível.  Obtenha a velocidade, segurança e escalabilidade de um site estático, enquanto ainda fornece uma interface de edição conveniente para o conteúdo . O conteúdo é armazenado em seu repositório Git junto com seu código para facilitar o controle de versão, publicação multicanal e a opção de lidar com atualizações de conteúdo diretamente no Git.Um CMS extensível baseado no React . O Netlify CMS foi desenvolvido como um aplicativo React de página única.
   Crie visualizações com estilo personalizado, widgets de IU e plug-ins de editor ou adicione back-ends para oferecer suporte a diferentes APIs da plataforma Git.
- https://www.netlifycms.org/
- https://app.netlify.com/ 


## Oque é Disqus
  Sistemas de comentários é com
  Disqus ele é  O plug-in de comentários favorito da Internet , torna mais fácil para os editores dar vida a seu conteúdo, fomentar discussões interessantes, moderar comentários de maneira eficiente e criar comunidades engajadas.
  https://disqus.com/



## Media-query
```jsx
"styled-media-query": "^2.1.2"
```
- Media queries são utilizadas para ajustar o css da pagina para qualquer tamanho de tela, celulares ou monitores 
> Documentações : https://www.npmjs.com/package/styled-media-query

```jsx
 import media from "styled-media-query"

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`
```

### React.JS
O React (também denominado React.js ou ReactJS) é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (frontend) em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.

Em 2015, o Facebook anunciou o módulo React Native, que em conjunto com o React, possibilita o desenvolvimento de aplicativos para Android e iOS utilizando componentes de interface de usuário nativos de ambas plataformas, sem precisar recorrer ao HTML.

Na pesquisa de 2018 sobre hábitos de desenvolvedores do site Stack Overflow, o React foi a terceira biblioteca ou framework mais citado pelos usuários e desenvolvedores profissionais, ficando atrás somente do Node.js e Angular, respectivamente.
![react](/assets/img/react.png)

#### Links com todas documentações de toda stack utilizada
- Styled Components:    https://styled-components.com/
- Styled Icons:  https://styled-icons.js.org/
- https://styled-components.com/docs/basics
- Markdown Para postagens : https://guides.github.com/features/mastering-markdown/  
  https://daringfireball.net/projects/markdown/
#### Toda documentação do gatsby:
- https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/
- https://www.gatsbyjs.com/docs/node-apis/#onCreateNode
- https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/
- https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
- https://www.gatsbyjs.com/docs/working-with-gifs/
- https://www.gatsbyjs.com/docs/gatsby-on-linux/#ubuntu-debian-and-other-apt-based-distros
- https://www.gatsbyjs.com/docs/node-apis/
- https://www.gatsbyjs.com/docs/node-apis/#onCreateNode
- https://www.gatsbyjs.com/docs/node-apis/#createPages
- https://www.gatsbyjs.com/docs/use-static-query/
- https://www.gatsbyjs.com/plugins/gatsby-remark-lazy-load/
- https://github.com/gatsbyjs/gatsby-starter-hello-world
- https://www.gatsbyjs.com/plugins/gatsby-remark-images/
- https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/ 
- https://www.gatsbyjs.com/starters/?v=2
- https://www.gatsbyjs.com/plugins/gatsby-plugin-algolia-search/
- https://www.gatsbyjs.com/docs/custom-html/
# Prism
Prism é usadado para highlights , efeitos visuais nos textos markdown , ele da um plano de fundo diferenciado para os textos de programadores que usam blogs como eu e quer postar os codigos no blog
O Prism é um realce de sintaxe leve e extensível, desenvolvido com os padrões da web modernos em mente.
Ele é usado em milhares de sites, incluindo alguns daqueles que você visita diariamente.
- https://prismjs.com/

#### Light Mode , Dark Mode
- https://markoskon.com/dark-mode-in-react/

----------------------
obs : nesse projeto nao usei Contentful , em outros posts irei falar sobre ele .
