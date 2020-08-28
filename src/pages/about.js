import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <>
<Layout>
<SEO title="@" />
<h1>Sobre mim</h1>
 <ul>
 <li>
   <Link to="/" activeStyle={{ color: "red"}} > Pagina Inicial </Link>
 </li>
</ul>
</Layout>
</>
)
export default AboutPage