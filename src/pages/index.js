import React from "react"

import SEO from "../components/seo"
import LPLayout from "../components/landingpagelayout"
import Subscribe from '../components/subscribe'
{/*
import Layout from "../components/layout"  
import Hero from '../components/hero'
import Books from '../components/books'
import Bio from '../components/bio'
import UnderConstruction from "../components/undercontruction"
import Btt from '../components/btt'*/}

const IndexPage = () => (
  <LPLayout> {/* change to Layout when full site ready! s*/}
    <SEO title="Home" />
    <Subscribe />
    
    {/* <Hero />
    <UnderConstruction />
    <Books />
    <Bio />
    <Btt /> */}
  </LPLayout>
)

export default IndexPage
