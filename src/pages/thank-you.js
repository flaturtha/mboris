import React from "react"

import LPLayout from '../components/landingpagelayout'
import Cover from '../components/cover'
import SEO from "../components/seo"

const TYPage = () => (
  <LPLayout>
    <section className="container mx-auto my-8 px-4 md:w-1/2">
      <SEO title="Thanks for requesting your free short story" />
            
      <h1 className="text-xl md:text-3xl font-bold text-center my-8">
          Thanks for requesting your copy of
      </h1>

      <div className="flex flex-col md:flex-row justify-center align-center m-0 p-0 md:m-8 mb-8">
        <div className="mb-4 md:mr-8 w-full md:w-1/5">
          <Cover />
        </div>
        <div className="self-center">
          <h2 className="text-lg font-bold text-center mb-4 md:mb-0">THE CURSE OF THE MOBEDĀN MOBED</h2>
          <h3 className="text-base font-bold italic text-center">Vol. 0, No. 1 — THE GODS WHO ARE REJECTED.</h3>
        </div>
      </div>

      <hr className="w-1/2 mx-auto mb-6" />
      <p>
        The little imps who manage the delivery to you inbox are prepping your
        unique link and it’ll be delivered within about 15 minutes or so,
        depending on their mood (and that of the interwebs).
      </p>
      <p className="italic">
          If you don’t receive it soon, reach out to me at m@mboris.com and I’ll
          crack the whip on these little buggers to make sure you get your free
          story!
      </p>
      <p>
        And as part of this giveaway, you’ll also receive 7 more short stories
        dripped out over the next few months. Details in your Welcome email with
        your download links. Look for the subject line: <span className="font-semibold text-center">[Welcome!] Your M. Boris short story download links …</span></p>
      <hr className="w-1/2 mx-auto my-12" />
      <h2 className="text-xl md:text-3xl text-center font-black bg-dingygrey text-creme">
          Want to get 8 novellas &hellip;<br className="md:hidden"/>the entire 1st volume of<br className="hidden md:block" /> THE&nbsp;64&nbsp;TESTAMENTS&nbsp;OF&nbsp;KRILL <br className="md:hidden" />for just $1?
      </h2>
      <p className="italic text-center mt-4 mb-8 text-sm">
          (offer only available on this page … once you click away, this offer
          is gone forever!)
      </p>
      <p>
        <span className="font-bold uppercase">For just $1 today,</span> you’ll get the entire 1st volume of the entire Krill saga (64 novellas in 8 volumes of 8 novellas each) delivered in your preferred ebook format (Kindle or ePub).
      </p>
      <p><span className="bg-shockingyellow text-xl font-bold border border-shockingyellow">That’s 8 novellas for $1!</span></p>
      <p>
        (each novella is ~30,000 words or approximately a 3 hour read so
        that’s a full 24 hours reading for $1!)
      </p>
      <button className="mx-auto border-2 rounded m-8 p-4 block text-2xl font-bold">Buy 8 novellas for $1</button>
      <p>
        Normally, each novella will sell for between $2.99 – $4.99 (depending on
        sales, promotions, etc.). You’ll get 8 for less than 1/3 the price of a
        single story. <em>$1 vs. as much as $39.92 … a 97.49% discount.</em>
      </p>
      <p>
        <strong>So what’s the catch?</strong>
      </p>
      <p>
        I know, it sounds like a too-good-to-be-true deal. Why would I give up
        so much cash? Lose $38 and change every time someone like you takes
        advantage of this deal?
      </p>
      <p>
        I’ll be honest … I’m a new author (although I’ve been writing under
        other pseudonyms for more than 20 years) and want to introduce my
        stories and characters to readers like you.
      </p>
      <p>
        I get it … it’s one thing to download a free short story. It’s another
        thing to commit to spending your cash on an unknown author and unknown
        story.
      </p>
      <p>
        So, I’m willing to take the hit on my income in order to give you a
        chance to find a new series you’ll love. And I’m certain you will!
      </p>
      <p>
        <strong>In fact, I guarantee it.</strong> Spend a buck today, get all 8
        novellas as they’re released (actually <em>before</em> they’re
        officially released!) and read them.
      </p>
      <p>
        Don’t love ‘em? Just send me an email and I’ll refund not just the
        dollar you spent today, but the price of a full novella — I’ll refund
        you $4.99 that you can spend on another author’s book or a cup of coffee
        … your choice!
      </p>
      <p>
        All I’ll ask (and it’s just a request, not a refund requirement) is that
        you fill out a short survey and tell me what didn’t work for you. Hey, I
        want to improve so others can enjoy my stories!
      </p>
      <button className="mx-auto border-2 rounded m-8 p-4 block text-2xl font-bold">Buy 8 novellas for $1</button>
     {/* <p>
        <strong>Titles &amp; Release Schedule</strong> 1. THE RISE OF THE NEURI
        2. . 3. . 4. . 5. . 6. . 7. . 8. .
     </p> */}
      <p className="italic text-sm md:w-4/5 md:mx-auto">And regardless of whether you take advantage of this deal, you’ll get a new short story, each part of THE GODS WHO ARE REJECTED prequel volume delivered to your inbox automatically (about every 2 months).</p>
      <p className="italic text-sm md:w-4/5 md:mx-auto">Each new short story will be released in conjunction with a new volume
          of THE 64 TESTAMENTS OF KRILL.</p>
    {/*  <p>
        <em>~See the full list of stories &amp; volumes~</em> [mboris.com/books]
      </p>
      <hr />
      <p>
        Over the next X days/weeks/months, you’ll get a new short story
        delivered to your inbox … all free as part of this giveaway:
      </p>
      <p>
        Vol. 0 — THE GODS WHO ARE REJECTED No. 1 — THE CURSE OF THE MOBEDĀN
        MOBED No. 2 — No. 3 — No. 4 — No. 4 — No. 6 — No. 7 — No. 8 —
      </p>
      <p>
        The full volume will also be delivered free and a print edition will be
        available to you as a subscriber FREE … just pay shipping. Details
        coming soon.
        </p> */}
    </section>
  </LPLayout>
)

export default TYPage
