import { Link } from "react-router-dom";



const AcceptedBookingTable = ({booking, index}) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td>{booking?._id}</td>
            <td>{booking?.city}</td>
            <td>{booking?.location}</td>
            <td>{booking?.house}</td>
           
            <td>{booking?.host_email}</td>
            <td>{booking?.claimer}</td>
            <td>{booking?.rent} TK</td>
           <Link to="/dashboard/report" state={booking}> <td><button className="btn btn-primary">See Details</button></td></Link>
        </tr>
    );
};

export default AcceptedBookingTable;