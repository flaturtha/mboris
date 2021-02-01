import React from "react"

import LPLayout from "../components/landingpagelayout"
import SEO from "../components/seo"
import EMForm from '../components/end-matter-form'

const ComingSoon = () => (
  <LPLayout>
    <section className="container mx-auto my-8 px-4 md:px-0">
      <SEO title="coming soon" />

      <header className="mt-2 p-8">
        <hr className="w-1/2 mx-auto mb-4" />
        <h1 className="uppercase text-center text-4xl italic">COMING SOON &hellip;</h1>
        <div className="mx-auto w-full md:max-w-2xl">
        <h3 className="font-bold text-center mb-8 text-xl"></h3>
      <p>The book you're looking for is not yet available. But I am working on it and it will be available for purchase or pre-order within a few days. Please check back.</p>
      <p>Or SUBSCRIBE below (if you haven't already) and I'll send you a notification when the book is ready to purchase.</p>
      <p>Thanks for your interest in the books.</p>
        </div>
        <hr className="w-1/2 mx-auto mt-6 mb-12" />
      </header>

      <main className="mx-auto w-full md:max-w-2xl">

      

      <h3 className="font-bold text-center mb-8 text-xl">ARE YOU MISSING OUT ON PART OF THE STORY?</h3>
      <p>Our intrepid narrator, Ted Pyne, originally published his on-the-spot reportage of his time with Col. Krill in his mimeographed newspaper he called <em>THE&nbsp;CITIZEN&nbsp;REPORTER</em>.</p>
      <p>It contains details, notes, research, and additional information that added to his telling of Krill’s story but didn’t make it into the final versions of the Testaments.</p>
      <p><span className="font-bold">SUBSCRIBE NOW</span> and get each issue of <em>THE&nbsp;CITIZEN&nbsp;REPORTER</em> delivered as a weekly email. Each issue coincides with and adds depth to the novella you’re reading.</p>
      <ul className="list-disc mb-6 ml-12">
        <li>Character Studies</li>
        <li>Background Research</li>
        <li>On-the-spot Reportage as it happens</li>
        <li>Ted’s personal observations</li>
        <li>More</li>
      </ul>

      <p className="text-center mb-6"> •  •  •  • </p>
      <p><span className="font-bold">PLUS</span>, get the bi-weekly e-bulletin, delivered every other Wednesday, from author M. Boris called WHAT GOES <i>BUMP</i> IN THE NIGHT. Each issue includes a list of other spine-tingling cosmic horror novels you’ll love, reviews of classic horror stories, background research into monsters and their origins, special offers, and more.</p>
      <p className="text-center font-bold italic p-2 mb-4 text-creme bg-dingygrey">GET MORE ENJOYMENT OUT OF WHAT YOU READ … SUBSCRIBE TODAY!</p>
      <p className="text-sm text-center mx-auto w-2/3">Your 1st issue will arrive in your inbox in a few days. Then, a new issue of <em>THE&nbsp;CITIZEN&nbsp;REPORTER</em> about once a week, or so.</p>
      </main>

      <EMForm />

    </section>
  </LPLayout>
)

export default ComingSoon

{
  /* subscription page for end matter sign up */
}
