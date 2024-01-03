/* eslint-disable react/prop-types */
import { differenceInDays, parseISO } from 'date-fns';
import Button from '../../components/Button/Button';
import Calendar from './Calendar'
import { useState } from 'react';
import formatDistance from 'date-fns/formatDistance';

const RoomReservation = ({ room }) => {

    // const dateOn= parseISO(room?.to)
    // const dateto= parseISO(room?.from)
    // const dayDif= differenceInDays(dateOn,dateto)
    // console.log(dayDif);

    const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)))
    console.log(totalDays)

    // const totalPrice= dayDif * room?.price

    const [value, setValue] = useState({
        startDate: new Date(room?.from),
        endDate: new Date(room?.to),
        key: "selection"

    })

    // console.log(
    //     room.to, room.from
    // )
    // const num= room.to- room.from
    // const dayDif= num/(1000*60*60*24)
    // console.log(dayDif)

    // const toDate= new Date(room.to)
    // const fromDate= new Date(room.from)
    // console.log(toDate, fromDate)

    // const totalPrice =
    // parseFloat(
    //   formatDistance(new Date(room.to), new Date(room.from)).split(
    //     ' '
    //   )[0]
    // ) * room.price
    console.log(room)

    return (
        <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white'>
            <div className='flex items-center gap-1 p-4'>
                <div className='text-2xl font-semibold'>
                    ${room?.price}
                </div>
                <div className="font-light text-neutral-600">per night</div>
            </div>
            <hr />
            <div className='flex justify-center'>
                {/* <Calendar value={value} ></Calendar> */}
            </div><hr />
            <div>
                <Button label={'Reserve'}></Button>
            </div>
            <hr />
            <div className="p-4 flex justify-between items-center font-semibold text-lg">
                <div>Total:</div>
                <div>
                    ${totalDays}
                </div>
            </div>
        </div>
    );
};

export default RoomReservation;