import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import axios from "../api/axios";
import { registerAccessToken } from '../redux/auth';


export default function AuthToken() {


    const location = useLocation();
    const [loadingToken, setLoadingToken] = useState(true)

    // Redux 
    const dispatch = useDispatch()
    const access_token = useSelector((state) => state.userAccessToken.access_token)
    


    //USE EFFECT
    useEffect(() => {
    console.log("AuthToken")

    return () => {
    }
}, [])

    return (
   
        access_token 
            ? <Outlet />
            : !access_token && loadingToken ?  'Loading...'
            : !loadingToken &&  !access_token ? <Navigate to="/accounts/login" state={{ from: location }} replace /> 
            : ''
    );

}
