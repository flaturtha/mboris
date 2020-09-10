import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <>
    <div className="w-full bg-creme m-0" id="header">
    <nav className="flex items-center justify-between flex-wrap p-6 bg-creme border-b border-dingygrey">
      <Link to={'/'}>
        <div className="flex items-center flex-shrink-0 mr-6">
          {/* <img src="/" alt="Douggery"/> */}
          <span className="lg:ml-20 font-semibold text-4xl tracking-wider text-dingygrey font-serif">
            {siteTitle}
          </span>
        </div>
      </Link>
      
      <div className="block md:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-dingygrey hover:bg-dingygrey hover:text-creme outline-none"
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
        } w-full block flex-grow md:flex md:items-center md:w-auto h-screen md:h-auto mt-10 border-t-2 border-dingygrey md:border-none md:m-0`}
      >
        <div className="flex-1 md:flex lg:justify-end md:pb-3 lg:pb-0">
          <Link
            to={`#books`}
            href="#responsive-header"
            className="d:w-1/3 lg:w-auto md:text-center items-end font-serif block mt-4 lg:inline-block lg:mt-0 text-dingygrey font-bold hover:bg-dingygrey hover:text-creme rounded-sm px-2 mr-7 lg:mr-20 uppercase text-4xl md:text-base"
          > 
            Books
          </Link>
          <Link
            to={`/blog`}
            className="d:w-1/3 lg:w-auto md:text-center items-end font-serif block mt-4 lg:inline-block lg:mt-0 text-dingygrey font-bold hover:bg-dingygrey hover:text-creme rounded-sm px-2 mr-10 lg:mr-20 uppercase text-4xl md:text-base"
          >
            Blog
          </Link>
          <Link
            to={`/bulletin`}
            className="d:w-1/3 lg:w-auto md:text-center items-end font-serif block mt-4 lg:inline-block lg:mt-0 text-dingygrey font-bold hover:bg-dingygrey hover:text-creme rounded-sm px-2 mr-10 lg:mr-20 uppercase text-4xl md:text-base"
          >
            Bulletin
          </Link>
        </div>
        <div className="border-b-2 border-dingygrey md:border-none">
          <a
            href="/beta-reader"
            className="font-serif inline-block uppercase font-bold px-2 py-2 mt-6 mb-6 lg:mr-20 lg:m-0 lg:px-6 lg:py-4 leading-none border rounded-lg text-creme bg-dingygrey hover:bg-creme hover:text-dingygrey hover:border hover:border-dingygrey mt-4 lg:mt-0 text-4xl md:text-base text-center"
          >
            Beta Reader
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