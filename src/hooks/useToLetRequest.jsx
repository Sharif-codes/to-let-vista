import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useToLetRequest = () => {
    const axiosSecure= useAxiosSecure()
   const {data, refetch}=useQuery({
    queryKey: ["ToLetRequest"],
    queryFn: async ()=>{
        const res= await axiosSecure.get('/ToLetRequest')
        return res.data
    }
   })
   return [data,refetch]
};

export default useToLetRequest;