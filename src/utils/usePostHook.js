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
    const likeButtonFunction = (id, liked) =>  {
        let newData = []
        newData = {...data}

        if(id){
            console.log(id)
        }
        // Like and unlike
        liked ? newData.reactions = newData.reactions -1 : newData.reactions = newData.reactions + 1
        
        
        console.log(liked)
        setdata(newData)

    }


    return {getPosts, likeButtonFunction, data, isPending, messageSuccess, messageError};
}
 
export default usePosts;