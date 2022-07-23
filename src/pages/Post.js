import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import MainSidebar from "../components/MainSidebar";
import PostFeed from "../components/PostFeed";
import Stories from "../components/Stories";
import { useForm } from "react-hook-form"
import usePosts from "../utils/usePostHook";
import useComments from "../utils/useCommentHook";
import CommentFeed from "../components/CommentFeed";

export default function PostView() {

// STATES 

// Comment form 
const { register, handleSubmit, formState: { errors, isValid }  } = useForm({mode: 'all'});

// Get url parameter
const {id} = useParams()

// Get post 
const {getPosts, data : posts, isPending : isPendingPost, messageSuccess : messageSuccessPost, messageError : messageErrorPost} = usePosts("/posts/"+id)
const {getComments, deleteComment, data : comments, isPending : isPendingComment, messageSuccess : messageSuccessComment, messageError : messageErrorComment} = useComments("/comments/post/"+id)


//METHODS
const handleError = (errors) => {

}

const handleComment = (errors) => {}



  
//USE EFFECT
useEffect(() => {
  console.log("/posts/"+id)

  // Get post 
  getPosts()
  getComments()

  return () => {
  }
}, [])


  return (
    <div>

      {/* Top loader  */}
      {isPendingPost || isPendingComment && 
        <div className="linear-activity">
          <div className="indeterminate"></div>
        </div>
      }

      {/* Main header  */}
      <MainHeader/>

      <div className="container mainbody">

        {/* Posts and side bar  */}
        <div className="grid grid-cols-3 gap-4 mt-10">


            {/* Stories  */}
            <Stories/>

            {/* Profile card */}
            <div className="ml-3 ">
              <div className="flex mt-3 profile-card">
                <img src="https://robohash.org/namquaerataut.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full profile-card-image"></img>
                <div>
                  <h4 className="font-bold mt-11 ml-2">divine.er</h4>
                  <h4 className="ml-2 font-color-777 font-size-x-small">Divine Erhomonsele</h4>
                </div>
              <button className='mt-12 ml-20 add-post-btn float-right mt-4 pl-5 pr-5 rounded-lg border'>Add post</button>

              </div>
            </div>


          {/* Posts  */}

          {/* First column  */}
          <div className="mt-4">
            
            {/* Post */}
            <PostFeed post={posts}/>


            <form  onSubmit={handleSubmit(handleComment, handleError)} noValidate className="mb-40">
                <input type="text" autoFocus name="comment" autoComplete="off"  aria-autocomplete="off" placeholder="Add comment" {...register('coment')}
                    className={"none mt-3 form-control w-full pl-6 border border-gray-300 focus:outline-none focus:border-default focus:ring-default focus:ring-0.5 focus:border-100 transition duration-0 hover:duration-150"}
                />
              <button className='mt-6 ml-20 add-post-btn hover:border-default hover:bg-default hover:text-white transition duration-0 hover:duration-150 float-right mt-4 pl-5 pr-5 rounded-lg border'>Add comment</button>


            </form>
            

          </div>


          {/* second column  */}
          <div className="mt-4 ml-4">

            
           <h4 className=" mt-1 font-color-777">Comments</h4>


                {/* Comments  */}
                {Array.isArray(comments.comments) ? comments.comments.map(comment => (
                    <CommentFeed comment={comment} key={comment.id} deleteComment={deleteComment}/>
                )) : "No comments"}




          </div>



          {/* Users list  */}
          <MainSidebar/>

        </div>

      </div>
     
    </div>
    
  )
}
