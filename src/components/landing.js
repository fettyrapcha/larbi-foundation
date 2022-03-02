import React from "react";
function Landing() {
  return (
    <section className="">
      <div className="grid grid-cols-2 items-center py-6">
        <div>
          <h1 className="text-5xl font-bold font-serif">
            Increase sales on your shopify store with zero inventory cost 😅 🤩
          </h1>

          <div className="flex items-center my-10 sm:mb-20">
            <button className="bg-tendoGreen text-white hover:bg-white hover:text-tendoGreen hover:border-tendoGreen rounded-md  lg:text-xl  border transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Get Started
            </button>
            <button className="border border-tendoGreen hover:bg-tendoGreen hover:text-white ml-3 sm:ml-6 bg-transparent lg:text-xl transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white rounded-md px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Learn More
            </button>
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
