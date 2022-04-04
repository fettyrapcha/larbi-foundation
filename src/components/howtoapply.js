import React from 'react'

const Howtoapply = () => {
    return (
        <div>
            <section className="py-24 bg-white " >
                <div className="container px-4 mx-auto">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                            <div class="relative mx-auto md:ml-0 max-w-max">
                                <img className="absolute z-10 -right-8 -top-8 w-28 md:w-auto" src="flex-ui-assets/elements/circle3-yellow.svg" alt=""></img>
                                <img className="absolute z-10 -left-10 -bottom-8 w-28 md:w-auto" src="flex-ui-assets/elements/dots3-blue.svg" alt=""></img>
                                <img src="/images/boss.jpeg" alt="" className="rounded-lg" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-sky-800 bg-sky-100 font-medium uppercase rounded-full shadow-sm">How we works</span>
                            <h2 className="mb-12 text-4xl md:text-5xl leading-tight font-bold tracking-tighter">This is how the foundation get you covered</h2>
                            <div className="flex flex-wrap -mx-4 text-center md:text-left">
                                <div className="w-full md:w-1/2 px-4 mb-8">
                                    <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-sky-800 font-semibold rounded-full">1</div>
                                    <h3 className="mb-2 text-xl font-bold">Apprentiship Fees</h3>
                                    <p className="font-medium text-coolGray-500">Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.</p>
                                </div>
                                <div className="w-full md:w-1/2 px-4 mb-8">
                                    <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-sky-800 font-semibold rounded-full">2</div>
                                    <h3 className="mb-2 text-xl font-bold">Full Soppurt</h3>
                                    <p className="font-medium text-coolGray-500">Our calendar lets you know what is happening with customer and projects so you are able to control process.</p>
                                </div>
                                <div className="w-full md:w-1/2 px-4 mb-8">
                                    <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-sky-800 font-semibold rounded-full">3</div>
                                    <h3 className="mb-2 text-xl font-bold">Regular Assessments</h3>
                                    <p className="font-medium text-coolGray-500">End to End Business Platform, Sales Management, Marketing Automation, Help Desk and many more</p>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-sky-800 font-semibold rounded-full">4</div>
                                    <h3 className="mb-2 text-xl font-bold">Setup Business</h3>
                                    <p className="font-medium text-coolGray-500">A tool that lets you build a dream website even if you know nothing about web design or programming.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Howtoapply;