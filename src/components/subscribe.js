import React from "react"
import PCTAForm from '../components/PrimaryCTAForm'
import Cover from './cover'

const Books = props => (
  <section className="container mx-auto mt-0 lg:py-12 lg:px-20" id="free-story">
    <div className="mt-2 p-8 md:w-4/6 mx-auto">

      <h2 className="text-3xl text-center font-black my-4 ">Get your free copy of</h2>
      <h3 className="text-xl text-center font-black mt-4 mb-8">THE CURSE OF THE MOBEDAN&nbsp;MOBED<br/><span className="text-sm italic">THE GODS WHO WERE REJECTED | Vol. 0, No. 1</span></h3>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
        <div className="shadow-md border w-full md:w-screen md:mr-8">
          <Cover />
        </div>
        
        <div className="text-justify mt-4 mb:mt-0">
          <p className="font-semibold">INDIA - 1901</p>

          <p>Colonel Krill's mission was simple — eradicate the 'devil-worshiping' cults of the subcontinent, an effort to subdue the natives and murmurs of uprising. Most fell quickly to his sword.</p>
          
          <p>But now he has found a cult unlike any other, led by a dangerous and powerful high priest, the Mobedān Mobed, who speaks directly to the 'gods who are rejected,' who wields the power over the dead, and can open a gateway to the realm of nightmares where the evil gods slumber.</p>
          
          <p>Can Col. Krill and his troop of 100 carefully selected soldiers crush the cultic worshipers or will their sacrilege open the gateway between realms and allow the 'gods who are rejected' entrance to seek their unholy revenge?</p>
        </div>

      </div>
      <div className="mt-4 md:mt-12 w-full">
        <p className="italic">This story will be delivered immediately, with 7 more following as they are released &mdash; approximately 1 every 2 months as new Volumes of THE 64 TESTAMENTS OF KRILL are published.</p>
        <PCTAForm />
      </div>
    </div>

    </section>
)

export default Books
