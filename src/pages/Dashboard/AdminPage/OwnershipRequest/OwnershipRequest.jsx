import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import OwnershipTable from "./OwnershipTable";


const OwnershipRequest = () => {
    const[ownership,setOwnership]=useState([])
    const axiosSecure= useAxiosSecure()
    axiosSecure.get("/ownershipRequest")
    .then(res=> setOwnership(res.data))
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {ownership?.map((item, idx) => <OwnershipTable key={idx} book={item} index={idx}></OwnershipTable>)}
                </tbody>
            </table>
        </div>
    );
};

export default OwnershipRequest;