import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <>
    <div className="w-full bg-dingygrey m-0">
    <nav className="container mx-auto flex items-center justify-between flex-wrap p-6 bg-dingygrey">
      <Link to={'/'}>
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          
          <span className="font-display font-semibold text-xl lg:text-3xl tracking-tighter uppercase text-shockingyellow">
            {siteTitle}
          </span>
        </div>
      </Link>
      
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-shockingyellow hover:bg-dingygrey outline-none"
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="lg:flex-grow lg:flex lg:justify-end">
          <Link
            to={`/books`}
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-shockingyellow font-bold hover:bg-shockingyellow hover:text-dingygrey rounded-sm px-2 mr-20 uppercase"
          >
            Books
          </Link>
          <Link
            to={`/biography`}
            className="block mt-4 lg:inline-block lg:mt-0 text-shockingyellow font-bold hover:bg-shockingyellow hover:text-dingygrey rounded-sm px-2 mr-20 uppercase"
          >
            Bio
          </Link>
          <Link
            to={`/research-notes`}
            className="block mt-4 lg:inline-block lg:mt-0 text-shockingyellow font-bold hover:bg-shockingyellow hover:text-dingygrey rounded-sm px-2 mr-20 uppercase"
          >
            Research Notes
          </Link>
        </div>
        <div>
          <a
            href="#download"
            className="inline-block uppercase font-bold px-6 py-4 leading-none border rounded-lg text-dingygrey bg-shockingyellow hover:bg-dingygrey hover:text-shockingyellow  px-2 mt-4 lg:mt-0"
          >
            Free Short Story
          </a>
        </div>
      </div>
    </nav>
    </div>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header