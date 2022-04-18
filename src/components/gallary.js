import React from 'react'

const Gallary = () => {
    return (
        <div>
            <div className="container my-24 px-6 mx-auto">


                <section className="mb-32 text-gray-800">
                    {/* <style>
                        .zoom:hover img {
                            transform: scale(1.1);
    }
                    </style> */}

                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Projects we are<u className="text-sky-800"> Proud Of</u>
                    </h2>

                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover gallary-image  hover:scale-110 "
                            data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <img src="/images/aa.jpeg"
                                className="w-full transition duration-300 ease-linear align-middle " alt="" />
                            <a href="/under">
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg1"
                                >
                                    <div className="flex justify-start items-end h-full">
                                        <h5 className="text-lg font-bold text-white m-6">Orphanage Home</h5>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div
                                        className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg2 "
                                    ></div>
                                </div>
                            </a>
                        </div>

                        <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover gallary-image  hover:scale-110"
                            data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <img src="/images/pp.jpeg"
                                className="w-full transition duration-300 ease-linear align-middle" alt="" />
                            <a href="/under">
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg1"
                                >
                                    <div className="flex justify-start items-end h-full">
                                        <h5 className="text-lg font-bold text-white m-6">Villages in the North</h5>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div
                                        className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg2"
                                    ></div>
                                </div>
                            </a>
                        </div>

                        <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover gallary-image  hover:scale-110"
                            data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <img src="/images/cc.png"
                                className="w-full transition duration-300 ease-linear align-middle" alt="" />
                            <a href="/under">
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg1"
                                >
                                    <div className="flex justify-start items-end h-full">
                                        <h5 className="text-lg font-bold text-white m-6">The Aged</h5>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div
                                        className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg2"
                                    ></div>
                                </div>
                            </a>
                        </div>




                    </div>

                </section>


            </div>
        </div>
    )
}

export default Gallary