import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useMember = () => {
    const axiosSecure= useAxiosSecure()
    const {user}= useAuth()
    const {data: isMember, isPending: isMemberLoading}= useQuery({
        queryKey: [user?.email, "isMember"],
        queryFn: async()=>{
            const res= await axiosSecure.get(`/user/member/${user.email}`)
            console.log(res.data)
            return res.data?.member
        }
       })
       return [isMember,isMemberLoading]
};

export default useMember;