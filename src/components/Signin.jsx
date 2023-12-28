import React from "react";
import { Link } from "react-router-dom";
const Signin = () => {
    return (
        <>
            <div className="flex flex-col items-center space-y-5 py-5">
                <div className="flex justify-center mt-10 w-full">
                    <h1 className="text-2xl">SignIn</h1>
                </div>
                <div className="w-full px-52 space-y-5">
                    <form action="" className="flex flex-col space-y-5">
                        <input type="text" name="" id="" placeholder="Enter your mail" className="border-2 border-gray-400 rounded-lg p-2" />
                        <input type="text" name="" id="" placeholder="Enter your password" className="border-2 border-gray-400 rounded-lg p-2" />
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