import axios from "axios";

// new user signup function
export const createUser = async(data) => {
    const res = await axios.post("http://localhost:8080/api/user/signup",data);
    return res;
};

// new user signin function
export const userLogin = async(data) => {
    const res = await axios.post("http://localhost:8080/api/user/signin",data);
    return res;
};

// Get all user logic.
export const AllUser = async() => {
    const res = await axios.get("http://localhost:8080/api/user/allUser");
    return res;
}

export const getSingleUser = async(id)=>{
    const res = await axios.get(`http://localhost:8080/api/user/singleUser/${id}`);
    return res;
}

export const updateUser = async(id,data)=>{
    const res = await axios.put(`http://localhost:8080/api/user/update/${id}`,data);
    return res;
}

export const deleteUser = async(id)=>{
    const res = await axios.delete(`http://localhost:8080/api/user/delete/${id}`);
    return res;
}