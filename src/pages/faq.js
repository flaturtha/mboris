import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FAQ = () => (
  <Layout>
    <SEO title="FAQ: Frequently Asked Questions" />
    
    <section className="container mx-auto px-8 mt-12">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold">FAQ: Frequently Asked Questions</h1>
        <h2 className="text-xl italic pb-8">What do you want to know?</h2>
        <hr className="w-1/2 mx-auto text-gray-400" />
      </header>
      <div>
        <dl className="mx-auto lg:w-3/4">
          <dt className="font-bold uppercase">What are the '64 TESTAMENTS'?</dt>
          <dd>THE 64 TESTAMENTS OF KRILL is a collection of 64 novellas, each about 30,000 words or a 3+ hour read. The entire collection is divided into 8 volumes, each with 8 individual novellas.</dd>
          <dt className="font-bold uppercase">Why 64?</dt>
          <dd>Classic pulp novels often follow a very specific formula that determines the structure of the underlying narrative. Classic story structure uses a basic 3-act structure &mdash; Beginning/Middle/End. The middle act, which is twice as long as the 1st or 3rd act, can be divided into two equal sub-acts. This gives us 4 equal length acts. By dividing these into 2 sub acts, we get 8 total acts in a book.
          
          Because this is a series, the entire saga is broken into 8 sections (volumes), each of which is then further broken down into 8 novellas each, which equates to 64 total novellas.</dd>
          <dt className="font-bold uppercase">Where can I buy these books?</dt>
          <dd>Each novella is available individually or as box sets on Amazon and other book retailers. Look on the Books page for details on what stories have been published. The individual book page will have links to where you can buy the book.</dd>
          <dt className="font-bold uppercase">What is my inspiration for writing them?</dt>
          <dd>I have always been fascinated by myth, ancient gods and monsters, and belief systems around the world &mdash; what we believe about god or the universe, and why. These stories are an exploration of those themes and ideas.</dd>
          <dt className="font-bold uppercase">What is the <em>beta reader</em> program?</dt>
          <dd>In publishing, beta readers are fans who get copies of the book before publication. These copies, known as ARCs, or Advanced Reader Copies, are made available to certain fans who provide feedback on the story, characters, etc. As an independent publisher, Pulpeteers Press (who publishes The 64 Testaments, relies on crowdsourced help to edit and ensure an exciting, well-written read. Information on joining the beta reader program can be found here: Beta Reader.</dd>
          <dt className="font-bold uppercase">Why is Ted the narrator?</dt>
          <dd>Using a narrator is common practice in many genres of storytelling. Sir Arthor Conan Doyle used a narrator in the Sherlock Holmes books. Dr. Watson was that narrator, observing Holmes and telling his friend's story. Ted fills that roll and allows for a more direct connection with the read, rather than a so-called omniscient narrator view direct from the author. It creates bette tension and excitement, as well as immediacy.</dd>
          <dt className="font-bold uppercase">Who is/are the Tentacle Cult?</dt>
          <dd>Col. Krill, the protagonist in this series, can't fight his war with the 'gods who are rejected' alone and periodically recruits other monster hunters, demon fighters, mad scientists, and others to help him. They're like the specialists brought in for a specific job on any of the MISSION: IMPOSSIBLE stories (either the movies or the classic TV show.</dd>
        </dl>

        <p className="text-center my-12 italic">Got more questions not answered here? Email me at <a className="underline" href="mailto:m@mboris.com">m@mboris.com</a>.</p>
      
      </div>
    </section>
  </Layout>
)

export default FAQ
