import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import catsGIF from "../pages/cats.gif"
import fbsdevPNG from "../pages/fbsdev.png"
import * as S from "../components/Post/styled"


const AboutPage = () => (

<Layout>
<Seo title="Sobre Mim" />
<S.PostHeader>
</S.PostHeader>
  <S.MainContent>
  <h1>Sobre mim</h1>
<h2><img src={catsGIF} width="250" height="250" alt="funcionarios" ></img></h2>
<p>Olá muito prazer, me chamo Francisco Bianchi Spadaro.<span role="img" aria-label="handet">🖖🏽</span>
<br/> Estou cursando Análise e Desenvolvimento de Sistemas pela faculdade Anhanguera e estou nos cursos de Programação oferecidos por  Dev Samurai, Rockeseat, udemy, etc.
<br/> Meu foco é dominar o JavaScript e com isso dominar o ReactJs, React Native e tambem atuar como DevOps nas plataformas de Cloud.
<br/> Busco sempre melhorar como pessoa e profissional e assim melhorar o mundo e as pessoas ao meu redor<span role="img" aria-label="laptop">💻</span> <span role="img" aria-label="hearb">🌎</span>
<br/> <span role="img" aria-label="rocket">🚀</span>Atualmente estou desempregado mas planejo atuar como freelancer , programador ou DevOps
<br/> <span role="img" aria-label="laptop">💻</span> <span role="img" aria-label="hearb">💙</span>  Busco colaborar em projetos tanto no Front-end quanto no Back-end usando ReactJs, React Native e NodeJs.
<br/> Posso tentar te ajudar com HTML,CSS, Javascript,  ReactJs, React Native e NodeJs.
<br/> <span role="img" aria-label="laptop">💻</span> Minhas stacks favoritas: React Native, ReactJs e NodeJs. (JavaScript) Python.
<br/> <span role="img" aria-label="sound">🎵</span> <span role="img" aria-label="tree">🎄</span>  Atividades: Curto praia , natureza , músicas e filmes/seriados em geral.
<br/> Mas oque eu mais faço é estudar , estou totalmente engajado e focado nisso.
<br/> Sou questionador e de mente empreendedora , não gosto de comodismo e sempre quero mudar e evoluir para o melhor.
<br/> Busco me preparar para a Quarta Revolução industrial.
<br/> <span role="img" aria-label="ipod">📟</span>  Entre em contato comigo Click no logotipo abaixo</p>
<h2><Link to="https://fbsdev.netlify.app/"> <img src={fbsdevPNG} alt="FBS-DEV"></img> </Link></h2>
</S.MainContent>
  </Layout>

)
export default AboutPage
