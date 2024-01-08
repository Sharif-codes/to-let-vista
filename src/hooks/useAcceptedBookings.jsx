import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAcceptedBookings = () => {
    const axiosSecure= useAxiosSecure()
   const {data}=useQuery({
    queryKey: ["allAcceptedBookings"],
    queryFn: async ()=>{
        const res= await axiosSecure.get('/allAcceptedBookings')
        return res.data
    }
   })
   return data
};

export default useAcceptedBookings;