import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import BookingTable from "./BookingTable";


const MyBookings = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const email = user?.email
    const { data } = useQuery({
        queryKey: ["myBookings", email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myBookings/${email}`)
            return res.data
        }
    })

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category</th>
                        <th>House No.</th>
                        <th>Floor</th>
                        <th>Location</th>
                        <th>City</th>
                        <th>Rent</th>
                        <th>Service Charge</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, idx) => <BookingTable key={idx} book={item} index={idx}></BookingTable>)}
                </tbody>
            </table>
        </div>
    );
};

export default MyBookings;