import React from "react"
import Layout from "../components/layout"
import Page from "../components/pages/home"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Page />
  </Layout>
)

export default IndexPage
