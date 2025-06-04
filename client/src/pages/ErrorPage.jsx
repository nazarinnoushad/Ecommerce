import React from 'react'
import { Helmet } from 'react-helmet';


    const ErrorPage = () => {
        return (
          <section className="flex items-center justify-center h-screen bg-black">
            <Helmet>
                <title>ErrorPage</title>
            </Helmet>
            <div className="text-center text-white">
              <h2 className="text-6xl sm:text-9xl font-extrabold mb-4">404</h2>
              <p className="text-xl sm:text-3xl font-semibold mb-6">
              Oops! Sorry, we could not find this page.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                But do not worry, you can find plenty of other things on our homepage.
              </p>
              <a
                href="/"
                className="px-6 py-3 font-semibold rounded-lg bg-pink-400 text-black shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
              >
                Back to Homepage
              </a>
            </div>
          </section>
        )
      }
      
      export default ErrorPage;