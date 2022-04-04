import React from 'react'

import Header from "../components/header";
import Apply from '../components/apply';
import Footer from '../components/footer';

const ApplyPage = () => {
    return (
        <div>
            <div className=" justify-center items-center text-center">
                <Header />
                <Apply />
                <Footer />
            </div>
        </div>
    )
}

export default ApplyPage