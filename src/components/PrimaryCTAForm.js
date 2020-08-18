import React from 'react'

const PCTAForm = (props) => (
  <div className="mx-auto w-full">
    <form className="sm:mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" name="PCTAForm" action="/thank-you" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="PCTAForm" />

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        First Name &hellip;
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Bram" />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email Address &hellip;
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="bram@draculasplace.com" />
    </div>

    <div className="flex items-center justify-center">
      <button className="bg-dingygrey text-creme font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Get My Free Story!
      </button>
    </div>
    </form>

    <p className="text-center text-gray-500 text-xs">
      Your information is secure &amp; will only be used to communicate directly with you from this site.
    </p>

  </div>
)

export default PCTAForm
