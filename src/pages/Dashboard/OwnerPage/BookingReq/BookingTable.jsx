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
            <td>{bookings.status==="accepted"? <p className="text-blue-500 font-semibold">Pending for Payment</p> : <p className="text-green-500 font-semibold">Booking complete</p> }</td>
        </tr>
    );
};

export default BookingTable;