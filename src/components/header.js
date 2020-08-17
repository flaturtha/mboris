import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <>
    <div className="w-full bg-dingygrey m-0">
    <nav className="flex items-center justify-between flex-wrap p-6 bg-dingygrey border-b border-shockingyellow">
      <Link to={'/'}>
        <div className="flex items-center flex-shrink-0 mr-6">
          
          <span className="lg:ml-20 font-semibold text-4xl tracking-wider text-shockingyellow font-serif">
            {siteTitle}<span className="hidden lg:inline lg:text-base text-shockingyellow font-serif"> &mdash; author of cosmic horror fiction</span>
          </span>
        </div>
      </Link>
      
      <div className="block md:hidden">
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
        } w-full block flex-grow md:flex md:items-center md:w-auto h-screen md:h-auto mt-10 border-t-2 border-shockingyellow md:border-none md:m-0`}
      >
        <div className="md:flex-grow md:flex md:justify-center lg:justify-end md:pb-3 lg:pb-0">
          <Link
            to={`/books/`}
            href="#responsive-header"
            className="font-serif block mt-4 lg:inline-block lg:mt-0 text-shockingyellow font-bold hover:bg-shockingyellow hover:text-dingygrey rounded-sm px-2 mr-7 lg:mr-20 uppercase text-4xl md:text-base"
          >
            Books
          </Link>
          <Link
            to={`/biography`}
            className="font-serif block mt-4 lg:inline-block lg:mt-0 text-shockingyellow font-bold hover:bg-shockingyellow hover:text-dingygrey rounded-sm px-2 mr-5 lg:mr-20 uppercase text-4xl md:text-base"
          >
            Bio
          </Link>
          <Link
            to={`/blog`}
            className="font-serif block mt-4 lg:inline-block lg:mt-0 text-shockingyellow font-bold hover:bg-shockingyellow hover:text-dingygrey rounded-sm px-2 mr-10 lg:mr-20 uppercase text-4xl md:text-base"
          >
            Blog
          </Link>
        </div>
        <div className="border-b-2 border-shockingyellow md:border-none">
          <a
            href="#download"
            className="font-serif inline-block uppercase font-bold px-2 py-2 mt-6 mb-6 lg:mr-20 lg:m-0 lg:px-6 lg:py-4 leading-none border rounded-lg text-dingygrey bg-shockingyellow hover:bg-dingygrey hover:text-shockingyellow mt-4 lg:mt-0 text-4xl md:text-base text-center"
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