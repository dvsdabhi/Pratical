import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUser, updateUser } from "../utils/Api";

const UpdateUser = () => {
    const params = useParams();
    const [data, setData] = useState({ name: "", country: "", state: "", city: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    }

    const getUserDetails = async () => {
        try {
            const user = await getSingleUser(params.id);
            console.log(user);
            setData(user.data.user);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getUserDetails();
    }, []);

    const updateUserDetail = async (e) => {
        e.preventDefault();
        const user = await updateUser(params.id, data);
        console.log(user);
    }

    console.log(data);
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="p-2">
                    <h1 className="text-xl">UpdateUser</h1>
                </div>
                <div>
                    <form action="" onSubmit={updateUserDetail} className="flex flex-col space-y-5">
                        <input type="text" name="name" value={data.name} onChange={handleChange} className="p-2 border-2 border-black" placeholder="enter your name" />
                        <input type="text" name="email" value={data.email} onChange={handleChange} className="p-2 border-2 border-black" disabled />
                        <input type="text" name="country" value={data.country} onChange={handleChange} className="p-2 border-2 border-black" placeholder="enter your country" />
                        <input type="text" name="state" value={data.state} onChange={handleChange} className="p-2 border-2 border-black" placeholder="enter your state" />
                        <input type="text" name="city" value={data.city} onChange={handleChange} className="p-2 border-2 border-black" placeholder="enter your city" />
                        <button className="border-2 rounded-lg p-2 bg-blue-400">Update</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateUser;