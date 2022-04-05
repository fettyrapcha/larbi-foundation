import React from 'react'

const Land = () => {
  return (
    <div className="h-[38rem]">

      <section className="h-[38rem] mb-32 text-gray-800 text-center lg:text-left background-radial-gradient ">

        <div className="relative overflow-hidden bg-no-repeat bg-cover mm" s>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bb">
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 py-6 md:py-0 md:px-12 max-w-[800px]">
                <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-12">
                  Making Life Easier <br /><span>Tor Them All</span>
                </h2>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia
                  consequatur adipisci tenetur repudiandae rerum quos.
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
          </div>
        </div>
        <div className="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10 curve">
          <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z" fill="currentColor"></path>
          </svg>
        </div>

      </section>

    </div>
  )
}

export default Land
