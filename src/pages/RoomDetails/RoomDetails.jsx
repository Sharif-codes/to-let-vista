import { useEffect, useState } from 'react'
import Container from '../../components/Shared/Container'
import { useLoaderData, useParams } from 'react-router-dom'
import Loader from '../../components/Shared/Loader'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/RoomDetails/Header'
import RoomInfo from './RoomInfo'
import RoomReservation from './RoomReservation'



const RoomDetails = () => {
 const room= useLoaderData()
  return (
    <Container>
      {/* <Helmet>
        <title>Stay vista | {room?.title}</title>
      </Helmet> */}
      <div className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col gap-6'>
          <Header room={room}></Header>
        </div>
        <div className=' mt-3'>
          <RoomInfo room={room}></RoomInfo>
          <div className='col-span-3'>
         {/* <RoomReservation room={room}></RoomReservation> */}
          </div>
        </div>
        {/* Calender */}
       
      </div>
    </Container>
  )
}

export default RoomDetails