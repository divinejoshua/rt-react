import { useState } from "react";
import axios from "../api/axios";


const useMockData = (url) => {

    const [userData, setuserData] = useState([]);


     // METHODS 
     const getUserData = async () => {

        try{
            // get all posts 
            const response = await axios.get(url)
            setuserData(response.data.name)
         
        }

        catch ({ response  }){
            //Error
        }

        finally {
        //Finally 
        }
        
    }



    return (getUserData, userData);
}
 
export default useMockData;