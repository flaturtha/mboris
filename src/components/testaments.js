import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { BsBoxArrowInDown } from "react-icons/bs"
import { Link } from "gatsby"

import Coverv1n0 from "./v1n0_cover"
import Coverv1n1 from "./v1n1_cover"
import Coverv1n2 from "./v1n2_cover"
import Coverv1n3 from "./v1n3_cover"
import Coverv1n4 from "./v1n4_cover"
import Coverv1n5 from "./v1n5_cover"
import Coverv1n6 from "./v1n6_cover"
import Coverv1n7 from "./v1n7_cover"
import Coverv1n8 from "./v1n8_cover"


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

      <h4 className="hidden uppercase text-center text-2xl md:-mt-6 mb-2 block">&amp; the tentacle cult</h4>

      <h2 className="text-center italic tracking-widest mt-8 md:mt-0">
        &mdash; SIXTY-FOUR novellas in EIGHT VOLUMES &mdash;{" "}
      </h2>
      <hr className="w-1/2 mx-auto mt-6 mb-12" />

      <p className="italic mt-8 text-2xl md:w-1/2 mx-auto">
        His sacrilege awoke an ancient evil that demanded the souls of his
        troops and cursed him to wander the earth for eternity, paying his
        wretched daily penance.
      </p>

      <hr className="w-1/2 mx-auto my-8" />

      <h3 className="text-center mx-auto text-2xl italic tracking-widest mt-8 md:mt-0">
        &mdash; <a href="https://www.amazon.com/gp/product/B08MJN9JKF">Volume 1: A PLAGUE UPON THE HOUSE OF GAYŌMARD</a> &mdash;{" "}
      </h3>

      <hr className="hidden w-1/2 mx-auto mt-6 mb-12" />

      <ul className="w-8/12 mx-auto">
        <li className="m-8 w-32 mx-8 float-left">
          <a href="#reader-magnet">
            <Coverv1n0 />
            <p className="text-center font-bold">v1n0</p>
          </a>
        </li>

        <li className="m-8 w-32 mx-8 float-left">
          <a href="https://www.amazon.com/dp/B08MHHRSLG">
            <Coverv1n1 />
            <p className="text-center font-bold">v1n1</p>
          </a>
        </li>

        <li className="m-8 w-32 mx-8 float-left">
          <a href="https://www.amazon.com/gp/product/B08TV4PYHV">
            <Coverv1n2 />
            <p className="text-center font-bold">v1n2</p>
          </a>
        </li>

        <li className="m-8 w-32 mx-8 float-left">
          <a href="https://www.amazon.com/gp/product/B08TV478GF">
            <Coverv1n3 />
            <p className="text-center font-bold">v1n3</p>
          </a>
        </li>

        <li className="m-8 w-32 mx-8 float-left">
          <a href="https://www.amazon.com/gp/product/B08TW3DQR5">
            <Coverv1n4 />
            <p className="text-center font-bold">v1n4</p>
          </a>
        </li>

        <li className="m-8 w-32 mx-8 float-left">
          <a href="https://www.amazon.com/gp/product/B08VHPXYSL">
            <Coverv1n5 />
            <p className="text-center font-bold">v1n5</p>
          </a>
        </li>

        <li className="m-8 w-32 mx-8 float-left">
          <a href="/coming-soon">
            <Coverv1n6 />
            <p className="text-center font-bold">v1n6</p>
          </a>
        </li>

        <li className="m-8 w-32 mx-8 float-left">
          <a href="/coming-soon">
            <Coverv1n7 />
            <p className="text-center font-bold">v1n7</p>
          </a>
        </li>

        <li className="m-8 w-32 mx-8 float-left float-left">
          <a href="/coming-soon">
            <Coverv1n8 />
            <p className="text-center font-bold">v1n8</p>
          </a>
        </li>
      </ul>

      <div className="clear-both">
      </div>

      <p className="mt-8 hidden">
        <span className="font-semibold">NOW, AFTER NEARLY 100 YEARS OF</span>{" "}
        searching, Colonel Krill has proof that the 'gods who are rejected' are
        indeed vulnerable, and if he can locate the 5 relics before the end of
        the 9,000 years of Ahriman's rule, signified by the return of the comet,
        he can lure this ancient evil from their realm into a trap that will
        destroy them and finally break the curse.
      </p>
      <p className="mb-0 md:mb-2 hidden">
        But the 'gods who are rejected' have allies in the realm of humanity;
        allies willing to use whatever means necessary to use Col. Krill as a
        gateway through which the dark gods can enter our realm and forever cast
        it into darkness, taking their revenge for being rejected.
      </p>

      

    </div>
  </section>
)

export default Testaments
