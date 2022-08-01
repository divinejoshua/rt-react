import { useCallback, useEffect, useRef, useState } from "react";
import MainHeader from "../components/MainHeader";
import MainSidebar from "../components/MainSidebar";
import PostFeed from "../components/PostFeed";
import Stories from "../components/Stories";
import usePost from "../utils/usePostHook";


export default function HomeView() {

// STATES 
const [pagination, setpagination] = useState(0);
const {getPosts, likeButtonFunction, data : posts, isPending, messageSuccess, messageError} = usePost("/posts?limit=8&skip="+pagination)

// Pagination elements 
const observer = useRef()

// Get the last element to be rendered in the list 
const lastElementRef = useCallback(node=>{

    // Return if a request is loading 
    if(isPending) return

    // If there is a new last element, disconnect from previous last element 
    if(observer.current) observer.current.disconnect()

    // Observe the new element 
    observer.current = new IntersectionObserver(entries=>{

      // Check if last element is visible 
      if(entries[0].isIntersecting){
        console.log('Visible')
      }

      
    })
    if (node) observer.current.observe(node)
    console.log(node)
},[isPending])


//METHODS
const updatePosts = () => {
    pagination += 8
    getPosts(pagination)
}

  
//USE EFFECT
useEffect(() => {
  console.log("home")
  
  // Get post list 
  
      getPosts(pagination)

  return () => {
  }
}, [])


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
                  <h4 className="ml-2 font-color-777 font-size-x-small">Divine Erhomonsele</h4>
                </div>
              <button className='mt-12 ml-20 add-post-btn float-right mt-4 pl-5 pr-5 rounded-lg border'>Add post</button>

              </div>
            </div>


          {/* Posts Feed */}

          {/* First column  */}
          <div className="mt-4 col-span-2">



            <div className="grid grid-cols-2 gap-4 mt-10">



              {/* Post */}
              {Array.isArray(posts.posts) ? posts.posts.map((post,index) => (
                <div key={index}>
                  {posts.posts.length === index+1 ? <div ref={lastElementRef}></div> : ''}
                  <PostFeed post={post} key={post.id} likeButtonFunction={likeButtonFunction} fromList={true} updatePosts={updatePosts} />
                </div>
              )) : null}



            </div>

          </div>





          {/* Users list  */}
          <MainSidebar/>




        </div>

      </div>
     
    </div>
    
  )
}
