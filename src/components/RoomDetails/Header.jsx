import Heading from "../Shared/Heading"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Header = ({ room }) => {
  console.log("roomed: ", room);
  return (
    <>
      <Heading title={room.title} subtitle={room.category} type={room.type}  onClickThumb={true}/>
      <div className='w-full overflow-hidden rounded-xl'>
        {/* <img
          className='object-cover w-full'
          src={room?.image1}
          alt='header image'
        /> */}
        <Carousel showArrows={true} autoPlay={true} autoFocus={true} >
                <div className="h-[70vh]">
                    <img className="h-full" src={room?.image1}/>
                    
                </div>
                <div className="h-[70vh]">
                    <img className="h-full" src={room?.image2}/>
                   
                </div>
                <div className="h-[70vh]">
                    <img className="h-full" src={room?.image3} />
                </div>
            </Carousel>
      </div>
    </>
  )
}

export default Header