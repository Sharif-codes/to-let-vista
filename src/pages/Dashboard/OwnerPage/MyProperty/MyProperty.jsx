import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import PropertyTable from "./PropertyTable"


const MyProperty = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const email = user?.email
    const { data } = useQuery({
        queryKey: ["myProperty", email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myProperties/${email}`)
            return res.data
        }
    })
    console.log(data);
    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>House</th>
                        <th>Floor</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Rent</th>
                        <th>Service Charge</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item,idx)=><PropertyTable key={idx} property={item} index={idx}></PropertyTable>)}
                    
                    </tbody>

            </table>
        </div>

    );
};

export default MyProperty;