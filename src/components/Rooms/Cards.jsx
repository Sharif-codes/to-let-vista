/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Cards = ({room}) => {
    return (
      <Link to={`room/${room?._id}`} className='col-span-1 cursor-pointer group'>
        <div className='flex flex-col gap-2 w-full'>
          <div
            className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
          >
            <img
              className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
              src={room.image1}
              alt='Room'
            />
            <div
              className='
              absolute
              top-3
              right-3
            '
            >
            </div>
          </div>
          <div className='font-semibold text-sm'>{room?.title}</div>
          <div className='font-light text-neutral-500'>
          </div>
          <div className='flex flex-row items-center'>
            <div className='font-semibold text-sm'>{room?.location}</div>
            {/* <div className='font-light'>night</div> */}
          </div>
        </div>
      </Link>
    )
  }
  
  export default Cards