import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../utils/Api";

const Signin = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({ email: "", password: "" });

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setData(({ ...data, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(data);
        try {
            const res = await userLogin(data);
            alert(res.data.message);
            if (res.data.user.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/user");
            }
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <>
            <div className="flex flex-col items-center space-y-5 py-5">
                <div className="flex justify-center mt-10 w-full">
                    <h1 className="text-2xl">SignIn</h1>
                </div>
                <div className="w-full px-52 space-y-5">
                    <form action="" className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                        <input type="text" name="email" value={data.email} id="" onChange={handleChange} placeholder="Enter your mail" className="border-2 border-gray-400 rounded-lg p-2" />
                        <input type="password" name="password" value={data.password} id="" onChange={handleChange} placeholder="Enter your password" className="border-2 border-gray-400 rounded-lg p-2" />
                        <button className="border-2 border-gray-400 rounded-lg p-2">SignIn</button>
                    </form>
                    <div className="flex justify-center">
                        <span>
                            dont't have a account <Link to="/signup" className="ml-5">SignUp</Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;