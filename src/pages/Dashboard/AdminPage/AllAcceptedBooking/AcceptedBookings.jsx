import useAcceptedBookings from "../../../../hooks/useAcceptedBookings";
import AcceptedBookingTable from "./AcceptedBookingTable";

const AcceptedBookings = () => {
    const allBookings= useAcceptedBookings()
    console.log("booked Rooms xxx", allBookings);
    return (
        <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th>Si</th>
                    <th>Booking ID</th>
                    <th>City</th>
                    <th>Address</th>
                    <th>House</th>
                    <th>Owner Email</th>
                    <th>Renter Email</th>
                    <th>Monthly Rent</th>
                </tr>
            </thead>
            <tbody>
                {allBookings?.map((item, idx) => <AcceptedBookingTable key={idx} booking={item} index={idx}></AcceptedBookingTable>)}
            </tbody>
        </table>
    </div>
    );
};

export default AcceptedBookings;