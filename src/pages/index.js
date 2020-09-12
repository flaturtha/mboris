import React from "react"

import SEO from "../components/seo"
import Subscribe from '../components/subscribe'
import Layout from "../components/layout"  
import Hero from '../components/hero'
import Testaments from '../components/testaments'
import ReaderMagnet from '../components/reader-magnet'
import Bio from '../components/bio'
import Btt from '../components/btt'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Testaments />
    <ReaderMagnet />
    <Bio />
    {/* <Btt /> */}
  </Layout>
)

export default IndexPage
