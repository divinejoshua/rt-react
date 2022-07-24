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

    // Like button function 
    const likeButtonFunction = (id) =>  {
        const newData = []
        newData = {...data}

        // Filter the actual post 
        const post = newData.posts.filter(post => post.id === id);

        console.log(newData)

    }


    return {getPosts, likeButtonFunction, data, isPending, messageSuccess, messageError};
}
 
export default usePosts;