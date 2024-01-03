import useAuth from "../hooks/useAuth";
import Loader from "../components/Shared/Loader";

import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const location= useLocation()
    const {user,loading}=useAuth()
    if(loading)
    {
        return <Loader></Loader>
    }
    if(user)
    {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace='true'></Navigate>
};

export default PrivateRoute;