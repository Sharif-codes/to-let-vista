import { id } from "date-fns/locale";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const UserTable = ({ user, index }) => {
    const axiosSecure = useAxiosSecure()
    const handleRemove = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteUser/${id}`)
                    .then(res => {
                        console.log(res.data)
                        toast.success("User deleted")
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });


    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{user._id}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td><button onClick={() => handleRemove(user._id)} disabled={user.role === "admin"} className="btn btn-secondary">Remove user</button></td>
        </tr>
    );
};

export default UserTable;