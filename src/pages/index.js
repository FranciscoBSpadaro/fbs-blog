import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <>
  <Layout>
    <SEO title="Home" />
    <h1>Bem vindo Pagina inicial</h1>
    </Layout>
    <ul>
 <li>
   <Link to="/about" activeStyle={{ color: "red"}} > Sobre Min </Link>
 </li>
</ul>
</>
)

export default IndexPage
