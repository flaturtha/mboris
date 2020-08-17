import React from 'react'
import Image from "../components/image"

const Hero = (props) => (

<div className="bg-dingygrey p-0 md:pb-12 lg:p-24">      
<section className="flex justify-center items-center text-creme body-font">
  <div className="container mx-auto flex px-5 lg:flex-row flex-col items-center">
    
    <div className="flex flex-col md:flex-row md:justify-center md:items-center w-full mt-8">
      <div className="object-cover object-center overflow-hidden rounded-full border-b border-r shadow-2xl md:w-screen">
        <Image />
      </div>
      
      <h2 className="text-center lg:block md:text-xl md:ml-8 my-8 md:my-0 font-medium text-creme">EXPLORER OF THE DARK <span className="text-shockingyellow">&middot;</span> INVESTIGATOR OF WHAT GOES <em>BUMP</em> IN THE NIGHT <span className="text-shockingyellow">&middot;</span> PULP AUTHOR OF COSMIC HORROR ADVENTURE <span className="text-shockingyellow">&middot;</span></h2>

    </div>

  </div>

</section>

<h1 className="tracking-wide text-center text-xl md:text-4xl mt-0 md:mt-12 pb-12 md:pb-0 mb-0 font-medium text-shockingyellow">THE MANIACAL MIND BEHIND &hellip;</h1>
<p className="text-shockingyellow text-4xl text-center mb-0 pb-9=0 font-black">&#709;</p>


</div>
)

export default Hero