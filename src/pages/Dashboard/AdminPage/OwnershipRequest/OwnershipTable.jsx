import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const OwnershipTable = ({book,index}) => {
    const axiosSecure= useAxiosSecure()
   
    const handleAcceptReq= ()=>{
        axiosSecure.patch(`/acceptOwnershipReq/${book?.email}`)
        .then(res=> {
            if(res.data.modifiedCount>0)
            {
                toast.success("Request Accepted")
            }
        })
    }
    const handleReject= ()=>{
        axiosSecure.delete(`/acceptOwnershipReq/${book?.email}`)
        .then(res=>{
            if(res.data.deletedCount>0)
            {
                toast.success("Request Rejected")
            }
        })
    }
    return (
        <tr>
            <td>{index+1}</td>
            <td><img className="w-10" src={book.photo} alt="" /></td>
            <td>{book.name}</td>
            <td>{book.email}</td>
            <td><button onClick={handleAcceptReq} className="btn btn-success">Accept</button> <button onClick={handleReject} className="btn btn-secondary">Reject</button></td>
            
        </tr>
    );
};

export default OwnershipTable;