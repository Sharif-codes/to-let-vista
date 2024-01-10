

import { useState } from 'react'
// Components
import Logo from '../../Shared/Logo'
// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAddHome } from "react-icons/md";
import MenuItem from './MenuItem'
import ToggleBtn from '../../Button/ToggleBtn'
import useOwner from '../../../hooks/useOwner'
import useAuth from '../../../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import useMember from '../../../hooks/useMember'
import { FaRegUser } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { FaHistory } from "react-icons/fa";
import { IoMdGitPullRequest } from "react-icons/io";
import useAdmin from '../../../hooks/useAdmin'
import { BsHouseCheck } from "react-icons/bs";
import { RiGroupFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";

const Sidebar = () => {
    const [toggle, setToggle] = useState(false)
    const [isActive, setActive] = useState(false)
    const { logOut } = useAuth()
    const navigate = useNavigate()

    //   For guest/host menu item toggle button
    const toggleHandler = event => {
        setToggle(event.target.checked)
    }
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogout = () => {
        logOut()
        navigate('/login')
    }
    const [isOwner, isOwnerLoading] = useOwner()
    console.log("check owner", isOwner);
    const [isMember, isMemberLoading] = useMember()
    console.log("check member", isMember);
    const [isAdmin, isAdminLoading] = useAdmin()
    console.log("check admin", isAdmin);

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        {/* <Logo /> */}
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
                            {/* <Logo /> */}
                          <Link to="/">  <div className="flex-1 flex items-center">
                                <img className="w-10" src="/logo-casa.svg" alt="" />
                                <p className="ml-2 hidden md:block
                 text-lg md:text-xl font-semibold">To-let<span className="text-info ml-1">Hub</span></p>
                            </div></Link>
                        </div>
                    </div>
                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* If a user is host */}
                        {/* <ToggleBtn toggleHandler={toggleHandler} /> */}
                        {isAdmin &&
                            <>
                                <p className='p-3 bg-rose-400 rounded-xl text-center text-white'>Admin Dashboard</p>
                                <nav>
                                    <MenuItem
                                        icon={IoHomeOutline}
                                        label='All Properties'
                                        address='/dashboard/Allproperties'
                                    ></MenuItem>
                                    <MenuItem
                                        icon={IoHomeOutline}
                                        label='To-Let Request'
                                        address='/dashboard/allToLet'
                                    >
                                    </MenuItem>
                                    <MenuItem
                                        icon={IoMdGitPullRequest}
                                        label='Booking Requests'
                                        address='/dashboard/AllBookRequest'
                                    ></MenuItem>
                                    <MenuItem
                                        icon={BsHouseCheck}
                                        label='Booked Property'
                                        address='/dashboard/allBookings'
                                    />
                                    <MenuItem
                                        icon={BsHouseCheck}
                                        label='Ownership Request'
                                        address='/dashboard/ownershipReq'
                                    />
                                    <MenuItem
                                        icon={HiUsers}
                                        label='Manage User'
                                        address='/dashboard/userManage'
                                    />
                                    <MenuItem
                                        icon={BsGraphUp}
                                        label='Statistics'
                                        address='/dashboard/adminStat'
                                    />
                                </nav></>
                        }
                        {isOwner &&
                            <>
                                <p className='p-3 bg-rose-400 rounded-xl text-center text-white'>Owner Dashboard</p>
                                <nav>
                                    <MenuItem
                                        icon={IoHomeOutline}
                                        label='My Properties'
                                        address='/dashboard/myProperty'
                                    ></MenuItem>
                                    <MenuItem
                                        icon={MdOutlineAddHome}
                                        label='Add Property'
                                        address='/dashboard/addProperty'
                                    ></MenuItem>
                                    <MenuItem
                                        icon={BsHouseCheck}
                                        label='Bookings'
                                        address='/dashboard/bookRequest'
                                    ></MenuItem>
                                    <MenuItem
                                        icon={BsGraphUp}
                                        label='Statistics'
                                        address='/dashboard/ownerStat'
                                    />
                                </nav></>
                        }
                        {
                            isMember && <>
                                <p className='p-3 bg-rose-400 rounded-xl text-center text-white'>Member Dashboard</p>
                                <nav>
                                    <MenuItem
                                        icon={FcHome}
                                        label='My Bookings'
                                        address='/dashboard/bookings'
                                    ></MenuItem>

                                    <MenuItem
                                        icon={FaHistory}
                                        label='Payment History'
                                        address='/dashboard/memberPayment'
                                    ></MenuItem>

                                    <MenuItem
                                        icon={RiGroupFill}
                                        label='Apply for Ownership'
                                        address='/dashboard/ownershipApply'
                                    ></MenuItem>
                                </nav>
                            </>
                        }
                    </div>
                </div>

                <div>
                    <hr />

                    <MenuItem
                        icon={FcSettings}
                        label='Profile'
                        address='/dashboard/profile'
                    />
                    <button onClick={handleLogout} className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar