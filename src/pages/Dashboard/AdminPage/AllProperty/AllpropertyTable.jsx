import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const AllpropertyTable = ({property,index,refetch}) => {
    const axiosSecure= useAxiosSecure()
    const handleDelete=(id)=>{
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
                axiosSecure.delete(`/deleteProperty/${id}`)
                    .then(res => {
                        if(res.data.deletedCount>0)
                        {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                        })
                        refetch()
                        }
                });
            }
        });
    }
    return (
        <tr>
            <th>{index +1}</th>
            <th>{property.city}</th>
            <td>{property.house}</td>
            <td>{property.floor}</td>
            <td>{property.category}</td>
            <td>{property.type}</td>
            <td>{property.rent}Tk.</td>
            <td>{property.service}Tk.</td>
            <td>{property.status}</td>
            <td><Link to="/dashboard/updateProperty" state={property}><button  className="btn btn-primary">Update</button></Link> <button onClick={()=>handleDelete(property._id)} className="btn btn-secondary">Delete</button></td>
        </tr>

    );
};

export default AllpropertyTable;