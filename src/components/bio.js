import React from "react"
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Books = props => (
  <section className="container mx-auto mt-0 lg:py-12 lg:px-20 bg-dingygrey text-creme" id="bio">
    <div className="mt-2 p-8 md:w-4/6 mx-auto">
      <h1 className="text-xl font-semibold" className="text-3xl text-black text-center mb-8">Who is M. Boris?</h1>

      <img src="https://via.placeholder.com/150x300" alt="placeholder for M. Boris standing pose" className="float-left mr-4 mb-4 hidden md:block" />

      <img src="https://via.placeholder.com/300x300" alt="placeholder for M. Boris standing pose" className="md:float-left mr-4 mb-8 md:hidden" />

      <p className="text-lg font-semibold">M. Boris is host to the maniacal mind behind THE 64 TESTAMENTS OF COL. KRILL &amp; THE TENTACLE CULT and the short story prequel series: THE GODS WHO ARE REJECTED.</p>
      <p>He is a world traveler and explorer, fascinated by the myths and stories that drive faith and belief.</p>
      <p>Born in a remote village on the edge of the Great Rift Valley in Africa, M. Boris learned from an early age the mysteries of myth, of ancient gods and demons. He learned the power and beauty of a well-told story, of how we relate to our world and experiences through story.</p>
      <p>In his travels throughout Africa, eastern and western Europe, the Far East, and the Americas, he has sought out legends, fairy tales, and mythologies that all seek to explain the worlds that exist beyond our normal perception.</p>
      <p>He has sought the answer to one simple question: why do we believe what we do about the gods, the demons, of monsters, and dark creatures that go bump in the night and haunt our dreams?</p>
      <p>The answer, he hopes, will be found in the pages of his own stories about those little things that go bump in the night and turn innocent objects into demonic forces under the darkness of night and keep us huddled under the bedcovers.</p>
      <p>But wherever his travels lead, across the globe or deep into the stacks at the local library, M. Boris will return with great stories to tell so that you’ve got something fun, funny, suspenseful, terrifying to read under those bedclothes while monsters creep outside.</p>
      <p>Although the man, his life &amp; travels are real, the name is utterly fictional, a pen name under which he writes mythology-based ‘cosmic’ horror, fantasy, and action/adventure. If you look hard enough, maybe you’ll find out who he really is!</p>
      <hr className="my-8" />
      <p>M. Boris is an archaeologist, an investigator of the unusual, the mythical, and what goes bump in the night. Explorer of the dark. Author of pulp cosmic horror adventure!</p>
      <p>His reportage on all things weird and spooky in his newsletter &mdash; <span className="font-semibold uppercase">what goes <em>bump</em> in the night!</span> &mdash; is a pseudo-scholarly survey of his latest discoveries and research: new books/stories (new authors/PD works), relevant news, fascinating tidbits related to his stories, background research, etc.</p>
      <p>The <em>Indiana Jones</em> of monster, demons, &amp; mad mythology!</p>

      <AnchorLink to="#free-story">
        <button className="border rounded p-4 text-dingygrey font-bold bg-creme mx-auto my-6 block">SUBSCRIBE!</button>
      </AnchorLink>
      <p className="w-4/5 mx-auto italic">Subscribe to the weekly e-newsletter for fascinating facts, new release updates, &amp; more. PLUS, get a free short story when you subscribe!</p>

    </div>

    </section>
)

export default Books