import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { BsBoxArrowInDown } from "react-icons/bs"

const Books = props => (
  <section
    className="container mx-auto mt-0 px-4 lg:py-12 lg:px-20 "
    id="books"
  >
    <div className="mt-2 p-8">
      <hr className="w-1/2 mx-auto mb-4" />
      <h1 className="uppercase text-center text-4xl">
        The <span className="text-5xl md:text-6xl">64</span> Testaments of Krill
      </h1>

      <h4 className="uppercase text-center text-2xl mb:-mt-4 mb-2 block">&amp; the tentacle cult</h4>

      <h2 className="text-center italic text-lg tracking-widest mt-8 md:mt-0">
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

      <div className="w-full md:w-3/4 mx-auto mb-8 pt-4 pb-8 px-4 border-gray-300 shadow-xl">
        <p className="text-center italic text-lg lg:text-xl mt-4 mx-auto">Enter the world of Col. Krill with a <u>FREE</u> introductory story &hellip;</p>
          <p className="text-center italic text-xl md:text-2xl tracking-wide font-black underline mb-4 mx-auto">
            THE MADNESS OF KRILL</p>
          <p className="text-center">
          <AnchorLink to="#free-story" title="Free Short Story" className="text-center p-4 border rounded-lg bg-dingygrey text-creme">
            <span className="italic font-bold">DOWNLOAD</span>
          </AnchorLink>
          </p>
          <p className="text-center"><AnchorLink to="/books" className="text-sm italic underline">Learn more about the series</AnchorLink></p>
      </div>

    </div>

   {/* <hr className="w-1/2 mx-auto" />

    <ol className="md:w-1/2 mx-auto">
      <li className="p-4">
        <span className="font-bold">VOLUME 1 &mdash;</span> A PLAGUE UPON THE
        HOUSE OF GAYOMARD
      </li>
      <dl>
        <dt>No. 1 &mdash; THE RISE OF THE NEURI</dt>
        <dd>
          The curator of the Scythian exhibit in the British Museum in London is
          brutally murdered and only Col. Krill knows that it was the work of a
          creature called <em>a neuri</em>. But who controls it, and why?
        </dd>
        <dt>No. 2 &mdash; THE MOBEDAN MOBED</dt>
        <dd>
          Stunned to find the high priest who cursed him still alive, Col. Krill
          returns to the ancient temple to find out more about his curse but
          finds more than he bargained for.
        </dd>
        <dt>No. 3 &mdash; THE CURSE OF THE KURGEN STALAE</dt>
        <dd>
          A flashback to when Col. Krill rescued the sweet Va'doma from her
          enslavement by the dark cult.
        </dd>
        <dt>No. 4 &mdash; THE CHILDREN OF DOM</dt>
        <dd>
          To help the young Va'doma overcome her trance, Col. Krill seeks out
          the magic of her people, the Dom, but their powers are no match for
          the magic of the Mobedan Mobed.
        </dd>
        <dt>No. 5 &mdash; DAUGHTER OF DARKNESS</dt>
        <dd>Va'doma vanishes, called by her dark master once again.</dd>
        <dt>No. 6 &mdash; VA'DOMA, MY CHILD</dt>
        <dd>
          Col. Krill realizes that his derision for Va'doma's race &mdash; and
          all non-whites &mdash; gives power to her master and he must
          demonstrate greater love for her as his adopted daughter in order to
          set her free.
        </dd>
        <dt>No. 7 &mdash; THE TEMPLE OF KU'RANITH</dt>
        <dd>
          Daring once again to enter the evil temple ruins, Col. Krill finds
          himself faced with a choice &hellip; save Va'doma and let the evil
          Mobedan Mobed escape, or allow the high priest to complete his ritual
          that will give the 'gods who are rejected' greater access to our
          realm.
        </dd>
        <dt>No. 8 &mdash; THE RITUAL</dt>
        <dd>
          Col. Krill sacrifices his own needs to save the young Va'doma, but
          this allows Mobedan Mobed to escape and pushes open the door between
          realms even more!
        </dd>
      </dl>

      <li className="p-4">
        <span className="font-bold">VOLUME 2 &mdash;</span> THE PROPHESIES OF
        THE MOBEDAN MOBED{" "}
        <em className="text-sm">
          <br />
          (coming soon!)
        </em>
      </li>
      <li className="p-4">
        <span className="font-bold">VOLUME 3 &mdash;</span> THE BLINDS GODS{" "}
        <em className="text-sm">
          <br />
          (coming soon!)
        </em>
      </li>
      <li className="p-4">
        <span className="font-bold">VOLUME 4 &mdash;</span> THE RISE &amp; FALL
        OF THE TENTACLE CULT{" "}
        <em className="text-sm">
          <br />
          (coming soon!)
        </em>
      </li>
      <li className="p-4">
        <span className="font-bold">VOLUME 5 &mdash;</span> THE MOORS OF KRILL
        MANOR{" "}
        <em className="text-sm">
          <br />
          (coming soon!)
        </em>
      </li>
      <li className="p-4">
        <span className="font-bold">VOLUME 6 &mdash;</span> THE TRAP{" "}
        <em className="text-sm">
          <br />
          (coming soon!)
        </em>
      </li>
      <li className="p-4">
        <span className="font-bold">VOLUME 7 &mdash;</span> THE REALM OF
        NIGHTMARES{" "}
        <em className="text-sm">
          <br />
          (coming soon!)
        </em>
      </li>
      <li className="p-4">
        <span className="font-bold">VOLUME 8 &mdash;</span> THE RETURN OF THE
        13TH LANCERS{" "}
        <em className="text-sm">
          <br />
          (coming soon!)
        </em>
      </li>
</ol> */}
  </section>
)

export default Books
