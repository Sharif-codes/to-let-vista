


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
        </tr>
    );
};

export default AcceptedBookingTable;