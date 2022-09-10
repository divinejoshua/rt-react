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
    const setAccessToken = (access_token) =>{
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
        setauthToken(access_token)
    }






    // Axios interceptors
    axios.interceptors.response.use(null, (error) => { 
    if (error.config && error.response && error.response.status === 401) {
        setLoading(false)
        // if (!authToken){ return }

        if (error.config.url == "/accounts/auth/token/refresh/") { 
            setauthToken(null)
            localStorage.setItem('refresh', null)
            return navigate("/accounts/login", { from: pathname }, { replace: true })
        }

        return getNewAccessToken().then(() => {
            console.log(authToken)
            error.config.headers.Authorization = `Bearer ${authToken}`
            // axios.request(error.config);
            return
        })
       

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

    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}