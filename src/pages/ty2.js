import React from "react"

import LPLayout from '../components/landingpagelayout'
import Cover from '../components/cover'
import SEO from "../components/seo"

const TY2Page = () => (
  <LPLayout>
    <section className="container mx-auto my-8 lg:mt-20 px-4 md:w-1/2 h-full">
      <SEO title="Thanks for requesting your free short story" />
            
      <h1 className="text-xl md:text-3xl font-bold text-center my-8 lg:mb-20">
          Thanks for subscribing!
      </h1>
      <p>The promised novella &mdash; <strong>THE MADNESS OF KRILL</strong> &mdash; will be sent in as soon as it is finished. In the meantime, watch out for the Welcome emails that will introduce you to the world of Krill.</p>
      <p>And read the latest issue of <strong>WHAT GOES <em>BUMP</em> IN THE NIGHT</strong> <a className="underline" href="https://preview.mailerlite.com/j8w1q8/1511521892362622003/s0v6/">here</a>!</p>
      
    </section>
  </LPLayout>
)

export default TY2Page
