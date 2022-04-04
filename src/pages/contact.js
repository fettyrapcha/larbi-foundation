import React from 'react'


import Header from "../components/header";
import Contacts from '../components/contact_us';
import Footer from '../components/footer';

const Contact = () => {
    return (
        <div>
            <div className=" justify-center items-center text-center">
                <Header />
                <Contacts />
                <Footer />
            </div>
        </div>
    )
}

export default Contact