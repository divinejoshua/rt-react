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
            let response = await axios.post("/accounts/auth/token/refresh/", {'refresh': localStorage.getItem('refresh')})
          
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

            if (!authToken){ return navigate("/accounts/login", { from: pathname }, { replace: true }) }

            if (error.config.url == "/accounts/auth/token/refresh/") { 
                localStorage.setItem('refresh', null)
                return navigate("/accounts/login", { from: pathname }, { replace: true })
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
            console.log("access token")
        }

    }, [pathname])


    //  Refresh for access token every 2 minutes
    useEffect(()=> {
        if(!authToken && loading){
            setInterval(function() {

                getNewAccessToken()
            },
            1 * 60 * 1000);

        } else {
            console.log("access token")
        }

    }, [pathname])




    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}