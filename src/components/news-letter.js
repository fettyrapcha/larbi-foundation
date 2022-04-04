import React from "react";

export default function Newsletter() {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="Item-center pt-5">
          <h3 className="font-medium leading-tight text-2xl mt-0 mb-2 text-black-600 text-center">Upcoming Events</h3>
        </div>
        <div className="p-6 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 flex items-center ">
            <div className="block">
              <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="/images/boss.jpeg" alt="" />
                <div className="p-6 flex flex-col justify-start">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                  <p className="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural.
                  </p>
                  <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                  <button type="button" class=" inline-block mt-3 px-2.5 py-2.5 bg-sky-600 text-white font-poppins text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out">Read More </button>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="/images/boss.jpeg" alt="" />
                <div className="p-6 flex flex-col justify-start">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                  <p className="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural.
                  </p>
                  <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                  <button type="button" class=" inline-block mt-3 px-2.5 py-2.5 bg-sky-600 text-white font-poppins text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out">Read More </button>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="/images/boss.jpeg" alt="" />
                <div className="p-6 flex flex-col justify-start">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                  <p className="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural.
                  </p>
                  <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                  <button type="button" class=" inline-block mt-3 px-2.5 py-2.5 bg-sky-600 text-white font-poppins text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out">Read More </button>
                </div>
              </div>
            </div>




          </div>

        </div>
      </div>
    </div>
  );
}
