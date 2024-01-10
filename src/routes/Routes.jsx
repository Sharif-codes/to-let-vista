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
import MyPayments from '../pages/Dashboard/MemberPage/MyPayments/MyPayments'
import AcceptedBookings from '../pages/Dashboard/AdminPage/AllAcceptedBooking/acceptedBookings'
import OwnerStat from '../pages/Dashboard/OwnerPage/OwnerStat/OwnerStat'
import AdminStat from '../pages/Dashboard/AdminPage/AdminStats/AdminStat'
import Ownership from '../pages/Dashboard/MemberPage/Ownership/Ownership'
import OwnershipRequest from '../pages/Dashboard/AdminPage/OwnershipRequest/OwnershipRequest'
import UserManage from '../pages/Dashboard/AdminPage/UserManage/UserManage'
import UpdateProperty from '../pages/Dashboard/CommonPage/Profile/UpdateProperty/UpdateProperty'


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
      {
        path: 'adminStat',
        element: <AdminStat></AdminStat>
      },
      {
        path: "ownershipReq",
        element: <OwnershipRequest></OwnershipRequest>
      },
      {
        path: "userManage",
        element: <UserManage></UserManage>
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
      {
        path:'allBookings',
        element: <AcceptedBookings></AcceptedBookings>
      },
      {
        path: 'ownerStat',
        element: <OwnerStat></OwnerStat>
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
      {
        path: "memberPayment",
        element: <MyPayments></MyPayments>
      },
      {
        path:"ownershipApply",
        element: <Ownership></Ownership>
      },
      //common route
      {
        index: true,
        element: <Profile></Profile>
      },
      {
        path:"profile",
        element: <Profile></Profile>
      },
      {
        path: "updateProperty",
        element: <UpdateProperty></UpdateProperty>
      }
      
    ]
  }
])
