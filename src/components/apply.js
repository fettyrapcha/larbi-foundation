import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Apply = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="container mx-auto pt-16">

            <form className="space-y-4 text-gray-700 mx-2 mb-10">
                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div className="w-full px-2 md:w-1/2">
                        <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium " for="formGridCode_name">First name</label>
                        <input placeholder='eg: John' className="w-full h-12 px-3 text-base dark:placeholder-gray-400  border rounded-md shadow-sm focus:shadow-outline" type="text" id="formGridCode_name" />
                    </div>
                    <div className="w-full px-2 md:w-1/2">
                        <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium" for="formGridCode_last">Last name</label>
                        <input placeholder='eg: Narh' className="w-full h-12 px-3 text-base dark:placeholder-gray-400 border rounded-md shadow-sm focus:shadow-outline" type="text" id="formGridCode_last" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div className="w-full px-2 md:w-1/2">
                        <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium " for="formGridCode_name">Date of Birth</label>
                        {/* <input placeholder='Select a date' className="w-full h-12 px-3 text-base dark:placeholder-gray-400  border rounded-md shadow-sm focus:shadow-outline" type="text" id="formGridCode_name" /> */}
                        <DatePicker className="w-full h-12 px-3 text-base border rounded-md shadow-sm focus:shadow-outline" selected={startDate} onChange={(date) =>
                            setStartDate(date)} />
                    </div>
                    <div className="w-full px-2 md:w-1/2">
                        <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium" for="formGridCode_last">Country/Region</label>
                        <select id="country" name="country" autocomplete="country" class="mt-1 block w-full h-12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:shadow-outline sm:text-sm">
                            <option>Ghana</option>
                            <option>Nigeria</option>
                            <option>Togo</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div className="w-full px-2 md:w-1/2">
                        <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium " for="formGridCode_name">Gender</label>
                        <div className="flex">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Male</label>
                            </div>
                            <div className="form-check form-check-inline px-2 px-2">
                                <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Female</label>
                            </div>
                            <div className="form-check form-check-inline px-2">
                                <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Others</label>
                            </div>

                        </div>
                    </div>
                    <div className="w-full px-2 md:w-1/2">
                        <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium" for="formGridCode_last">Phone</label>
                        <input placeholder='eg: +233 XXX XXX XXX' className="w-full h-12 px-3 text-base dark:placeholder-gray-400 border rounded-md shadow-sm focus:shadow-outline" type="text" id="formGridCode_last" />
                    </div>
                </div>

                <div className="w-full">
                    <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium" for="formGridCode_last">Area of Support</label>
                    <select id="country" name="country" autocomplete="country" className="mt-1 block w-full h-12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:shadow-outline sm:text-sm">
                        <option>Techical</option>
                        <option>Vocational</option>
                        <option>Tech</option>
                    </select>
                </div>
                <div className="w-full">
                    <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium" for="formGridCode_card">Upload relevant documents</label>
                    <div className="flex justify-center">

                        <input className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFileMultiple" multiple />

                    </div>
                </div>
                <div className="w-full">
                    <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium" for="formGridCode_card">Why Should TLF help you?</label>
                    <textarea
                        className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:shadow-outline
                        "
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                    ></textarea>
                </div>



                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div className="w-full px-2 md:w-1/3">
                        <label className="block mb-1" for="formGridCode_month">Month</label>
                        <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_month" />
                    </div>
                    <div className="w-full px-2 md:w-1/3">
                        <label className="block mb-1" for="formGridCode_year">Year</label>
                        <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_year" />
                    </div>
                    <div className="w-full px-2 md:w-1/3">
                        <label className="block mb-1" for="formGridCode_cvc">CVC</label>
                        <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_cvc" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Apply