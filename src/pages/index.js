import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <>
  <Layout>
    <SEO title="Home" />

    <header>
		<a class="logo" href="/index.html">
              <img src="https://www.freelogoservices.com/api/main/images/1j+ojlxEOMkX9Wyqfhe43D6kifOArBVOkRvIwWJqZ0Y7lhIY5UY72vBm47hlc1xFtFwKhh0HesQ9gSB8" alt="" />
		</a>
</header>
    <h2>Bem vindo Pagina inicial</h2>
    
    <ul>
 <li>
   <Link to="/about" activeStyle={{ color: "red"}} > Sobre Min </Link>
 </li>
</ul>
</Layout>
</>
)

export default IndexPage
