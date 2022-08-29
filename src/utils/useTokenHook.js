import axios from "../api/axios";
import { useDispatch } from 'react-redux'
import { registerAccessToken } from '../redux/auth';


const useToken = () => {

    // Redux 
    const dispatch = useDispatch()

    const getNewAccessToken = async () =>{
        try {
            let response = await axios.post("/accounts/auth/token/refresh/", {'refresh': localStorage.getItem('refresh')})
            dispatch(registerAccessToken(response.data.access))
        }
        catch {
            console.log("An error occured")
        }
       
        
    }
    
    return { getNewAccessToken };
}
 
export default useToken;