import React from "react"

import SEO from "../components/seo"
import Subscribe from '../components/subscribe'
import Layout from "../components/layout"  
import Hero from '../components/hero'
import Books from '../components/books'
import Bio from '../components/bio'
import Btt from '../components/btt'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Books />
    <Bio />
    <Subscribe />
    <Btt />
  </Layout>
)

export default IndexPage
