import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { BsBoxArrowInDown } from "react-icons/bs"

const Testaments = props => (
  <section
    className="container mx-auto mt-0 px-4 lg:pt-12 lg:px-20 "
    id="testaments"
  >
    <div className="mt-2 p-8">
      <hr className="w-1/2 mx-auto mb-4" />
      <h1 className="uppercase text-center text-4xl">
        The <span className="text-5xl md:text-6xl">64</span> Testaments of Krill
      </h1>

      <h4 className="uppercase text-center text-2xl md:-mt-6 mb-2 block">&amp; the tentacle cult</h4>

      <h2 className="text-center italic tracking-widest mt-8 md:mt-0">
        &mdash; SIXTY-FOUR novellas in EIGHT VOLUMES &mdash;{" "}
      </h2>
      <hr className="w-1/2 mx-auto mt-6 mb-12" />

      <p className="italic mt-8 text-2xl md:w-1/2 mx-auto">
        His sacrilege awoke an ancient evil that demanded the souls of his
        troops and cursed him to wander the earth for eternity, paying his
        wretched daily penance.
      </p>

      <p className="mt-8">
        <span className="font-semibold">NOW, AFTER NEARLY 100 YEARS OF</span>{" "}
        searching, Colonel Krill has proof that the 'gods who are rejected' are
        indeed vulnerable, and if he can locate the 5 relics before the end of
        the 9,000 years of Ahriman's rule, signified by the return of the comet,
        he can lure this ancient evil from their realm into a trap that will
        destroy them and finally break the curse.
      </p>
      <p className="mb-0 md:mb-2">
        But the 'gods who are rejected' have allies in the realm of humanity;
        allies willing to use whatever means necessary to use Col. Krill as a
        gateway through which the dark gods can enter our realm and forever cast
        it into darkness, taking their revenge for being rejected.
      </p>

      

    </div>
  </section>
)

export default Testaments
