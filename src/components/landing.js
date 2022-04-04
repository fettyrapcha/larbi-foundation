import React from "react";

function Landing() {
  return (
    <section class="overflow-hidden">
      <div className="relative overflow-hidden bg-no-repeat bg-cover  bgimage">
        <div className="w-11/12 md:max-w-7xl my-0 mx-auto grid grid-cols-1 md:w-3/4  items-center  content-center py-6 ">

          <p className="leading-6 text-2xl text-center text-gray-100 md:text-6xl  pt-14 font-bold font-poppins">
            Providing the neccessory opportuinity for a better future
          </p>
          <div className="flex justify-center items-center my-10 sm:mb-20">
            <a
              href="/apply"
              className=" inline-block px-7 py-3 mr-1.5 border-2 border-sky-800 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md  hover:bg-opacity-50 focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:bg-sky-900" srole="button"
            >
              Apply Now
            </a>
          </div>
        </div>

      </div>

      <div className="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10 curve">
        <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>

  );
}

export default Landing;
