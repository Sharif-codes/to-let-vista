import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { id } from "date-fns/locale";


const BookingDetails = () => {
    const navigate= useNavigate()
    const location = useLocation()
    const data = location.state
    console.log(data);
    const axiosSecure = useAxiosSecure()
    const handleAccept = (id) => {
        axiosSecure.post(`/booking/accept/${id}`)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success("Request Accepted")
                    navigate("/dashboard/AllBookRequest")
                }
              
            })
    }
    const handleReject= (id)=>{
        axiosSecure.post(`/booking/reject/${id}`)
        .then(res=>{
            if(res.data.deletedCount)
            {
                toast.success("Rejected Booking request")
                navigate("/dashboard/AllBookRequest")
            }
        })
    }

    //     const date = new Date(data?.date);
    //   const day = date.getDate().toString().padStart(2, '0');
    //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
    //   const year = date.getFullYear().toString().slice(-2);
    //   const formattedDate = `${day}/${month}/${year}`;
    return (
        <div>
            {/* <div className="flex justify-center">
                <p className="text-2xl font-bold text-rose-600">Booking Request</p>
            </div> */}
            <div className=" bg-rose-100 p-5 rounded-lg">
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
            <h2 className="text-center text-2xl font-bold text-rose-600 my-5">Action</h2>
            <div className="flex justify-center gap-5">

                <button onClick={() => handleAccept(data?._id)} className="btn btn-success text-white">Accept Request</button>
                <button onClick={() => handleReject(data?._id)} className="btn btn-secondary">Reject Request</button>
            </div>

        </div>
    );
};

export default BookingDetails;