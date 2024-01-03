import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import { getAllProperty, getSingleProperty } from '../api/property'
import DashboardLayout from '../layouts/DashboardLayout'
import AddProperty from '../pages/Dashboard/OwnerPage/AddProperty'
import MyProperty from '../pages/Dashboard/OwnerPage/MyProperty/MyProperty'
import MyBookings from '../pages/Dashboard/MemberPage/MyBookings/MyBookings'
import BookRequest from '../pages/Dashboard/OwnerPage/BookingReq/BookRequest'
import AllBookings from '../pages/Dashboard/AdminPage/AllBookings/AllBookings'
import AllProperty from '../pages/Dashboard/AdminPage/AllProperty/AllProperty'
import ToLetRequest from '../pages/Dashboard/AdminPage/ToLetRequest/ToLetRequest'
import BookingDetails from '../pages/Dashboard/AdminPage/AllBookings/BookingDetails'
import Profile from '../pages/Dashboard/CommonPage/Profile/Profile'
import Payment from '../components/Payment/Payment'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
     
      },
      { 
      path: '/room/:id', 
      element: <PrivateRoute> <RoomDetails /></PrivateRoute>,
      loader: ({params})=> getSingleProperty(params.id)
     },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children:[
      //admin routes
      {
        path: 'Allproperties',
        element: <AllProperty></AllProperty>
      },
      {
        path: 'AllBookRequest',
        element: <AllBookings></AllBookings>
      },
      {
        path: 'allToLet',
        element: <ToLetRequest></ToLetRequest>
      },
      {
        path: 'bookingDetails',
        element: <BookingDetails></BookingDetails>
      },
      //owner routes
      {
        path:'addProperty',
        element: <AddProperty></AddProperty>
      },
      {
        path: 'myProperty',
        element: <MyProperty></MyProperty>
      },
      {
        path: 'bookRequest',
        element: <BookRequest></BookRequest>
      },
     
      //member routes
      {
        path:  'bookings',
        element: <MyBookings></MyBookings>
      },
      {
       path: "payment",
       element: <Payment></Payment>
      },
      //common route
      {
        path: "profile",
        element: <Profile></Profile>
      }
    ]
  }
])
