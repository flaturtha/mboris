import React from 'react'

const SCTAForm = (props) => (
  <div className="mx-auto w-full">
    <h1>NOTE: CHANGE FORM!!</h1>
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
      <button className="text-dingygrey bg-creme font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        SUBSCRIBE
      </button>
    </div>
    <p className="mt-4 text-center text-gray-500 text-xs">
    Your information is secure &amp; will only be used to communicate directly with you from this site.
  </p>
  <p className="w-4/5 mx-auto italic">Subscribe to the bi-weekly e-bulletin for fascinating facts, new release updates, recommendations of other books to complete your library, &amp; more &hellip; PLUS the free short story &mdash; THE&nbsp;MADNESS&nbsp;OF&nbsp;KRILL &mdash; when you subscribe!</p>
    </form>

  </div>
)

export default SCTAForm
