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
        setisPending(true)      
        let newData = []

        newData = {...data}
        
        let comment = newData.comments.filter(data => data.id !== id);

        newData.comments = comment
        setdata(newData)      
        setisPending(false)      


    }


     // Delete comment 
     const addComment = (value) =>{
        let id = Math.floor((Math.random() * 1000) + 100);



        setisPending(true)      
        let newData = {
            id : id, 
            body : value, 
            postId: 3, user: {id: 21, username: "divine"},
        }

        newArray = [...arr, {...result, id:3}]


        let comment = newData.comments.filter(data => data.id !== id);

        newData.comments = comment
        setdata(newData)      
        setisPending(false)      


    }


    return {getComments, deleteComment, data, isPending, messageSuccess, messageError};
}
 
export default useComments;