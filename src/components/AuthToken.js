import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState, useContext} from "react";
import AuthContext from '../context/AuthContext'

export default function AuthToken() {

    let {AuthToken} = useContext(AuthContext)

    const access_token_loader = useSelector((state) => state.userAccessToken.access_token_loader)

    // Redux 
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
            : !access_token && access_token_loader ?  'Loading...'
            : ''
    );

}
