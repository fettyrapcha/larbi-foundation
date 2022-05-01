import React from "react";


export default function Info() {
  return (
    <div>
      <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
        <div className="lg:flex items-center justify-between">
          <div className=" lg:w-1/2 w-full">
            <p className="text-base text-left leading-4 text-sky-800">
              About Us
            </p>
            <h1 className="md:text-5xl text-left text-3xl font-bold leading-10 mt-3 text-gray-800">
              Our mandate?
            </h1>
            <p
              role="contentinfo"
              className="text-base text-left leading-5 mt-5 text-gray-600"
            >
              To serve as a catalyst in helping to tackle most pressing issues in society related to woman, children and the aged.
              To conscientize and create awareness among the poeple of poorest of the poor on prevailing socio-economic situation and encourage them for active participation in socio-economic development program...
            </p>
            <div className="w-24">
              <div className="bg-gray-100 shadow rounded-full flex items-center mt-10">
                <a href="/about" className="items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-700 hover:bg-sky-800">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div
            className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
            role="list"
          >
            <img
              src="https://i.ibb.co/0n6DSS3/bgimg.png"
              className="absolute w-9/12 -ml-12 mt-24"
              alt="background circle images"
            />

            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-10"
            >
              <div className="w-2.5  h-auto bg-tendoGreen rounded-tl-md rounded-bl-md" />
              <div className="w-full p-8">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                    Where We Work
                  </h2>
                </div>
                <p className="md:w-90 text-left text-base leading-6 mt-4 text-gray-600">
                  We proudly provide a broad array of vital support and education for women, children and the aged in Africian countries
                  around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
