import { createContext, useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";


const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    let [authToken, setauthToken] = useState(null)
    let [loading, setLoading] = useState(true)


    Pathname
    const { pathname }  = useLocation()   

    // Use navigate 
    const navigate = useNavigate();

   
    let contextData = {
        authToken:authToken,
    }

    const getNewAccessToken = async () =>{
        try {
            
            let response = await axios.post("/accounts/auth/token/refresh/", {'refresh': localStorage.getItem('refresh')})
            setauthToken(response.data.access).then(() =>{
                setLoading(false)
            })
            
        }
        catch (error){
           console.log("An error occured while geting auth token")
           setLoading(false)


        }
       

    }

    axios.interceptors.response.use(null, (error) => { 
    if (error.config && error.response && error.response.status === 401) {
        console.log("e don happen")

        if (!authToken){ return  navigate("/accounts/login", { from: pathname }, { replace: true })}

        // if (error.config.url == "/accounts/auth/token/refresh/") { 
        //     dispatch(registerAccessToken(null))
        //         // dispatch(registerAccess_token_loader(false))
        //     console.log("God is good")
        //     localStorage.setItem('refresh', null)
        //     return navigate("/accounts/login", { from: pathname }, { replace: true })
        // }

        // let response = axios.post("/accounts/auth/token/refresh/", {'refresh': localStorage.getItem('refresh')})
        // dispatch(registerAccessToken(response.data.access))
        // console.log("yooo")
        // error.config.headers.Authorization = `Bearer ${access_token}`
        // return axios.request(error.config);

    }
});



    useEffect(()=> {
        if(!authToken){
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