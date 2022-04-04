import React from 'react'

const Testimonial = () => {
    return (
        <div className="w-11/12 md:max-w-7xl my-0 mx-auto ">
            <div className="sm:flex flex-wrap justify-center items-center m-2.5 text-center gap-8">
                <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
                    <h3 className="text-3xl font-bold mb-6 text-gray-800">Testimonials</h3>
                    <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam
                        iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum
                        porro a pariatur veniam.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                        <div className="block rounded-lg shadow-lg bg-white">
                            <div className="overflow-hidden rounded-t-lg h-28 tes1" ></div>
                            <div className="w-24 -mt-12 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                                <img src="/images/test.jpg" alt="tes1" />
                            </div>
                            <div className="p-6">
                                <h4 className="text-2xl font-semibold mb-4">Maria Smantha</h4>
                                <hr />
                                <p className="mt-4">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                                    </svg>
                                    Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="block rounded-lg shadow-lg bg-white">
                            <div className="overflow-hidden rounded-t-lg h-28 tes2" ></div>
                            <div className="w-24 -mt-12 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                                <img src="/images/test.jpg" alt="tes2" />
                            </div>
                            <div className="p-6">
                                <h4 className="text-2xl font-semibold mb-4">Lisa Cudrow</h4>
                                <hr />
                                <p className="mt-4">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                                    </svg>
                                    Neque cupiditate assumenda in maiores
                                    repudi mollitia architecto.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="block rounded-lg shadow-lg bg-white">
                            <div className="overflow-hidden rounded-t-lg h-28 tes3" ></div>
                            <div className="w-24 -mt-12 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                                <img src="/images/test.jpg" alt="tes3" />
                            </div>
                            <div className="p-6">
                                <h4 className="text-2xl font-semibold mb-4">John Smith</h4>
                                <hr />
                                <p className="mt-4">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                                    </svg>
                                    Delectus impedit saepe officiis ab
                                    aliquam repellat rem unde ducimus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial