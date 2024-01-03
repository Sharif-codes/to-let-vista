import { useState } from "react";
import { imgUpload } from "../../../api/utils";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";


const AddProperty = () => {
    const [category, setCategory] = useState("")
    const [type, setType] = useState("")
    const [city, setCity] = useState("")
    const [balcony, setBalcony] = useState("")

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
        const img = form.image.files[0]
        const house = form.house.value
        const floor = form.floor.value
        const status = "requested"
        const date = Date.now()
        try {
            const imageData = await imgUpload(img)
            const image = imageData?.data?.display_url
            const propertydata = {
                title, category, type, city, location, house, floor, bedrooms, bathrooms, balcony, rent, advance, service, image, host_name: user.displayName, host_pic: user.photoURL, date, host_email: user.email, status
            }
            console.log(propertydata);
            const res = await axiosPublic.post('/ToLetRequest', propertydata)
            if (res.statusText === "OK") {
                toast.success("Request sent to Admin")

            }
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
                        <input name="title" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="give a descent title for advertisement" />

                    </div>


                </div>

                <div className="flex flex-wrap -mx-3 mb-2">

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Category
                        </label>
                        <div className="relative">
                            <select onChange={handleCategory} name="category" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option disabled selected>Choose Category</option>
                                <option>Family</option>
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
                            Upload Image
                        </label>
                        <input
                            name="image"
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
                        <input name="location" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Enter area name and road no." />

                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            House
                        </label>
                        <input name="house" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="House No." />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Floor
                        </label>
                        <input name="floor" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Floor No." />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Bedrooms
                        </label>
                        <input name="bedrooms" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="no. of bedrooms" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Bathrooms
                        </label>
                        <input name="bathrooms" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="no. of bathrooms" />
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
                        <input name="rent" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="in Tk" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Min Advance (month)
                        </label>
                        <input name="advance" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="No.of month" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            service charge
                        </label>
                        <input name="service" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="in Tk." />
                    </div>
                </div>
                <button type="submit" className="bg-rose-500 hover:bg-rose-400 text-white font-bold py-2 px-4 border-b-4 border-rose-700 hover:border-rose-500 rounded">
                    Add Property
                </button>
            </form>
        </div>
    );
};

export default AddProperty;