import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import Intro from '../components/intro'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Intro />
  </Layout>
)

export default IndexPage
