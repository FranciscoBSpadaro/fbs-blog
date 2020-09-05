import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import catsGIF from "../pages/cats.gif"
import fbsdevPNG from "../pages/fbsdev.png"


const AboutPage = () => (
    <>
<Layout>
<SEO title="@" />
<img src={catsGIF} width="250" height="250" alt="funcionarios" ></img>
<Link to="https://fbsdev.netlify.app/"> <img src={fbsdevPNG} alt="FBS-DEV"></img> </Link>
<Link to="/" activeStyle={{ color: "red"}} > Pagina Inicial </Link>
<h1>Sobre mim</h1>
</Layout>
</>
)
export default AboutPage