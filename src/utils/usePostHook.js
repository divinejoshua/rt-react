import { useState } from "react";
import axios from "../api/axios";

const usePosts = (url) => {

    // STATES 
    const [data, setdata] = useState([]);
    const [isPending, setisPending] = useState(false);
    const [messageSuccess, setmessageSuccess] = useState(null);
    const [messageError, setmessageError] = useState(null);

    // METHODS 
    const getPosts = async () => {

        setisPending(true);
        setmessageSuccess(null);
        setmessageError(null);


        try{
            // get all posts 
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

    // Like button function 
    const likeButtonFunction = (id) =>  {
        let newData = []
        newData = {...data}

        // Filter the actual post 
        newData.reactions = newData.reactions + 1
        setdata(newData)

        console.log(newData.reactions)

    }


    return {getPosts, likeButtonFunction, data, isPending, messageSuccess, messageError};
}
 
export default usePosts;