import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { BsBoxArrowInDown } from "react-icons/bs"
import PCTAForm from "./PrimaryCTAForm"

const ReaderMagnet = props => (
  <section
    className="container mx-auto mt-0 px-4 lg:pb-12 lg:px-20"
    id="reader-magnet"
  >

    <hr className="w-1/2 mx-auto"/>
    
    <div className="w-full md:w-3/4 mx-auto mb-8 pt-4 pb-8 px-4 border-gray-300">
      <p className="text-center italic text-lg lg:text-xl mt-4 mx-auto">
        Enter the world of Col. Krill with a <u>FREE</u> introductory story
        &hellip;
      </p>

      <div className="flex flex-col md:flex-row">
        <img src="https://via.placeholder.com/300x400" alt="placeholder for THE MADNESS OF KRILL cover" className="md:mr-4 mb-12" />
        <div className="text-justify">
          <p className="text-center italic text-xl md:text-2xl tracking-wide font-black underline mb-4 mx-auto">THE MADNESS OF KRILL</p>
          <p><span className="font-semibold">A blurb for this novelette &hellip;</span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, expedita fuga! Tempora, quos, id aliquid vero perferendis cum rerum animi ullam laboriosam doloribus asperiores quas at, quae inventore sunt unde.</p>
          <p>Voluptas unde, velit quisquam praesentium reprehenderit iure ex distinctio dolorum dolor? Nisi impedit, optio aliquam consectetur quasi aliquid, eos laborum ipsam reprehenderit ullam sequi odit suscipit adipisci, illo facere rem.</p>
        </div>
      </div>

      <p className="text-center text-4xl text-alarmred font-black"><span className="bg-shockingyellow p-2">COMING SOON!</span></p>


      <PCTAForm />

      <p className="mt-8 text-sm italic hidden">You'll also get a semi-weekly email from ted@tentaclecult.com called THE CITIZEN REPORTER. It is "written" by Ted Pyne and adds depth to THE MADNESS OF KRILL, as well as upcoming stories &hellip; clues, background, character details, etc. Just a fun way of adding to the story!</p>

      <p className="text-sm hidden">Plus, you'll get my bi-weekly author e-bulletin called WHAT GOES <em>BUMP</em> IN THE NIGHT, a pseudo-scholarly survey of monsters and their history, other authors that you might enjoy, relevant news, and other fascinating tidbits that make your enjoyment of cosmic horror more complete!</p>

    </div>
  </section>
)

export default ReaderMagnet
