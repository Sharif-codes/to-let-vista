import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price, property }) => {
  const { user } = useAuth()
  console.log(user);
  const [clientSecret, setClientSecret] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const stripe = useStripe()
  const element = useElements()
  const axiosSecure = useAxiosSecure()
  const navigate= useNavigate()
  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price: price })
      .then(res => {
        setClientSecret(res.data.ClientSecret);
      })
  }, [axiosSecure, price])
  console.log("amount of pirice is :", price);

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !element) {
      return
    }
    const card = element.getElement(CardElement)
    if (card == null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card
    })
    if (error) {
      toast.error(error.message)
    }
    else {
      console.log("paymet method:", paymentMethod);
    }
    const { paymentIntent, cardConfirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email,
          name: user?.displayName || "anonymous",
        }
      }
    })
    if (cardConfirmError) {
      console.log("card confirm error");

    }
    else {
      console.log("success payment!", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id: ",);
        console.log("Time: ", paymentIntent.created);
        toast.success("Payment Recieved successfully!")
        setTransactionId(paymentIntent.id)

        //save payment info in to the database
        const paymentInfo = {
          email: user?.email,
          bookingID: property._id,
          propertyID: property.roomID,
          name: user?.displayName,
          price: price,
          TransactionId: paymentIntent.id,
          time: paymentIntent.created
        }
        axiosSecure.post('/payment', paymentInfo)
        .then(res=> {
            console.log(res);
            navigate("/dashboard/bookings")
        })
      }
    }

  }
  return (
    <form onSubmit={handleSubmit} className="w-[350px]">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn w-[350px] bg-rose-400 mt-5" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      {transactionId && <p className="text-sm text-green-600 font-semibold mt-4">Transaction ID: <span className="">{transactionId}</span></p>}
    </form>
  );
};

export default CheckoutForm;