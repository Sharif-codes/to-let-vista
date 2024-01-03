import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useOwner = () => {
    const axiosSecure= useAxiosSecure()
    const {user}= useAuth()
    const {data: isOwner, isPending: isOwnerLoading}= useQuery({
        queryKey: [user?.email, "isOwner"],
        queryFn: async()=>{
            const res= await axiosSecure.get(`/user/owner/${user.email}`)
            console.log(res.data)
            return res.data?.owner
        }
       })
       return [isOwner,isOwnerLoading]
};

export default useOwner;