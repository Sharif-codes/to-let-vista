import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import AllbookingsTable from "./AllbookingsTable";


const AllBookings = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()
  const { data } = useQuery({
    queryKey: ["AllbookingRequest"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/AllbookingRequest`)
      return res.data
    }
  })
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Serial</th>
            <th>City</th>
            <th>Location</th>
            <th>Owner</th>
            <th>House No.</th>
            <th>Floor</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, idx) => <AllbookingsTable key={idx} bookings={item} index={idx}></AllbookingsTable>)}
        </tbody>
      </table>
    </div>
  );
};

export default AllBookings;