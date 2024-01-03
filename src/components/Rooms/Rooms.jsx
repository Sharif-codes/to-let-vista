import { useEffect, useState } from "react";
import Cards from "./Cards";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from '../Shared/Loader'
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SelectSearch from "react-select-search";
import 'react-select-search/style.css'

const Rooms = () => {
    const [selectedCity, setSelectedCity] = useState("")
    const [searchCity, setSearchCity] = useState("")
    const [rooms, setRooms] = useState([])
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    const [loader, setLoader] = useState(false)
    const axiosSecure = useAxiosSecure()

    const options = [
        { name: 'See All', value: null },
        { name: 'Dhaka', value: 'Dhaka' },
        { name: 'Chattagram', value: 'Chittagong' },
        { name: 'Cumilla', value: 'Cumilla' },
        { name: 'Sylhet', value: 'Sylhet' },
        { name: 'Mymenshingh', value: 'Mymenshingh' },
        { name: 'Khulna', value: 'Khulna' },
        { name: 'Rajshahi', value: 'Rajshahi' },
        { name: 'Rangpur', value: 'Rangpur' }]
    const handleSearch = (e) => {
        e.preventDefault()
        setSearchCity(selectedCity)
        console.log("search value:", selectedCity);
    }

    useEffect(() => {
        setLoader(true)
        axiosSecure.get(`/property`)
            .then(res => {
                console.log(res);
                const data = res?.data

                if (category) {
                    const filteredRoom = data?.filter(room => room.category === category)
                    if (searchCity) {
                        const filterCity = filteredRoom?.filter(room => room.city === searchCity)
                        setRooms(filterCity)
                    }
                    else{
                        setRooms(filteredRoom)
                    }
                    
                }
                if (searchCity) {
                    const filterCity = data?.filter(room => room.city === searchCity)
                   
                    if(category)
                    {
                        const filteredCategory = filterCity?.filter(room => room.category === category)
                        setRooms(filteredCategory)
                    }
                    else{
                        setRooms(filterCity)
                    }
                }
                else {
                    setRooms(data)
                }
                setLoader(false)
            })
    }, [category, axiosSecure, searchCity])
    if (loader) {
        return <Loader></Loader>
    }
    return (
        <Container>
            <form onSubmit={handleSearch} className="flex justify-center mt-4">
                <SelectSearch
                    options={options}
                    value={selectedCity}
                    onChange={(value) => setSelectedCity(value)}
                    name="city"
                    placeholder="Choose your city"
                    search
                />
                <button type="submit" className="btn btn-primary ml-2">
                    Search
                </button>
            </form>

            {rooms && rooms.length > 0 ? <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8" >
                {
                    rooms?.map(item => <Cards key={item._id} room={item}></Cards>)
                }
            </div> : <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                <Heading center={true} title="No Rooms AvailableIn This Category" subtitle={"Please select other category"}></Heading>
            </div>}
        </Container>
    );
};

export default Rooms;