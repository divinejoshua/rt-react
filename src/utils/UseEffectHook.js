import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { registerAccessToken, registerAccess_token_loader } from '../redux/auth';
import { useSelector } from 'react-redux'
import axios from "../api/axios";
import { useLocation, useNavigate } from "react-router-dom";


const UseEffectHook = () => {


    const { pathname }  = useLocation()   
    
    // Use navigate 
    const navigate = useNavigate();

     // Redux 
    const dispatch = useDispatch()
    const access_token = useSelector((state) => state.userAccessToken.access_token)
    const access_token_loader = useSelector((state) => state.userAccessToken.access_token_loader)

     const getNewAccessToken = async () =>{
         try {
             let response = await axios.post("/accounts/auth/token/refresh/", {'refresh': localStorage.getItem('refresh')})
             dispatch(registerAccessToken(response.data.access)).then(() =>{
                dispatch(registerAccess_token_loader(false))
             })
             
         }
         catch (error){
            if(error?.response?.status == 401 || error?.response?.status == 400){
                navigate("/accounts/login", { from: pathname }, { replace: true });
            }

         }
        
         
     }



    // Use Effect hook 
    useEffect(() => {
        console.log(pathname)

        if(!access_token){
            getNewAccessToken()
        } else {
            console.log("access token")
        }
        // refreshToken()
        return () => {
    
        // Scroll to top for all pages
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }
    }, [pathname])

    
   
    return null;
}
 
export default UseEffectHook;