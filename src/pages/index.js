import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import Books from '../components/books'
import Bio from '../components/bio'
import Subscribe from '../components/subscribe'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Books />
    <Bio />
    <Subscribe />
  </Layout>
)

export default IndexPage
