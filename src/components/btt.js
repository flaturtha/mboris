import React from "react"
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { FaArrowAltCircleUp } from 'react-icons/fa'

const Btt = props => (
  <div className="text-right fixed bottom-0 right-0 mr-4 mb-4 md:mr-8 md:mb-24">
    <AnchorLink to="#header">
      <FaArrowAltCircleUp className="text-4xl text-dingygrey" />
    </AnchorLink>
  </div>
)

export default Btt