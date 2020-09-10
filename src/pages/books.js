import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"

const BooksPage = () => (
  <Layout>
    <section className="container mx-auto my-8">
      <SEO title="Books written by M. Boris" />

      <div className="mt-2 p-8">
        <hr className="w-1/2 mx-auto mb-4" />
        <h1 className="uppercase text-center text-4xl">
          The <span className="text-5xl md:text-6xl">64</span> Testaments of
          Krill
        </h1>

        <h4 className="uppercase text-center text-2xl mb:-mt-4 mb-2 block">
          &amp; the tentacle cult
        </h4>

        <h2 className="text-center italic text-lg tracking-widest mt-8 md:mt-0">
          &mdash; SIXTY-FOUR novellas in EIGHT VOLUMES &mdash;{" "}
        </h2>
        <hr className="w-1/2 mx-auto mt-6 mb-12" />
      </div>

      <div className="grid grid-cols-4 gap-8">
        <div className="bg-gray-100 border-b-2 border-t-2 border-t-2 py-2 px-4 lg:h-16 font-bold text-center">Vol. 1 &mdash; A PLAGUE UPON THE HOUSE OF GAYOMARD</div>
        <div className="bg-gray-200 border-b-2 border-t-2 py-2 px-4 lg:h-16 font-bold text-center">Vol. 2 &mdash; THE PROPHESIES OF THE MOBEDAN MOBED</div>
        <div className="bg-gray-300 border-b-2 border-t-2 py-2 px-4 lg:h-16 font-bold text-center">Vol. 3 &mdash; THE BLINDS GODS</div>
        <div className="bg-gray-400 border-b-2 border-t-2 py-2 px-4 lg:h-16 font-bold text-center">Vol. 4 &mdash; THE RISE &amp; FALL OF THE TENTACLE CULT</div>
        <div className="bg-gray-500 border-b-2 border-t-2 py-2 px-4 lg:h-16 font-bold text-center">Vol. 5 &mdash; THE MOORS OF KRILL MANOR</div>
        <div className="bg-gray-600 border-b-2 border-t-2 py-2 px-4 lg:h-16 font-bold text-center">Vol. 6 &mdash; THE TRAP</div>
        <div className="bg-gray-700 border-b-2 border-t-2 py-2 px-4 lg:h-16 font-bold text-center">Vol. 7 &mdash; THE REALM OF NIGHTMARES</div>
        <div className="bg-gray-800 border-b-2 border-t-2 py-2 px-4 lg:h-16 font-bold text-center">Vol. 8 &mdash; THE 13TH LANCERS</div>
      </div>

      <hr className="my-20"/>

      <p className="w-5/6 mx-auto">The story, through the 64 novellas, is told by Ted Pyne, Citizen Reporter, who first meets Col. Krill during his investigation into the murder of the museum curator in Vol. 1, No. 1 &mdash; THE RISE OF THE NEURI. Fascinated by this seeming madman, Ted takes it upon himself to document the story of how Col. Krill met with the fierce creatures sent forth by the evil 'gods who are rejected' to prepare for their escape from the realm of nightmares where they were banished thousands of years ago.</p>
      <p className="w-5/6 mx-auto">First recorded in Ted's independent newspaper called <em>The Citizen Reporter</em> (subscribe <u>here</u> to get his weekly issue delivered to your email inbox &amp; gain insight into his view of Col. Krill). The entire saga of Col. Krill's battle is published as THE 64 TESTAMENTS OF KRILL.</p>

      <p className="w-5/6 mx-auto mt-8 mb-0 text-lg font-bold">AN EXCERPT FROM <em>THE CITIZEN REPORTER</em> &hellip;</p>

      <Intro />
    </section>
  </Layout>
)

export default BooksPage
