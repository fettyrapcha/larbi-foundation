import React from 'react'

const Upcoming = () => {
    return (

        <div className="w-11/12 md:max-w-7xl my-0 mx-auto my-10 ">
            <section className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-sky">Suppurt for youth in Koforidua</h1>
                        <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-sky-800">Upcoming Event</p>
                    </div>
                    <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                        <img src="/images/support.jpeg" alt="" className="w-full h-60 object-cover rounded-lg sm:h-80 sm:col-span-2 lg:col-span-full" loading="lazy" />

                    </div>
                    <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-3 lg:col-span-1 dark:text-gray-600">
                        This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat.
                    </p>
                    <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-4 lg:row-end-4">
                        <a href="/events"><button type="button" className="bg-sky-800 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Read More</button></a>
                    </div>
                </div>

            </section>
        </div>


    )
}

export default Upcoming