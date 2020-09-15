import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SecondaryCTAForm from '../components/SecondaryCTAForm'

const BRPage = () => (
  <Layout>
  <section className="container mx-auto px-4 lg:px-auto mt-12">
    <SEO title="Newsletter archives of WHAT GOES BUMP IN THE NIGHT" />
    
    <header className="mt-2 p-8">
      <hr className="w-1/2 mx-auto mb-4" />
        <h1 className="uppercase text-center text-4xl">
        BETA READER PROGRAM
        </h1>

        <h2 className="text-center italic text-lg tracking-widest mt-8 md:mt-0">
        Apply to be a beta reader &hellip;
        </h2>
        <hr className="w-1/2 mx-auto mt-6 mb-12" />
      </header>

      <main className="mx-4 lg:mx-16">
        <h2 className="text-4xl font-bold">The Rules:</h2>
        <ol className="list-decimal">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aspernatur incidunt quidem molestias, quae dignissimos perferendis voluptatum omnis officiis nulla, praesentium commodi dolor veritatis non, quis itaque saepe doloribus atque.</li>
          <li>Repellat, adipisci! Dignissimos perferendis nobis reprehenderit earum, sit quo nulla eius illum omnis adipisci placeat sapiente animi nostrum quos? Esse repellat, ea sunt necessitatibus minima ipsam optio aut alias rerum.</li>
          <li>Sint blanditiis nobis fugit harum sunt laboriosam dicta, placeat perferendis cupiditate unde. Quia esse modi a beatae laboriosam quaerat ut, quasi ipsum at similique necessitatibus magni vel expedita molestias dolor.</li>
          <li>Voluptatum dolore ut earum explicabo incidunt hic maxime doloremque nisi sunt aut recusandae unde officia doloribus aliquid, mollitia porro est. Praesentium quod nulla nemo provident iste quidem dolorum modi maxime?</li>
          <li>Placeat corporis doloremque labore officiis. Aliquam, expedita voluptate laborum necessitatibus doloribus commodi quam in ipsum quisquam doloremque explicabo modi sunt officiis dicta molestiae at aliquid. Eius accusantium totam nulla quos?</li>
        </ol>
        
        <SecondaryCTAForm />

      </main>
  </section>
  </Layout>

)

export default BRPage