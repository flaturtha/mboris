import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import Books from '../components/books'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Books />
  </Layout>
)

export default IndexPage
