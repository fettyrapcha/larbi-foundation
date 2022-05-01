import { collection, addDoc } from 'firebase/firestore';
import { storage, } from '../firebase.config';
import React, { useState } from 'react';
import { db } from '../firebase.config';
import DatePicker from "react-datepicker";
import { ref, uploadBytesResumable } from 'firebase/storage';

import "react-datepicker/dist/react-datepicker.css";


const RadioInput = ({ label, value, checked, setter }) => {
    return (
        <label>
            <input type="radio" checked={checked === value}
                onChange={() => setter(value)} />
            <span className="px-2">{label}</span>
        </label>
    );
};




const Apply = () => {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("Ghana");
    const [areas, setAreas] = useState("Techical Training");
    const [startDate, setStartDate] = useState(new Date());
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [imageUpload, setImageUpload] = useState(null)


    const supportCollectionRef = collection(db, "apply");

    const createSupport = async (e) => {
        e.preventDefault()


        if (imageUpload == null) return;
        const imageRef = ref(storage, `/images/${Date.now()}${imageUpload.name}`);
        uploadBytesResumable(imageRef, imageUpload);

        await addDoc(supportCollectionRef, {
            first: firstName,
            last: secondName,
            gender: gender,
            date: startDate,
            country: country,
            support: areas,
            phone: phone,
            message: message,
        }).then(() => {
            alert('Message has been submitted')
        })
            .catch((error) => {
                alert(error.message)
            });
        setFirstName("")
        setSecondName("")
        setGender("")
        setCountry("")
        setAreas("")
        setStartDate("")
        setPhone("")
        setMessage("")
        setImageUpload("")

    };


    return (
        <div className="container mx-auto pt-16">

            <form className="space-y-4 text-gray-700 mx-2 mb-10">
                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div className="w-full px-2 md:w-1/2">
                        <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium " for="formGridCode_name">First name</label>
                        <input placeholder='eg: John' className="w-full h-12 px-3 text-base dark:placeholder-gray-400  border rounded-md shadow-sm focus:shadow-outline" type="text" id="formGridCode_name"
                            value={firstName} onChange={(event) => { setFirstName(event.target.value); }} />
                    </div>
                    <div className="w-full px-2 md:w-1/2">
                        <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium" for="formGridCode_last">Last name</label>
                        <input placeholder='eg: Narh' className="w-full h-12 px-3 text-base dark:placeholder-gray-400 border rounded-md shadow-sm focus:shadow-outline" type="text" id="formGridCode_last"
                            value={secondName} onChange={(event) => { setSecondName(event.target.value); }} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div className="w-full px-2 md:w-1/2">
                        <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium " for="formGridCode_date">Date of Birth</label>
                        {/* <input placeholder='Select a date' className="w-full h-12 px-3 text-base dark:placeholder-gray-400  border rounded-md shadow-sm focus:shadow-outline" type="text" id="formGridCode_name" /> */}
                        <DatePicker className="w-full h-12 px-3 text-base border rounded-md shadow-sm focus:shadow-outline" selected={startDate} onChange={(date) =>
                            setStartDate(date)} format='yyyy-MM-dd' type="date" />

                    </div>
                    <div className="w-full px-2 md:w-1/2">
                        <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium" for="formGridCode_country">Country/Region</label>
                        <select id="countrys" name="country" autocomplete="country" class="mt-1 block w-full h-12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:shadow-outline sm:text-sm"
                            value={country} onChange={(event) => { setCountry(event.target.value); }}>
                            <option value="Ghana ">Ghana</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Togo">Togo</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div className="w-full px-2 md:w-1/2">
                        <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium " for="formGridCode_gender">Gender</label>
                        <div className="flex">
                            <div className="form-check form-check-inline px-2 px-2">
                                <RadioInput label="Male" value="male" checked={gender} setter={setGender} />
                            </div>
                            <div className="form-check form-check-inline px-2 px-2">
                                <RadioInput label="Female" value="female" checked={gender} setter={setGender} />
                            </div>
                            <div className="form-check form-check-inline px-2 px-2">
                                <RadioInput label="Others" value="others" checked={gender} setter={setGender} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-2 md:w-1/2">
                        <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium" for="formGridCode_last">Phone</label>
                        <input placeholder='eg: +233 XXX XXX XXX' className="w-full h-12 px-3 text-base dark:placeholder-gray-400 border rounded-md shadow-sm focus:shadow-outline" type="tel" id="formGridCode_phone"
                            value={phone} onChange={(event) => { setPhone(event.target.value); }} />
                    </div>
                </div>

                <div className="w-full">
                    <label className="block mb-1 text-left tracking-wide text-sky-700 font-medium" for="formGridCode_last">Area of Support</label>
                    <select id="areas" name="support" className="mt-1 block w-full h-12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:shadow-outline sm:text-sm"
                        value={areas} onChange={(event) => { setAreas(event.target.value); }}>
                        <option value="Techical Training">Techical Training</option>
                        <option value="Vocational Training">Vocational Training</option>
                        <option value="IT Training ">IT Training</option>
                        <option value="Other Supports">Other Supports</option>
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
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFileMultiple" multiple onChange={(event) => { setImageUpload(event.target.files[0]); }} />

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
                        value={message} onChange={(event) => { setMessage(event.target.value); }}
                    ></textarea>
                </div>
                <div className="flex space-x-2 justify-center">
                    <button onClick={createSupport} type="button" className="inline-block px-6 py-2.5 bg-sky-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Apply