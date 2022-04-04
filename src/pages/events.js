import React from 'react'

import Header from '../components/header'
import Newevents from '../components/new_events'
import Footer from '../components/footer'


const Events = () => {
    return (
        <div >
            <div className=" justify-center items-center text-center">
                <Header />
                <Newevents />
                <Footer />
            </div>
        </div>
    )
}

export default Events
