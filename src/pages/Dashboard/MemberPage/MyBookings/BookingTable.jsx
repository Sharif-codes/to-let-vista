import React, { useState } from 'react';
import BookingModal from '../../../../components/Modal/BookingModal';
import { Link } from 'react-router-dom';

const BookingTable = ({ book, index }) => {
    const [isOpen,setIsOpen]=useState(true)

    const {roomID,title,category,type,city,location,house,floor,bedrooms,bathrooms,rent,advance,service,image,host_name,host_pic,host_email,status,claimer}=book

  
 
    return (
        <tr>
            <th>{index+1}</th>
            <td>{category}</td>
            <td>{house}</td>
            <td>{floor}</td>
            <td>{location}</td>
            <td>{city}</td>
            <td>{rent}Tk.</td>
            <td>{service}Tk.</td>
            <td className='text-red-600' >{status==="requested"?"waiting for response": status=="accepted"?"pay to confirm": status=="booked"?"Booked successfully":""}</td>
            <td >{status==="accepted"?<Link to='/dashboard/payment' state={book}><button className='btn btn-success'>Pay Now</button></Link>:"Booked" } </td>
        </tr>
    );
};

export default BookingTable;