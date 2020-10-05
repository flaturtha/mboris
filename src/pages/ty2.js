import React from "react"

import LPLayout from '../components/landingpagelayout'
import Cover from '../components/cover'
import SEO from "../components/seo"

const TY2Page = () => (
  <LPLayout>
    <section className="container mx-auto my-8 lg:mt-20 px-4 md:w-1/2 h-full">
      <SEO title="Thanks for requesting your free short story" />
      <hr className="w-1/2 mx-auto mb-4" />
      <h1 className="text-xl md:text-3xl font-bold text-center my-8">
          Thanks for subscribing to <em>THE&nbsp;CITIZEN&nbsp;REPORTER</em>!
      </h1>
      <hr className="w-1/2 mx-auto mb-12" />

      <p>Your 1st issue will arrive in a few days. In the meantime, watch out for a Welcome email with additional details about what you can expect.</p>
      <p>And read the latest issue of <strong>WHAT GOES <em>BUMP</em> IN THE NIGHT</strong> <a className="underline" href="https://preview.mailerlite.com/j8w1q8/1511521892362622003/s0v6/">here</a>!</p> A new issue arrives every other Wednesday.
      
    </section>
  </LPLayout>
)

export default TY2Page
