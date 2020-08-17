import React from 'react'
import Image from "../components/image"

const Hero = (props) => (

<div className="bg-dingygrey p-0 md:pb-12 lg:p-24">      
<section className="flexjustify-center items-center text-creme body-font">
  <div className="container mx-auto flex px-5 lg:flex-row flex-col items-center">
    
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 order-2 lg:order-1">
      <div className="object-cover object-center overflow-hidden rounded-full border-b border-r shadow-2xl">
        <Image />
      </div>  

      <h2 className="title-font text-base text-center lg:hidden lg:text-xl my-8 font-medium text-gray-900">EXPLORER OF THE DARK <span className="text-shockingyellow">&middot;</span> INVESTIGATOR OF WHAT GOES <em>BUMP</em> IN THE NIGHT <span className="text-shockingyellow">&middot;</span> PULP AUTHOR OF COSMIC HORROR ADVENTURE <span className="text-shockingyellow">&middot;</span></h2>

    </div>

    <div className="font-serif lg:flex-grow lg:pl-24 md:pl-16 flex flex-col md:items-start items-center text-center order-1 lg:order-2">
      <h1 className="title-font tracking-wide text-xl md:text-4xl mt-12 mb-12 font-medium text-gray-900">THE MANIACAL MIND BEHIND &hellip; <span className="block italic mt-6 text-3xl lg:text-6xl text-shockingyellow">THE 64 TESTAMENTS OF <span className="hidden md:inline">COL.</span> KRILL<span className="hidden lg:inline"> &amp; THE TENTACLE CULT</span></span></h1>
    

      <div className="flex justify-center hidden">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-creme bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Button</button>
      </div>

    </div>

  </div>

</section>

<h2 className="text-center hidden mt-24 lg:block lg:text-5xl my-8 font-medium text-creme">EXPLORER OF THE DARK <span className="text-shockingyellow">&middot;</span> INVESTIGATOR OF WHAT GOES <em>BUMP</em> IN THE NIGHT <span className="text-shockingyellow">&middot;</span> PULP AUTHOR OF COSMIC HORROR ADVENTURE <span className="text-shockingyellow">&middot;</span></h2>

</div>
)

export default Hero