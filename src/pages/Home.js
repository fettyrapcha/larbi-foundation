import React from 'react';


import Header from "../components/header";
import Land from '../components/landing';
import Features from "../components/features";
import Upcoming from '../components/upcoming';
import Info from '../components/info';
import Team from "../components/team";
import Testimonial from "../components/testimonial";
import Gallary from '../components/gallary';
import Footer from '../components/footer';



const Home = () => {
    return (
        <div >
            <div className=" justify-center items-center text-center">
                <Header />
                <Land />
                <Features />
                <Info />
                <Upcoming />
                <Testimonial />
                <Gallary />
                <Team />
                <Footer />
            </div>
        </div>
    )
}

export default Home