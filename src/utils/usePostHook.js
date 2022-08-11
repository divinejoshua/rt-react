import { useState } from "react";
import axios from "../api/axios";

const usePosts = (url, fromIndividualPost) => {

    // STATES 
    const [data, setdata] = useState([]);
    const [isPending, setisPending] = useState(false);
    const [messageSuccess, setmessageSuccess] = useState(null);
    const [messageError, setmessageError] = useState(null);

    // METHODS 
    const getPosts = async (pagination) => {

        if(pagination > 80){ return }

        setisPending(true);
        setmessageSuccess(null);
        setmessageError(null);


        try{
            // get all posts 
            const response = await axios.get(url)
            let newData = []
            newData = data

            // If the post is from individual post id, else if its a list from the home page 
            if(fromIndividualPost){
                // To indiviual post ID 
                newData = response.data
                setdata(newData)

            }else {
                // To home page 
                newData.push(...response.data.posts)
                setdata(newData)
            }
          
            
         
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

        // If from the list of all post 
        if(fromList){
            newData = [...data] 
            let post  = newData.filter(data => data.id ===id)
            liked ? post[0].reactions = post[0].reactions -1 : post[0].reactions = post[0].reactions + 1

        }else {
            // if from individual post 
            newData = {...data} 
            liked ? newData.reactions = newData.reactions -1 : newData.reactions = newData.reactions + 1
        }
        
        setdata(newData)

    }


    return {getPosts, likeButtonFunction, data, isPending, messageSuccess, messageError};
}
 
export default usePosts;