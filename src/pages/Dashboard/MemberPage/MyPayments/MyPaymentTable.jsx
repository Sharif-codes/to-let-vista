import { useEffect, useState } from "react";

const MyPaymentTable = ({ payment, index }) => {
    const [formattedDateTime, setFormattedDateTime] = useState('');
    const date = new Date(payment?.date);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    const formattedDate = `${day}/${month}/${year}`;

    useEffect(() => {
        const timestamp = 1703576033 * 1000; // Convert seconds to milliseconds
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
      }, []);
    
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