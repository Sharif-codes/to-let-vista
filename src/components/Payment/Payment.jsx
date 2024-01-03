import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {
    const location = useLocation();
    const paymentInfo = location.state
    const service = parseInt(paymentInfo?.service)
    const rent = paymentInfo?.rent
    const advance = paymentInfo?.advance
    const netRent = rent * advance
    const Total = netRent + service
    const stripepromise = loadStripe(import.meta.env.VITE_payment_key)
    return (
        <div>
            <div className="flex justify-center md:mt-28 mt-5">
                <div className="bg-green-100 p-5 rounded-md space-y-5">
                    {/* <p className="bg-green-200">Rent: {paymentInfo.rent} Rent</p>
                <p>Service Charge: {paymentInfo.service} Tk</p>
                <p>Advance: {paymentInfo.advance} Month</p> */}
                    <p className="bg-green-200 text-rose-500 w-fit px-2">Payable amount: {Total} TK</p>
                    <div className="mt-2">
                        <Elements stripe={stripepromise}>
                            <CheckoutForm price={Total} property={paymentInfo}></CheckoutForm>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;