import { useEffect, useState } from "react";

const MyPaymentTable = ({ payment, index }) => {
    const [formattedDateTime, setFormattedDateTime] = useState(null);
   

    useEffect(() => {
        const timestamp = payment?.time * 1000; // Convert seconds to milliseconds
        const dateObject = new Date(timestamp);
    
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short',
        };
    
        const formattedDateTime = dateObject.toLocaleString('en-US', options);
        setFormattedDateTime(formattedDateTime);
      }, [payment?.time]);
    
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{payment?.bookingID}</td>
            <td>{payment?.propertyID}</td>
            <td>{payment?.TransactionId}</td>
            <td>{payment?.price} TK</td>
            <td>{formattedDateTime}</td>
        </tr>
    );
};

export default MyPaymentTable;