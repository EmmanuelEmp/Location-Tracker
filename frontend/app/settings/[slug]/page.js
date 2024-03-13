'use client'

import React from 'react';

import Image from 'next/image'
import Link from 'next/link'

export default function Settings() {
    const STATUS = {
        IDLE: "IDLE",
        SUBMITTED: "SUBMITTED",
        SUBMITTING: "SUBMITTING",
        COMPLETED: "COMPLETED",
    };


    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        age: "",
        gender: "",
        address: "",
        phone: "",
        country: "",

    });

    const [isStatus, setStatus] = React.useState(STATUS.IDLE);
    const [touched, setTouched] = React.useState({});
    // const [finish, setFinished] = React.useState(false);
    const [loginError, setLoginError] = React.useState(null)

    const errors = getErrors();
    const isValid = Object.keys(errors).length === 0;

    function handleChg(e) {
        const { name, value, checked, type } = e.target;
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    function handleBlur(e) {
        const { name } = e.target;
        setTouched((prevState) => {
            return {
                ...prevState,
                [name]: true,
            };
        });

    }


    async function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target);

        const displayName = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const fil = e.target[4].files[0]

        console.log(displayName, email, password, fil)

        setStatus(STATUS.SUBMITTING);

        if (isValid) {
            console.log("submit");
            setStatus(STATUS.COMPLETED);
            setFinished(prev => !prev)
            console.log(formData);
        } else {
            setStatus(STATUS.SUBMITTED);
        }
    }

    function ValidateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.match(mailformat)) {
            return true;
        }
        else {
            return false;
        }
    }

    function CheckPassword(inputtxt) {
        var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (inputtxt.match(decimal)) {
            return true;
        }
        else {
            return false;
        }
        // return true
    }


    function getErrors(params) {
        const result = {}

        if (!formData.name) {
            result.name = "Name is required";
        }


        if (!formData.age) {
            result.age = "age is required";
        }

        if (!formData.gender) {
            result.gender = "gender is required";
        }

        if (!formData.address) {
            result.address = "address is required";
        }

        if (!formData.phone) {
            result.phone = "phone number is required";
        }

        if (!formData.country) {
            result.country = "country is required";
        }

        if (!formData.email) {
            result.email = "Email is required";
        } else if (!ValidateEmail(formData.email)) {
            result.email = "Email is not correct";
        }


        // if (!formData.userPhoto) result.userPhoto = "Select a Picture"
        return result;
    }

    if (loginError) throw loginError


    if (isStatus === "SUBMITTING") return (<div className="container">...LOADING</div>)



    return (
        <>
            <Image
                src={"/assests/male.png"}
                width={161.504}
                height={161.504}
                alt='profile picture'
                className='profile-img'
            />

            <h2 className='profile-name'>Alex</h2>

            <a className='edit-img' href="#">Change Profile Image</a>

            <div className='edit-profile-div'>

                <h4 className='profile-header'>
                    Edit Profile Info
                </h4>

                <form
                    className='edit-info-form'
                    onSubmit={handleSubmit}>

                    <div className='edit-info-input-div'>

                        <input
                            type="text"
                            name="name"
                            placeholder={`Name: ALex Meadia`}
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.name}
                            className='edit-info-input'
                        />
                        <p className="error" role="alert">
                            {(touched.name || isStatus === STATUS.SUBMITTED) && errors.name}
                        </p>

                    </div>

                    <div className='edit-info-input-div'>

                        <input
                            type="text"
                            name="email"
                            placeholder={`Email: meadia@gmail.com`}
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.email}
                            className='edit-info-input'
                        />
                        <p className="error" role="alert">
                            {(touched.email || isStatus === STATUS.SUBMITTED) && errors.email}
                        </p>

                    </div>

                    <div className='edit-info-input-div'>

                        <input
                            type="text"
                            name="age"
                            placeholder={`Age: 29`}
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.age}
                            className='edit-info-input'
                        />
                        <p className="error" role="alert">
                            {(touched.age || isStatus === STATUS.SUBMITTED) && errors.age}
                        </p>

                    </div>

                    <div className='edit-info-input-div'>

                        <input
                            type="text"
                            name="gender"
                            placeholder={`Gender: Male`}
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.gender}
                            className='edit-info-input'
                        />
                        <p className="error" role="alert">
                            {(touched.gender || isStatus === STATUS.SUBMITTED) && errors.gender}
                        </p>

                    </div>

                    <div className='edit-info-input-div'>

                        <input
                            type="text"
                            name="address"
                            placeholder={`Address: the quick fox jumped`}
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.address}
                            className='edit-info-input'
                        />
                        <p className="error" role="alert">
                            {(touched.address || isStatus === STATUS.SUBMITTED) && errors.address}
                        </p>

                    </div>

                    <div className='edit-info-input-div'>

                        <input
                            type="text"
                            name="phone"
                            placeholder={`Phone: 080 123 456`}
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.phone}
                            className='edit-info-input'
                        />
                        <p className="error" role="alert">
                            {(touched.phone || isStatus === STATUS.SUBMITTED) && errors.phone}
                        </p>

                    </div>

                    <div className='edit-info-input-div'>

                        <input
                            type="text"
                            name="country"
                            placeholder={`Country: Japan`}
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.country}
                            className='edit-info-input'
                        />
                        <p className="error" role="alert">
                            {(touched.country || isStatus === STATUS.SUBMITTED) && errors.country}
                        </p>

                    </div>



                </form>
            </div>

            <div className='profile-option-div'>
                <button className='close-div'>
                    <p className='delete-pgh'>Cancel</p>

                    <Image
                        src={"/assests/close.png"}
                        width={12}
                        height={12}
                        alt='profile picture'
                        className='profile-img'
                    />
                </button>

                <button className='edit-div'>
                    <p className='edit-pgh'>Update Info</p>
                </button>
            </div>
        </>
    )
}
