import React from "react";

import Header from "../components/header";
import AboutLanding from "../components/aboutLanding";
import Footer from "../components/footer";
import Howtoapply from "../components/howtoapply";

const About = () => (
    <div >
        <div className=" justify-center items-center text-center">
            <Header />
            <AboutLanding />
            <Howtoapply />
            <Footer />
        </div>
    </div>

);

export default About;