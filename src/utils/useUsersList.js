import { useState } from "react";
import axios from "../api/axios";

// Get Users list 
const useUsersList = () => {

    // STATES 
    const [data, setdata] = useState(null);
    const [isPending, setisPending] = useState(false);
    const [messageSuccess, setmessageSuccess] = useState(null);
    const [messageError, setmessageError] = useState(null);

    // METHODS 
    const getUsers = async () => {

        setisPending(true);
        setmessageSuccess(null);
        setmessageError(null);

        try{
            // get all users 
            let response = await axios.get("https://dummyjson.com/users")
            setdata(response.data)
            console.log(data)
        }

        catch ({ response  }){
            setmessageError("An error occured")

        }

        finally {
            setisPending(false)
        }
        
    }


    return {data, isPending, messageSuccess, messageError};
}
 
export default useUsersList;