import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";


const Ownership = () => {
    const navigate = useNavigate()
    const {user}= useAuth()
    const email= user?.email
    const name= user?.displayName
    const photo= user?.photoURL

    const axiosSecure= useAxiosSecure()
    const handleApply= ()=>{
        axiosSecure.post(`/ownershipRequest/`,{email,name,photo})
        .then(res=> {
            if(res.data.insertedId)
            {
                toast.success("Ownership Request sent!")
                navigate("/dashboard/profile")
            }
        })
    }
    
    return (
        <div className="space-y-5">
            <p className="text-xl text-red-500 font-semibold text-center mt-10">Warning: <span>You Will lost All progress</span> </p>
           <div className="flex justify-center">
           <button onClick={handleApply} className="btn btn-primary">Send Application</button>
           </div>
        </div>
    );
};

export default Ownership;