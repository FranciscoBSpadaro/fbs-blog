import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <>
  <Layout>
    <SEO title="Home" />
    <PostItem />
</Layout>
</>
)

export default IndexPage
