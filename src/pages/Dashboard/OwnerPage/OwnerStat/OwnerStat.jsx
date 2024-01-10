import { Chart } from "react-google-charts";
import useAllProperty from "../../../../hooks/useAllProperty";
import useAuth from "../../../../hooks/useAuth";
import useAcceptedBookings from "../../../../hooks/useAcceptedBookings";

const OwnerStat = () => {

    const totalProperety= useAllProperty()
    const pendingBooking= useAcceptedBookings()
    const {user}= useAuth()
    const email= user?.email
    const myProperty= totalProperety?.filter(item=> item?.host_email==email)
    const myPending= pendingBooking?.filter(item=> item?.host_email==email && item.status== "accepted")
    const myBooking= pendingBooking?.filter(item=> item?.host_email==email && item.status== "booked")
    console.log("my total", myProperty);

    const available= myProperty?.length - (myPending?.length + myBooking?.length)
    const data = [
        ["Task", "Hours per Day"],
        ["Available", available],
        ["Pending",myPending?.length ],
        ["Booked", myBooking?.length],
        
    ];

    return (
        <div>
            <div>
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Property</div>
                        <div className="stat-value text-primary">{myProperty?.length}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Pending Booking</div>
                        <div className="stat-value text-secondary">{myPending?.length}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        </div>
                        <div className="stat-title">Total Booked</div>
                        <div className="stat-value">{myBooking?.length}</div>
                        
                    </div>

                </div>
            </div>
            <Chart
                chartType="PieChart"
                data={data}

                width={"100%"}
                height={"400px"}
            />
        </div>
    );
};

export default OwnerStat;