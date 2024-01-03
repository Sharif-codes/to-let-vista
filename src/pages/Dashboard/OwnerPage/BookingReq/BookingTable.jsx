import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const BookingTable = ({bookings,index}) => {
    const axiosSecure=useAxiosSecure()
    const handleAcceptReq= async (id)=>{
        await axiosSecure.patch(`/acceptRequest/${id}`)
        .then(res=> console.log(res.data))
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td>{bookings.house}</td>
            <td>{bookings.floor}</td>
            <td>{bookings.category}</td>
            <td>{bookings.type}</td>
            <td>{bookings.rent}Tk.</td>
            <td>{bookings.status==="requested"?<><button onClick={()=>handleAcceptReq(bookings._id)} className="btn btn-success">Accept</button>  <button className="btn btn-secondary">Reject</button></>: "Request accepted"}</td>
        </tr>
    );
};

export default BookingTable;