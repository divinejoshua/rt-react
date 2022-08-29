import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { registerGetNewToken } from "./redux/auth";
import { useDispatch } from 'react-redux'


const UseEffectHook = () => {


    const { pathname }  = useLocation()


    // Get New access token if none 
    const refreshToken = () => {
        dispatch(registerGetNewToken()).then(() =>{
            setpageLoad(true)
        })
    }
    



    // Use Effect hook 
    useEffect(() => {
        console.log(pathname)
        return () => {
    
        // Scroll to top for all pages
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }
    }, [pathname])

    
   
    return null;
}
 
export default UseEffectHook;