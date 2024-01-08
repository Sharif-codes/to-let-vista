import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import MyPaymentTable from "./MyPaymentTable";


const MyPayments = () => {
    const {user}= useAuth()
    const email= user?.email
    console.log("member payment", email);
    const axiosSucure= useAxiosSecure()
    const {data}= useQuery({
        queryKey:["memberPayment"],
        queryFn: async ()=>{
            const res= await axiosSucure.get(`/memberPayment/${email}`)
            return res.data
        }
    })
    console.log("payment info are", data);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Si</th>
                        <th>Booking ID</th>
                        <th>Property ID</th>
                        <th>Transaction ID</th>
                        <th>Amount</th>
                        <th>Date & Time</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, idx) => <MyPaymentTable key={idx} payment={item} index={idx}></MyPaymentTable>)}
                </tbody>
            </table>
        </div>
    );
};

export default MyPayments;