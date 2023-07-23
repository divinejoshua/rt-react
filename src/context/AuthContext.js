import { createContext, useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";


const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    let [authToken, setauthToken] = useState(null)
    let [loading, setLoading] = useState(true)


    // Pathname
    const { pathname }  = useLocation()   

    // Use navigate 
    const navigate = useNavigate();

   
   
    // Get a new access tokn 
    const getNewAccessToken = async () =>{
        try {
            setLoading(true)

            // NOTE: Check for the refresh token from localStorage. If it is null, create a random string value 
            let response = await axios.post("/accounts/auth/token/refresh/", {'refresh': localStorage.getItem('refresh') ? localStorage.getItem('refresh') : "none"})
          
            // Set the auth token 
            setAccessToken(response.data.access).then(() =>{
                setLoading(false)
              
            })
            
        }
        catch (error){
           console.log("An error occured while geting auth token")
           setLoading(false)

        }

    }




    // Set Access token 
    const setAccessToken = async (access_token) =>{
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
        setauthToken(access_token)
    }


        // Axios interceptors
     axios.interceptors.response.use(null, (error) => { 
        if (error.config && error.response && error.response.status === 401) {
            setLoading(false)
            axios.defaults.headers.common['Authorization'] = null
            setauthToken(null)

            // If there is no auth token 
             // NOTE: Check for the refresh token from localStorage. If it is null, create a random string value 
            if (!authToken){ return navigate("/accounts/login", { from: pathname }, { replace: true }) }

                // Check if the error is coming from the refresh token api 
            if (error.config.url === "/accounts/auth/token/refresh/",  {'refresh': localStorage.getItem('refresh') ? localStorage.getItem('refresh') : "none"}) { 
                localStorage.setItem('refresh', null)
                // return navigate("/accounts/login", { from: pathname }, { replace: true })
            }

        }
        
        return Promise.reject(error);

});




    let contextData = {
        authToken:authToken,
        loading:loading,
        setAccessToken:setAccessToken
    }






    useEffect(()=> {
        if(!authToken && loading){
            getNewAccessToken()
        } else {
        }

    }, [pathname])


    //  Refresh for access token every 2 minutes
    useEffect(()=> {
  

    }, [pathname])




    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}