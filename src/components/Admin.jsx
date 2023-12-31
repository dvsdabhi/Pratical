import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllUser, deleteUser } from "../utils/Api";

const Admin = () => {

    const navigate = useNavigate();

    const [data, setData] = useState();
    const [reload, setReload] = useState();

    const showUser = async () => {
        const res = await AllUser();
        setData(res.data.allUser);
        setReload(false);
    }

    useEffect(() => {
        showUser();
    }, [reload]);

    const onUpdate = (id) => {
        navigate(`/update/${id}`)
    }

    const deletUser = async (id) => {
        const res = await deleteUser(id);
        setReload(true);
        console.log(res);
    }

    return (
        <>
            <div className="flex flex-col items-center w-full">
                <div className="p-3">
                    <h1 className="text-xl">All User</h1>
                </div>
                <div>
                    <table className="mx-2">
                        <thead>
                            <tr className="">
                                <th>Name</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>City</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((user, index) => (
                                <tr className="" key={index}>
                                    <td className="py-2 text-start px-4">{user.name}</td>
                                    <td className="py-2 text-start px-4">{user.email}</td>
                                    <td className="py-2 text-start px-4">{user.country}</td>
                                    <td className="py-2 text-start px-4">{user.state}</td>
                                    <td className="py-2 text-start px-4">{user.city}</td>
                                    <td className="py-2 text-start px-4">
                                        <button className="bg-blue-600 p-2 rounded-lg" onClick={() => onUpdate(user._id)}>Update</button>
                                    </td>
                                    <td className="py-2 text-start px-4">
                                        <button className="bg-red-600 p-2 rounded-lg" onClick={() => deletUser(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Admin;