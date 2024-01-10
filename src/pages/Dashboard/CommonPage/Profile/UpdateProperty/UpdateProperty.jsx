import { useLocation, useNavigate } from "react-router-dom";
import Map from "../../../../../components/Map/Map";
import { useState } from "react";
import useAxiosPublic from "../../../../../hooks/useAxiosPublic";
import useAuth from "../../../../../hooks/useAuth";
import { imgUpload } from "../../../../../api/utils";
import toast from "react-hot-toast";


const UpdateProperty = () => {
    const location = useLocation();
    const data = location.state
    console.log("data",data);


    const [category, setCategory] = useState("")
    const [type, setType] = useState("")
    const [city, setCity] = useState("")
    const [balcony, setBalcony] = useState("")
    const [propertyDetails, setPropertyDetails]= useState([])
    const navigate= useNavigate()

    console.log(propertyDetails);
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleType = e => {
        setType(e.target.value)

    }
    const handleCity = e => {
        setCity(e.target.value)
    }
    const handleBalcony = e => {
        setBalcony(e.target.value)
    }
    const handleAddProperty = async (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const location = form.location.value
        const bedrooms = form.bedrooms.value
        const bathrooms = form.bathrooms.value
        const rent = form.rent.value
        const advance = form.advance.value
        const service = form.service.value
        const img1 = form.image1.files[0]
        const img2 = form.image2.files[0]
        const img3 = form.image3.files[0]
        const house = form.house.value
        const floor = form.floor.value
        const status = "available"
        const date = Date.now()
        try {
            const imageData1 = await imgUpload(img1)
            const image1 = imageData1?.data?.display_url

            const imageData2 = await imgUpload(img2)
            const image2 = imageData2?.data?.display_url

            const imageData3 = await imgUpload(img3)
            const image3 = imageData3?.data?.display_url

            const propertydata = {
                title, category, type, city, location, house, floor, bedrooms, bathrooms, balcony, rent, advance, service, image1,image2,image3, host_name: user.displayName, host_pic: user.photoURL, date, host_email: user.email, status,propertyDetails
            }
            // setPropertyDetails(propertydata)
            console.log("New property: ",propertydata);
            const res = await axiosPublic.patch(`/updateProperty/${data._id}`, propertydata)
            console.log(res.data);
            if (res.data.modifiedCount>0) {
                toast.success("Property Updated!")
                navigate("/dashboard/myProperty")
            }
            console.log(res.data);
        }
        catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <form onSubmit={handleAddProperty} className="w-full max-w-xl">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Title
                        </label>
                        <input name="title" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="give a descent title for advertisement" defaultValue={data.title} />

                    </div>


                </div>

                <div className="flex flex-wrap -mx-3 mb-2">

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Category
                        </label>
                        <div className="relative">
                            <select onChange={handleCategory} name="category" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" defaultValue={data.category}>
                                <option disabled selected>Choose Category</option>
                                <option>Family</option>
                                <option>Sublet</option>
                                <option>Bachelor</option>
                                <option>Office</option>
                                <option>Shop</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Type
                        </label>
                        <div className="relative">
                            <select onChange={handleType} name="type" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option disabled selected>Choose Type</option>
                                <option>Single Room</option>
                                <option>Double Room</option>
                                <option>Flat</option>
                                <option>Bed</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="my-6 flex flex-wrap">
                    <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Upload Image 1
                        </label>
                        <input
                            name="image1"
                            type="file"
                            id='image'
                            accept='image/*'
                            className="file-input file-input-bordered file-input-secondary w-full max-w-lg" />
                    </div>
                    <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Upload Image 2
                        </label>
                        <input
                            name="image2"
                            type="file"
                            id='image'
                            accept='image/*'
                            className="file-input file-input-bordered file-input-secondary w-full max-w-lg" />
                    </div>
                    <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Upload Image 3
                        </label>
                        <input
                            name="image3"
                            type="file"
                            id='image'
                            accept='image/*'
                            className="file-input file-input-bordered file-input-secondary w-full max-w-lg" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            City
                        </label>
                        <div className="relative">
                            <select onChange={handleCity} name="city" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option disabled selected>Select a city</option>
                                <option>Dhaka</option>
                                <option>Chittagong</option>
                                <option>Rajshahi</option>
                                <option>Cumilla</option>
                                <option>Rangpur</option>
                                <option>Sylhet</option>
                                <option>Khulna</option>
                                <option>Mymenshingh</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Location
                        </label>
                        <input name="location" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Enter area name and road no." defaultValue={data.location}/>

                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            House
                        </label>
                        <input name="house" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="House No." defaultValue={data.house} />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Floor
                        </label>
                        <input name="floor" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Floor No." defaultValue={data.floor} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Bedrooms
                        </label>
                        <input name="bedrooms" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="no. of bedrooms" defaultValue={data.bedrooms} />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Bathrooms
                        </label>
                        <input name="bathrooms" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="no. of bathrooms" defaultValue={data.bathrooms} />
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            With Balcony?
                        </label>
                        <div className="relative">
                            <select onChange={handleBalcony} name="balcony" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option disabled selected>Choose</option>
                                <option>Yes</option>
                                <option>No</option>

                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-wrap -mx-3 my-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Room Rent
                        </label>
                        <input name="rent" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="in Tk" defaultValue={data.rent} />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Min Advance (month)
                        </label>
                        <input name="advance" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="No.of month" defaultValue={data.advance} />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            service charge
                        </label>
                        <input name="service" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="in Tk." defaultValue={data.service}/>
                    </div>
                    <div className="m-5">
                        <h2 className="text-lg font-semibold mb-2">Choose Your Location</h2>
                        <Map
                        location={propertyDetails.addressLatLng}
                        onChange={latLng=>{
                            console.log(latLng);
                            setPropertyDetails(latLng)
                        }}
                        ></Map>
                    </div>
                </div>
                <button type="submit" className="bg-rose-500 hover:bg-rose-400 text-white font-bold py-2 px-4 border-b-4 border-rose-700 hover:border-rose-500 rounded">
                    Update Property
                </button>
            </form>

        </div>
    );
};

export default UpdateProperty;