import React from 'react'
import Header from "../components/header";
import AccordionComponent from '../components/accordion';
import Footer from '../components/footer';

const Faq = () => {
    return (

        <div className=" justify-center items-center text-center">
            <Header />

            <div className="container my-10 px-6 mx-auto">
                <AccordionComponent />
                <section className="mb-32 text-gray-800">
                    <div className="grid lg:grid-cols-2 gap-4 my-16 lg:gap-x-12 lg:mb-0">
                        <div className="mb-12 lg:mb-0">

                            <p className="text-gray-500 mb-12">
                                Didn't find your answer in the FAQ? Contact our help team.
                            </p>

                            <form>
                                <div className="form-group mb-6">
                                    <input type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleInput7" placeholder="Name" />
                                </div>
                                <div className="form-group mb-6">
                                    <input type="email"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleInput8" placeholder="Email address" />
                                </div>
                                <div className="form-group mb-6">
                                    <input type="email"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleInput8" placeholder="Pone number" />
                                </div>
                                <div className="form-group mb-6">
                                    <textarea
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group form-check text-center mb-6">
                                    <input type="checkbox"
                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-sky-600 checked:border-sky-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                        id="exampleCheck87" checked />
                                    <label className="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this
                                        message</label>
                                </div>
                                <button type="submit"
                                    className="w-full px-6 py-2.5 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-900 active:shadow-lg transition duration-150 ease-in-out">
                                    Send
                                </button>
                            </form>
                        </div>

                        <div className="mb-6 md:mb-0">
                            <img src="/images/faq.svg" alt="" />
                        </div>
                    </div>
                </section>


            </div>
            <Footer />
        </div>
    )
}

export default Faq