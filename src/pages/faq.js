import React, { useState } from 'react';
import { db } from '../firebase';
import Header from "../components/header";
import AccordionComponent from '../components/accordion';
import Footer from '../components/footer';

const Faq = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("contacts").add({
            name: name,
            email: email,
            phone: phone,
            message: message
        })
            .then(() => {
                alert('Message has been submitted')
            })
            .catch((error) => {
                alert(error.message)
            });
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
    };


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

                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-6">
                                    <input type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleInput7" placeholder="Name"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group mb-6">
                                    <input type="email"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleInput8" placeholder="Email address"
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group mb-6">
                                    <input type="tel"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleInput8" placeholder="Phone number"
                                        value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className="form-group mb-6">
                                    <textarea
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlTextarea13" rows="3" placeholder="Message"
                                        value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
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