import { useState } from "react";
import axios from "../api/axios";

const useComments = (url) => {

    // STATES 
    const [data, setdata] = useState([]);
    const [isPending, setisPending] = useState(false);
    const [messageSuccess, setmessageSuccess] = useState(null);
    const [messageError, setmessageError] = useState(null);

    // METHODS 
    const getComments = async () => {

        setisPending(true);
        setmessageSuccess(null);
        setmessageError(null);


        try{
            // get all users 
            const response = await axios.get(url)
            setdata(response.data)
        }

        catch ({ response  }){
            setmessageError("An error occured")

        }

        finally {
            setisPending(false)
        }
        
    }

    // Delete comment 
    const deleteComment = (id) =>{
        newData = data.comments.filter(data => data.id != id)
        data.comments = newData
        console.log(data.comments)

    }


    return {getComments, deleteComment, data, isPending, messageSuccess, messageError};
}
 
export default useComments;