import React from 'react'
import Image from "../components/image"
import { FaChevronCircleDown } from 'react-icons/fa'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Hero = (props) => (

<div className="bg-dingygrey p-0 md:pb-12 lg:p-24">      
<section className="flex justify-center items-center text-creme body-font">
  <div className="container mx-auto flex px-5 lg:flex-row flex-col items-center">
    
    <div className="flex flex-col md:flex-row md:justify-center md:items-center w-full mt-8">
      <div className="object-cover object-center overflow-hidden rounded-full border-b border-r shadow-2xl md:w-screen">
        <Image />
      </div>
      
      <h2 className="text-center lg:block md:text-xl md:ml-8 my-8 md:my-0 font-medium text-creme">EXPLORER OF THE DARK <span className="text-creme">&middot;</span> INVESTIGATOR OF WHAT GOES <em>BUMP</em> IN THE NIGHT <span className="text-creme">&middot;</span> AUTHOR OF PULP COSMIC HORROR ADVENTURE <span className="text-creme">&middot;</span></h2>

    </div>

  </div>

</section>

<h1 className="tracking-wide text-center text-xl md:text-4xl mt-0 md:mt-12 pb-12 md:pb-0 mb-0 font-medium text-creme">THE MANIACAL MIND BEHIND &hellip;</h1>

<AnchorLink to="#books">
  <FaChevronCircleDown className="text-creme text-6xl mx-auto pb-8 md:mt-12 md:pb-0" />
</AnchorLink>

</div>
)

export default Hero