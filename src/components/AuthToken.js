import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useEffect, useState, useContext} from "react";
import AuthContext from '../context/AuthContext'

export default function AuthToken() {

    let {authToken, loading} = useContext(AuthContext)
    
    // Pathname
    const { pathname }  = useLocation()   

    // Use navigate 
    const navigate = useNavigate();



    //USE EFFECT
    useEffect(() => {
    console.log("AuthToken")

    return () => {
    }
}, [])

    return (
   
        authToken
            ? <Outlet />
            : loading ? "Loading..."
            : navigate("/accounts/login", { from: pathname }, { replace: true })
    );

}
