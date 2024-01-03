
import axios from "axios";
import axiosSecure from ".";
//save user in database
export const saveUser= async user =>{
    const currentUser= {
        email: user.email,
        role: 'member',
        status: 'verified'
    }
    const {data}= await axios.put(`http://localhost:5000/users/${user.email}`, currentUser)
    return data;
} 

//get token
export const getToken= async email=>{
    const {data}= await axiosSecure.post('/jwt', email)
    console.log('token recieved form server',data);
    return data;
}

//clear token
export const clearCookie = async () =>{
    const {data}= await axiosSecure.get('/logout')
    console.log('token recieved form server',data);
    return data;
}