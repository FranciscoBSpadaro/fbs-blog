import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import catsGIF from "../pages/cats.gif"
import fbsdevPNG from "../pages/fbsdev.png"
import * as S from "../components/Post/styled"


const AboutPage = () => (

<Layout> 
<SEO title="Sobre Mim" /> 
<S.PostHeader>
</S.PostHeader>
  <S.MainContent>
  <h1>Sobre mim</h1>
<h1><img src={catsGIF} width="250" height="250" alt="funcionarios" ></img></h1>
<p>Olá muito prazer, me chamo Francisco Bianchi Spadaro.<span role="img" aria-label="handet">🖖🏽</span>
<br/> Estou cursando Análise e Desenvolvimento de Sistemas pela faculdade Anhanguera e estou nos cursos de Programação oferecidos por ' Dev Samurai ' Rockeseat ' udemy ' ' curso em video ' entre outros.
<br/> Meu foco é dominar o JavaScript e com isso dominar o ReactJs, React Native e NodeJs, e tambem atuar como DevOps nas plataformas AWS 'Amazon Web Services '  e IBM CLOUD.
<br/> Busco sempre melhorar como pessoa e profissional e assim melhorar o mundo e as pessoas ao meu redor<span role="img" aria-label="laptop">💻</span> <span role="img" aria-label="hearb">🌎</span> 
<br/> <span role="img" aria-label="rocket">🚀</span>Atualmente estou desempregado mas planejo atuar como freelancer , programador ou DevOps
<br/> <span role="img" aria-label="laptop">💻</span> <span role="img" aria-label="hearb">💙</span>  Busco colaborar em projetos tanto no Front-end quanto no Back-end usando ReactJs, React Native e NodeJs. 
<br/> Posso tentar te ajudar com HTML,CSS, Javascript,  ReactJs, React Native e NodeJs.
<br/> <span role="img" aria-label="laptop">💻</span> Minhas stacks favoritas: React Native, ReactJs e NodeJs. (JavaScript) Python.
<br/> <span role="img" aria-label="sound">🎵</span> <span role="img" aria-label="tree">🎄</span>  Atividades: Curto praia , natureza , músicas e filmes/seriados em geral.
<br/> <span role="img" aria-label="ipod">📟</span>  Entre em contato comigo Click no logotipo abaixo</p> 
<Link to="https://fbsdev.netlify.app/"> <img src={fbsdevPNG} alt="FBS-DEV"></img> </Link>
</S.MainContent>   
  </Layout>

)
export default AboutPage
