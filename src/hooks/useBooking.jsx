import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useBooking = () => {
    const axiosSecure = useAxiosSecure()
    const { data: AllBookings, refetch} = useQuery({
        queryKey: ["Allbookings"],
        queryFn: async () => {
            const res = await axiosSecure.get('/Allbookings')
            return res.data
        }
    })
    return [AllBookings, refetch]
};

export default useBooking;