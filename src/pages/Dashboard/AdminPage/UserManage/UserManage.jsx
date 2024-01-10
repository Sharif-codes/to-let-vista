import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import UserTable from "./UserTable";


const UserManage = () => {
    const [users,setUser]= useState([])
    const axiosSecure= useAxiosSecure()
    axiosSecure.get("/getUser")
    .then(res=> setUser(res.data))
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Si</th>
                        <th>User Id</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((item, idx) => <UserTable key={idx} user={item} index={idx}></UserTable>)}
                </tbody>
            </table>
        </div>
    );
};

export default UserManage;