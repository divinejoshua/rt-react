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
    const likeButtonFunction = (id, fromList, liked) =>  {
        let newData = []
        newData = {...data}
        let post = null

        // If from the list of all post 
        if(fromList){
            post = newData.posts.filter(data => data.id ===id)
            liked ? post[0].reactions = post[0].reactions -1 : post[0].reactions = post[0].reactions + 1

        }else {
            // if from individual post 
            liked ? newData.reactions = newData.reactions -1 : newData.reactions = newData.reactions + 1
        }
        
        setdata(newData)

    }


    return {getPosts, likeButtonFunction, data, isPending, messageSuccess, messageError};
}
 
export default usePosts;