import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import WGBNPremier from '../components/WGBN-premier'

const ArchivePage = () => (
  <Layout>
    <SEO title="Archive of WHAT GOES BUMP IN THE NIGHT e-bulletin" />
      
    <section className="container mx-auto px-4 lg:px-auto mt-12">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold">Archive of WHAT GOES <em>BUMP</em> IN THE NIGHT</h1>
        <h2 className="text-xl italic pb-8">Read your <em>free/no-subscription-required</em> issue of the e-bulletin!</h2>
        <hr className="w-1/2 mx-auto my-2 text-gray-400" />
      </header>
      <div className="mx-4 lg:mx-16 my-20">
        <h2 className="font-bold text-2xl underline">Issue No. 1</h2>
        <p className="w-full max-w-xs bg-creme">
          <WGBNPremier />
        </p>
        <p className="mt-6">
          <a className="underline italic" href="https://preview.mailerlite.com/j8w1q8/1511521892362622003/s0v6/">Read the full issue &hellip;</a>
        </p>
      </div>
    </section>
  </Layout>

)

export default ArchivePage