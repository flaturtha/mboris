import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { AnchorLink } from 'gatsby-plugin-anchor-links'


const BulletinPage = () => (
  <Layout>
    <SEO title="e-bulletin/email newsletter archives and table of contents" />
      
    <section className="container mx-auto px-4 lg:px-auto mt-12">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold">WHAT GOES <em>BUMP</em> IN THE NIGHT &hellip; Archives</h1>
        <h2 className="text-xl italic">Exclusive content for subscribers only!</h2>
        <AnchorLink to="#free-story">
          <button className="border rounded p-4 text-dingygrey font-bold bg-creme mx-auto my-6 block">SUBSCRIBE!</button>
        </AnchorLink>
        <hr className="w-1/2 mx-auto mt-8 mb-2 text-gray-400" />
      </header>
      <div className="mx-4 lg:mx-16 my-20">
        <ol>
          <li className="mb-8">
            <p className="italic underline">Issue No. 1</p>
            <p className="indent-2">Articles List</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </li>

          <li className="mb-8">
            <p className="italic underline">Issue No. 2</p>
            <p className="indent-2">Articles List</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </li>

          <li className="mb-8">
            <p className="italic underline">Issue No. 3</p>
            <p className="indent-2">Articles List</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </li>

          <li className="mb-8">
            <p className="italic underline">Issue No. 4</p>
            <p className="indent-2">Articles List</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </li>

          <li className="mb-8">
            <p className="italic underline">Issue No. 5</p>
            <p className="indent-2">Articles List</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </li>

        </ol>
      
      </div>
    </section>
  </Layout>
)

export default BulletinPage