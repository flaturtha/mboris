import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { BsBoxArrowInDown } from "react-icons/bs"
import PCTAForm from "./PrimaryCTAForm"
import Coverv1n0 from "./v1n0_cover"
import Mug from "./mug"


const ReaderMagnet = props => (
  <section
    className="container mx-auto mt-8 px-4 lg:pb-12 lg:px-20"
    id="reader-magnet"
  >

    <hr className="w-1/2 mx-auto"/>
    
    <div className="w-full md:w-3/4 mx-auto mb-8 pt-4 pb-8 px-4 border-gray-300">
      <p className="text-center italic text-lg lg:text-xl mt-4 mx-auto">
        Enter the world of Col. Krill with a <u>FREE</u> introductory story
        &hellip;
      </p>

      <div className="flex flex-col md:flex-row">
      <div className="m-4 md:w-full">
      <Coverv1n0 className="" />
    </div>
        <div className="text-justify">
          <p className="text-center italic text-xl md:text-2xl tracking-wide font-black underline mb-4 mx-auto">THE MADNESS OF KRILL</p>
          <p className="font-semibold">Ted had seen the creatures since he was a boy.</p>
          <p>But only out of the corner of his eye ... whenever he looked towards them, they’d vanish. Just his “wild imaginings,” Mother always said.</p>
<p>But this time, they lingered, beckoning him to follow.</p>
<p>But follow where?</p>
<p>The puke green imps grinned, barring needle-like, shiny white teeth. And giggled. Like the bullies at school always had. Ted’s spine tried to flee but his legs were lead.</p>
<p>But that pulsating fear was nothing compared to what the strange Indian priest told him about the madman, Colonel Aloysius Krill, who sent the creatures to lure Ted into a trap.</p>
<p>Or even the story of his own birth ... certainly a lie … that the terrifying Colonel Krill spun when he cornered Ted at the Regent’s Club.</p>
<p>Who could he believe …</p>
<p>… a priest of strange, foreign religion who claimed to be the last line of defense against an invasion by 'the gods who are rejected,' or an enigmatic, and ageless, British Army Colonel who swore vengeance against these same gods?</p>
<p>… the incantations of a priest or the MADNESS OF KRILL?</p>
        </div>
      </div>

      <PCTAForm />

      <p className="mt-8 text-sm italic">You'll also get an occasional (usually about monthly) email called THE CITIZEN REPORTER. It is "written" by Ted Pyne and adds depth to 8 novellas in Vol. 1 &mdash; A PLAGUE UPON THE HOUSE OF GAYOMARD &hellip; extra stories that add depth to the main stories: clues, background, character details, etc. Just a fun way of adding to the story!</p>

      <p className="text-sm hidden">Plus, you'll get my bi-monthly (on the 1st and 15th of each month) author e-bulletin called WHAT GOES <em>BUMP</em> IN THE NIGHT, a pseudo-scholarly survey of monsters and their history, other authors that you might enjoy, relevant news, and other fascinating tidbits that make your enjoyment of cosmic horror more complete!</p>

    </div>
  </section>
)

export default ReaderMagnet
