import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <div className="flex flex-col">
                <Link to="/signup" className="p-3 underline underline-offset-4">SignUp</Link>
                <Link to="signin" className="p-3 underline underline-offset-4">SignIn</Link>
            </div>
        </>
    );
};

export default Home;