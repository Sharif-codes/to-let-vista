import { useLocation } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect, useState,useRef } from "react";

import { useReactToPrint } from "react-to-print";
import toast from "react-hot-toast";

const BookingReport = () => {
    const [payment, setPayment] = useState([])
    const [formattedDateTime, setFormattedDateTime] = useState(null);
    const axiosSecure = useAxiosSecure()
    const location = useLocation();
    const data = location.state
   const componentPDF=useRef()
    axiosSecure.get(`/getBooking/${data?._id}`)
        .then(res => setPayment(res.data))
        useEffect(() => {
            const timestamp = payment?.time * 1000; // Convert seconds to milliseconds
            const dateObject = new Date(timestamp);
    
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            };
            const formattedDateTime = dateObject.toLocaleString('en-US', options);
            setFormattedDateTime(formattedDateTime);
        }, [payment?.time]);

        const generatePDF= useReactToPrint({
            content: ()=> componentPDF.current, documentTitle:"Booking_Report",
            onAfterPrint:()=> toast.success("Report Generated")
        })
    return (
        <div>
            <div ref={componentPDF} style={{width:'100%'}}>
            <div className=" mt-5 bg-rose-100 p-5 rounded-lg">
                <h2 className="text-center text-2xl font-bold text-rose-600">Booking Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white p-1">Booking ID</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{payment?.bookingID}</p>
                    </div>

                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Amount</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{payment?.price} Tk</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Transaction ID</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{payment?.TransactionId}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Date & Time</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{formattedDateTime}</p>
                    </div>
                </div>
            </div>
            <div className=" bg-rose-100 mt-5 p-5 rounded-lg">
                <h2 className="text-center text-2xl font-bold text-rose-600">Property Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white p-1">Property Title</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.title}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Category</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.category}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Type</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.type}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">City</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.city}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Location</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.location}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">house No.</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.house}</p>
                    </div>

                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Floor</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.floor}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Total Room</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.bedrooms}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Bath Rooms</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.bathrooms}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Rent</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.rent} TK</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Service Charge</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.service} TK</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Min. Advance</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.advance} Month</p>
                    </div>
                </div>
            </div>
            <div className=" mt-5 bg-rose-100 p-5 rounded-lg">
                <h2 className="text-center text-2xl font-bold text-rose-600">Owner Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">

                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white p-1">Name</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.host_name}</p>
                    </div>

                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Email</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.host_email}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Posted Date</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.posted_date}</p>
                    </div>
                </div>
            </div>
            <div className=" mt-5 bg-rose-100 p-5 rounded-lg">
                <h2 className="text-center text-2xl font-bold text-rose-600">Renter Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white p-1">Name</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.claimerInfo?.name}</p>
                    </div>

                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Birth Place</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.claimerInfo?.address}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">NID</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.claimerInfo?.nid}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Profession</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.claimerInfo?.profession}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Mobile</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.claimerInfo?.mobile}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold bg-purple-400 text-white">Email</p>
                        <p className="text-sm bg-slate-200 p-3 h-16 ">{data?.claimer}</p>
                    </div>
                </div>

            </div>
            </div>
            <div className="flex justify-center mt-5">
                <button onClick={generatePDF} className="btn btn-success">Generate Report</button>
            </div>
        </div>
    );
};

export default BookingReport;