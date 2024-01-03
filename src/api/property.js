import axiosSecure from "."

export const getAllProperty= async ()=>{
    const {data}= await axiosSecure('/property')
    return data
}
// get single data api
export const getSingleProperty= async (id)=>{
    const {data}= await axiosSecure(`/Singleproperty/${id}`)
    return data
}