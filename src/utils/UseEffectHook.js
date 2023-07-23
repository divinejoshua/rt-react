import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { registerAccessToken, registerAccess_token_loader } from '../redux/auth';
import { useSelector } from 'react-redux'
import axios from "../api/axios";
import { useLocation, useNavigate } from "react-router-dom";


const UseEffectHook = () => {


    const { pathname }  = useLocation()   
    
     // Redux 


      // Use Effect hook 
      useEffect(() => {
        return () => {
        // Scroll to top for all pages
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }
    }, [pathname])




    
   
    return null;
}
 


 


export default UseEffectHook;