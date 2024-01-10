import toast from "react-hot-toast";
import useOwner from "../../hooks/useOwner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import { useEffect, useState } from "react";
import useBooking from "../../hooks/useBooking";
import Map from "../../components/Map/Map";
import ShowMap from "./ShowMap";

/* eslint-disable react/prop-types */
const RoomInfo = ({ room }) => {
  const {user}= useAuth()
  const [submitted,setSubmitted]=useState(false)

  const date = new Date(room?.date);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  const formattedDate = `${day}/${month}/${year}`;
  const [isOwner, isOwnerLoading] = useOwner()
  const [isAdmin, isAdminLoading] = useAdmin()

  const [AllBooking,refetch]= useBooking()
  const property= AllBooking?.find(booking => booking.roomID=== room._id )
  let isBooked= false
  if(property?.claimer=== user.email)
  {
    isBooked= true
  }


  console.log("find property",isBooked);
 
  const axiosSecure = useAxiosSecure()
  const { _id, title, category, type, city, location, house, floor, bedrooms, bathrooms, rent, advance, service, image, host_name, host_pic, host_email } = room
  const status = "requested"

  const handleBooking = async (e) => {
    e.preventDefault()
    if (isOwner || isAdmin) {
      toast.error("Booking not allowed for you")
      return
    }
    const form = e.target
    const name = form.name.value
    const address = form.address.value
    const mobile = form.mobile.value
    const nid = form.nid.value
    const profession = form.profession.value
    const claimerInfo = { name, address, mobile, nid, profession }
    const bookingData = { roomID: _id, title, category, type, city, location, house, floor, bedrooms, bathrooms, rent, advance, service, host_name, host_pic, host_email, status, claimer: user?.email, claimerInfo,posted_date:formattedDate }
    console.log(bookingData);
    const res = await axiosSecure.post('/bookingRequest', bookingData)
    if (res.data.insertedId) {
      toast.success("Booking request sent")
      setSubmitted(true)
    }
  }
  
  return (
    <div className="flex gap-12">
      <div className='col-span-4 flex flex-col gap-4 w-[60%]'>
      <div className='flex flex-col gap-2'>
        <div
          className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
        >
          <div>Hosted by {room?.host_name}</div>

          <img
            className='rounded-full'
            height='40'
            width='40'
            alt='Avatar'
            src={room?.
              host_pic}
          />
        </div>
        <div
          className='
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              '
        >
          <div>email:{room.host_email}</div>
          <div>post date: {formattedDate}</div>
        </div>
      </div>
      <hr />
      <h2 className="text-lg font-semibold">Specification</h2>
      <div className="flex gap-3">
        <p className="font-light ">{room?.bedrooms} rooms</p>
        <p className="font-light ">Bedrooms- {room?.bedrooms}</p>
        <p className="font-light ">Bathrooms- {room?.bathrooms}</p>
        <p className="font-light ">Balcony- {room?.balcony}</p>
      </div>
      <hr />
      <h2 className="text-lg font-semibold">Location Info</h2>
      <div className="flex gap-3">
        <p className="font-light ">City- {room?.city}</p>
        <p className="font-light ">Location- {room?.location}</p>
        <p className="font-light ">House- {room?.house}</p>
        <p className="font-light ">Floor- {room?.floor}</p>
      </div>
      <hr />

      <h2 className="text-lg font-semibold ">Rent Info</h2>
      <div className="flex gap-3">
        <p className="font-light ">Rent- {room?.rent}</p>
        <p className="font-light ">Advance- {room?.advance} Month</p>
        <p className="font-light ">Service charge- {room?.service}</p>
      </div>

      {/* Modal starts here */}
      <button disabled={isAdmin || isOwner || isBooked} className="bg-rose-500 btn w-1/2 p-2 mx-auto rounded-xl text-white" onClick={() => document.getElementById('my_modal_2').showModal()}>Book Property</button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
        <form onSubmit={handleBooking} method="dialog" className="card-body">
        <p className="text-rose-500 text-xl font-semibold text-center">Please Fill-up the form carefully!</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter Your Full Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Permanent Address</span>
          </label>
          <input type="text" name="address" placeholder="Enter Your Full Address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile</span>
          </label>
          <input type="number" name="mobile" placeholder="Enter Mobile number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">NID</span>
          </label>
          <input type="number" name="nid" placeholder="Enter 10 digit NID number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profession</span>
          </label>
          <input type="text" name="profession" placeholder="Enter Your professsional details" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button disabled={submitted} className="btn btn-primary">{submitted?"Submitted Successfully": "Submit"}</button>
        </div>
      </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
    <div className="flex items-center justify-center w-[40%]">
      <ShowMap room={room}></ShowMap>
    </div>
    </div>
  )
}

export default RoomInfo