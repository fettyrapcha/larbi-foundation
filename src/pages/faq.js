import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../firebase.config';
import Header from "../components/header";
import AccordionComponent from '../components/accordion';
import Footer from '../components/footer';

const Faq = () => {

    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newMessage, setNewMessage] = useState("");


    const contactsCollectionRef = collection(db, "contacts");

    const createContact = async (e) => {
        e.preventDefault()

        await addDoc(contactsCollectionRef, {
            name: newName,
            email: newEmail,
            phone: newPhone,
            message: newMessage
        })
            .then(() => {
                alert('Message has been submitted')
            })
            .catch((error) => {
                alert(error.message)
            });
        setNewName("")
        setNewEmail("")
        setNewPhone("")
        setNewMessage("")
    };

    // useEffect(() => {
    //     const getContacts = async () => {
    //         const data = await getDocs(contactsCollectionRef);
    //         console.log(data)
    //     };
    //     getContacts();
    // }, [])


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
                                        placeholder="Name"
                                        value={newName} onChange={(event) => { setNewName(event.target.value); }} />
                                </div>
                                <div className="form-group mb-6">
                                    <input type="email"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                        value={newEmail} onChange={(event) => { setNewEmail(event.target.value); }} />
                                </div>
                                <div className="form-group mb-6">
                                    <input type="tel"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Phone number"
                                        value={newPhone} onChange={(event) => { setNewPhone(event.target.value); }} />
                                </div>
                                <div className="form-group mb-6">
                                    <textarea
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        rows="3" placeholder="Message"
                                        value={newMessage} onChange={(event) => { setNewMessage(event.target.value); }}></textarea>
                                </div>

                                <button onClick={createContact}
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