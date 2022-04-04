import React from 'react'

const AboutLanding = () => {
    return (
        <div>
            <div>
                <section className="bg-gray-50">
                    <div className="w-11/12 md:max-w-7xl my-0 mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-6">
                        <div>
                            <h1 className="my-px text-2xl font-bold text-left font-poppins text-sky-800">Our Mission</h1>
                            <p className="text-justify text-base font-light leading-7 font-poppins">
                                Hearts Wide Open is a Not for Profit Organisation registered in Ghana. We seek to tackle the most pressing issues in society with a sense of urgency.
                                Our Goal is to make greater strides and establish a support system for those in desperate need of help.
                                Our Mission is simply to Spread Joy. From jobs to school fees, funding for life changing medical emergencies and more.
                                Need help? <a href="/" className="font-bold text-sky-800 hover:text-sky-400">Apply Now</a>
                            </p>
                        </div>
                        <div>
                            <img src="/images/hero-section.svg" alt="" className="w-full " />
                        </div>
                    </div>
                </section>
                <section className="bg-gray-50">
                    <div className="w-11/12 md:max-w-7xl my-0 mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-6">
                        <div className="row-start-2 lg:row-start-1">
                            <img src="/images/vision.svg" alt="" className="w-full " />
                        </div>
                        <div className="row-start-1 ">
                            <h1 className="my-px text-2xl font-bold text-left font-poppins text-sky-800">Our Vision</h1>
                            <p className="text-justify text-base font-light leading-7 font-poppins">
                                Hearts Wide Open is a Not for Profit Organisation registered in Ghana. We seek to tackle the most pressing issues in society with a sense of urgency.
                                Our Goal is to make greater strides and establish a support system for those in desperate need of help.
                                Our Mission is simply to Spread Joy. From jobs to school fees, funding for life changing medical emergencies and more.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default AboutLanding;