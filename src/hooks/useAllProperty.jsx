import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllProperty = () => {
    const axiosSecure= useAxiosSecure()
    const {data,refetch}=useQuery({
        queryKey: ["allProperty"],
        queryFn: async ()=>{
            const res= await axiosSecure.get('/allProperty')
            return res.data
        }
    })
    return [data,refetch];
};

export default useAllProperty;