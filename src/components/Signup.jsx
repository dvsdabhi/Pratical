import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { createUser } from "../utils/Api";

const Signup = () => {

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [data, setData] = useState({ name: "", email: "", password: "", cpassword: "", country: "", state: "", city: "" });

    const countries = ['India', 'USA'];

    const states = {
        India: ['Gujarat', 'Maharashtra'],
        USA: ['New York', 'California'],
    };

    const cities = {
        Gujarat: ['Ahmedabad', 'Vadodara'],
        Maharashtra: ['Mumbai', 'Pune'],
        'New York': ['New York City', 'Buffalo'],
        California: ['Los Angeles', 'San Francisco'],
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "country":
                setSelectedCountry(value);
                setSelectedState('');
                break;
            case "state":
                setSelectedState(value);
                break;
            default:
                setData((prevData) => ({ ...prevData, [name]: value }));
                break;
        }
        setData((prevData) => ({ ...prevData, [name]: value }));
    }

    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.password === data.cpassword) {
            try {
                const res = await createUser(data);
                alert(res.data.message);
                if (res.data.status === 200) {
                    emailjs.sendForm("service_94orhck", "template_zvnuyml", form.current, "KOG-guY8sOzwvHrg1")
                        .then(() => {
                            console.log("success");
                        }, (error) => {
                            console.log(error);
                        });
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("password and confirm-password are does not match");
        }
    }

    return (
        <>
            <div className="flex flex-col items-center space-y-5 py-5">
                <div className="flex justify-center mt-10 w-full">
                    <h1 className="text-2xl">SignUp</h1>
                </div>
                <div className="w-full px-52 space-y-5">
                    <form action="" className="flex flex-col space-y-5" ref={form} onSubmit={handleSubmit}>
                        <input name="name" type="text" placeholder="enter your name" className="border-2 border-gray-400 rounded-lg p-2" onChange={handleChange} required />
                        <input name="email" type="email" placeholder="enter your email" className="border-2 border-gray-400 rounded-lg p-2" onChange={handleChange} />
                        <input name="password" type="password" placeholder="enter your password" className="border-2 border-gray-400 rounded-lg p-2" onChange={handleChange} required />
                        <input name="cpassword" type="password" placeholder="re-enter your password" className="border-2 border-gray-400 rounded-lg p-2" onChange={handleChange} />
                        <select name="country" value={selectedCountry} className="border-2 border-gray-400 rounded-lg p-2" onChange={handleChange}>
                            <option value="">select country</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                        </select>
                        <select name="state" value={selectedState} onChange={handleChange} className="border-2 border-gray-400 rounded-lg p-2">
                            <option value="">select state</option>
                            {selectedCountry &&
                                (
                                    states[selectedCountry].map((state, index) => (
                                        <option key={index} value={state}>{state}</option>
                                    ))
                                )
                            }
                        </select>
                        <select name="city" id="" className="border-2 border-gray-400 rounded-lg p-2" onChange={handleChange}>
                            <option value="">select city</option>
                            {selectedState && (
                                cities[selectedState].map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))
                            )}
                        </select>
                        <button className="border-2 border-gray-400 rounded-lg p-2">SignUp</button>
                    </form>
                    <div className="flex justify-center">
                        <span>
                            Already have an account
                            <Link to="/signin" className="ml-5">SignIn</Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;