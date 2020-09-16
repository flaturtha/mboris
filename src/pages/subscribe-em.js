import React from "react"

import LPLayout from "../components/landingpagelayout"
import SEO from "../components/seo"
import EMForm from '../components/end-matter-form'

const EndMatterSub = () => (
  <LPLayout>
    <section className="container mx-auto my-8">
      <SEO title="landing page ... end matter subscription" />

      <header className="mt-2 p-8">
        <hr className="w-1/2 mx-auto mb-4" />
        <h1 className="uppercase text-center text-4xl">Subscribe &hellip;</h1>
        <hr className="w-1/2 mx-auto mt-6 mb-12" />
      </header>

      <main className="mx-auto w-full md:max-w-2xl">
        <p className="text-xl">And get early access to new books, subscriber-only supplemental stories, and an opportunity to help shape the storyline of <strong>THE 64 TESTAMENTS</strong> as a <em>beta&nbsp;reader</em>.</p>
        <p>Plus the bi-weekly e-bulletin from M. Boris &hellip; <span className="font-bold">WHAT GOES <em>BUMP</em> IN THE NIGHT</span>, chock full of book reviews &amp; recommendations, news, and odd facts about monsters, demons, mythology, and more!<br/>And Ted Pyne's special news report 'as it happens' report called <em>THE CITIZEN REPORTER</em>.</p>
        <p className="mt-6">And I'll send you a free novelette called <strong>THE MADNESS OF KRILL</strong>. Its a great intro into the world of Krill and his mad quest to destory the 'gods who are rejected'!</p>
      </main>

      <EMForm />

    </section>
  </LPLayout>
)

export default EndMatterSub

{
  /* subscription page for end matter sign up */
}
