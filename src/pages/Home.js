import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux'
import axios from "../api/axios";
import MainHeader from "../components/MainHeader";
import MainSidebar from "../components/MainSidebar";
import PostFeed from "../components/PostFeed";
import Stories from "../components/Stories";
import { registerEmail } from "../redux/user";
import usePost from "../utils/usePostHook";
import { useDispatch } from 'react-redux'


export default function HomeView() {

// STATES 
const [pagination, setpagination] = useState(0);
const {getPosts, likeButtonFunction, data : posts, isPending, messageSuccess, messageError} = usePost("https://dummyjson.com/posts?limit=8&skip="+pagination)

// Pagination elements 
const observer = useRef()
const paginationUpdate = useRef(getPosts);

// Redux
const dispatch = useDispatch()
const userDetails = useSelector((state) => state.userDetails)


//METHODS
    const updatePosts = useCallback(() => {
      if(pagination > 80 || isPending){ return }
      setpagination((prevpagination) => prevpagination + 8)
      getPosts(pagination)
    })


    // Get the last element to be rendered in the list 
    const lastElementRef = useCallback(node=>{

    // Return if a request is loading 
    if(isPending) return

    // If there is a new last element, disconnect from previous last element 
    if(observer.current) observer.current.disconnect()

    // Observe the new element 
    observer.current = new IntersectionObserver(entries=>{

      // Check if last element is visible 
      if(entries[0].isIntersecting && pagination < 80){
        // updatePosts()
        paginationUpdate.current();
      }

      
    })
    if (node) observer.current.observe(node)
    },[isPending])



    // Get the logged in user from the backend 
    const getLoggedInUser = async () =>{
      try{
        let response = await axios.get('/accounts/user/')
        dispatch(registerEmail(response.data.email))
      }
      catch {
        // console.log("An error occured")
      }

    }




  
//USE EFFECT
useEffect(() => {
  getLoggedInUser()
  
  // Get post list 
      // getPosts(pagination)

  return () => {
  }
}, [])


// Pagination update use effect 
useEffect(() => {
  paginationUpdate.current = updatePosts;
}, [updatePosts]);

  return (
    <div>

      {/* Top loader  */}
      {isPending && 
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
                  {userDetails.email ?
                    <h4 className="ml-2 font-color-777 font-size-x-small">{userDetails.email}</h4>
                  : <h4 className="ml-2 font-color-777 font-size-x-small">Divine Erhomonsele</h4>}
                </div>
              <button className='mt-12 ml-20 add-post-btn float-right mt-4 pl-5 pr-5 rounded-lg border'>Add post</button>

              </div>
            </div>


          {/* Posts Feed */}

          {/* First column  */}
          <div className="mt-4 col-span-2">



            <div className="grid grid-cols-2 gap-4 mt-10">



              {/* Post */}
              {Array.isArray(posts) ? posts.map((post,index) => (
               <div key={index}>
                <PostFeed post={post} key={post.id} likeButtonFunction={likeButtonFunction} fromList={true} updatePosts={updatePosts} />
             </div>
              )) : posts[0].id}

            <div ref={lastElementRef}>Loading...</div>



            </div>

          </div>





          {/* Users list  */}
          <MainSidebar/>




        </div>

      </div>
     
    </div>
    
  )
}
