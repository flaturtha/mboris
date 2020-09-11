import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = () => (
  <Layout>
    <SEO title="Musings & writings about what goes bump in the night" />
      
    <section className="container mx-auto px-4 lg:px-auto mt-12">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold">WHAT GOES <em>BUMP</em> IN THE NIGHT &hellip; Online Edition</h1>
        <h2 className="text-xl italic pb-8">Musings & writings about what goes bump in the night</h2>
        <hr className="w-1/2 mx-auto my-2 text-gray-400" />
      </header>
      <div className="mx-4 lg:mx-16 my-20">list of blog posts pulled from sanity.io</div>
    </section>
  </Layout>

)

export default BlogPage