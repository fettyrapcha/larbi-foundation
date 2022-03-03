import React from "react";
function Landing() {
  return (
    <section className="bg-gray-50">
      <div className="w-11/12 md:max-w-7xl my-0 mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-6">
        <div>
          <h1 className="text-2xl md:text-6xl font-bold font-serif">
            Increase sales on your shopify store with zero inventory cost 😅 🤩
          </h1>

          <div className="flex items-center my-10 sm:mb-20">
            <a
              href="/"
              className=" gap-x-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-tendoGreen"
            >
              <p>Install On Shopify</p> |
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <img src="/images/landing-image.png" alt="" className="w-full " />
        </div>
      </div>
    </section>
  );
}

export default Landing;
