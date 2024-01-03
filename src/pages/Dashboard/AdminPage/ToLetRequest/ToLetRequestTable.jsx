import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const ToLetRequestTable = ({toLet,index,refetch}) => {
    const axiosSecure=useAxiosSecure()
    const handleAcceptReq= async (id)=>{
        const res= await axiosSecure.post(`/acceptToLetRequest/${id}`)
        if(res.data.modifiedCount> 0)
        {
            toast.success("To-Let added successfully!")
           
        }
        refetch
    }
const handleRejectReq= async (id)=>
{
    const res= await axiosSecure.post(`/rejectToLetRequest/${id}`)
    if(res.data.deletedCount>0)
    {
        toast.success("To-Let request rejected")
    }
    refetch
}
    return (
        <tr>
            <th>{index+1}</th>
            <td>{toLet?.host_name}</td>
            <td>{toLet?.host_email}</td>
            <td>{toLet?.house}</td>
            <td>{toLet?.floor}</td>
            <td>{toLet?.category}</td>
            <td>{toLet?.type}</td>
            <td>{toLet?.rent}</td>
            <td>{toLet?.status==="requested"?<><button onClick={()=>handleAcceptReq(toLet._id)} className="btn btn-success">Accept</button>  <button onClick={()=>handleRejectReq(toLet._id)} className="btn btn-secondary">Reject</button></>: "Request accepted"}</td>
           
        </tr>
    );
};

export default ToLetRequestTable;