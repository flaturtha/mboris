import React from 'react'
import Image from "../components/image"

const Hero = (props) => (
      
<section className="flex bg-dingygrey m-0 h-screen justify-center items-center text-creme body-font">
  <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
    
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <div className="object-cover object-center overflow-hidden rounded-full border-b border-r shadow-2xl">
        <Image />
      </div>  
  
    </div>

    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start items-center text-center">
      <h1 className="title-font tracking-wide text-xl lg:text-4xl mb-4 font-medium text-gray-900">THE MANIACAL MIND BEHIND &hellip; <span className="block italic mt-6 text-3xl lg:text-6xl text-shockingyellow">THE 64 TESTAMENTS OF KRILL</span></h1>
    
      <h2 className="title-font text-base lg:text-xl my-8 font-medium text-gray-900">EXPLORER OF THE DARK <span className="text-shockingyellow">&middot;</span> INVESTIGATOR OF WHAT GOES <em>BUMP</em> IN THE NIGHT <span className="text-shockingyellow">&middot;</span> PULP WRITER OF COSMIC HORROR ADVENTURE <span className="text-shockingyellow">&middot;</span></h2>

      <div className="flex justify-center hidden">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-creme bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Button</button>
      </div>

    </div>

  </div>

</section>

)

export default Hero