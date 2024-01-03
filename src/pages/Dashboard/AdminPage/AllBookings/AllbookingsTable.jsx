
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const AllbookingsTable = ({bookings,index}) => {
    // const axiosSecure=useAxiosSecure()
    // const handleAcceptReq= async (id)=>{
    //     await axiosSecure.patch(`/acceptRequest/${id}`)
    //     .then(res=> console.log(res.data))
    // }
    return (
        <tr>
            <th>{index+1}</th>
            <th>{bookings.city}</th>
            <th>{bookings.location}</th>
            <th>{bookings.host_name}</th>
            <td>{bookings.house}</td>
            <td>{bookings.floor}</td>
            <td>{bookings.category}</td>
           <Link to="/dashboard/bookingDetails" state={bookings}> <td><button className="btn btn-success text-white">See Details</button></td></Link>
            {/* <td>{bookings.status==="requested"?<><button onClick={()=>handleAcceptReq(bookings._id)} className="btn btn-success">Accept</button>  <button className="btn btn-secondary">Reject</button></>: "Request accepted"}</td> */}
        </tr>
    );
};

export default AllbookingsTable;