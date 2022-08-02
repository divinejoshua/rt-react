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


//METHODS
const updatePosts = () => {
    setpagination(prevpagination => prevpagination + 8)
      console.log(pagination)


    getPosts(pagination)
}

// Get the last element to be rendered in the list 
const observer = React.useRef(
  new IntersectionObserver(
    entries => {
      const first = entries[0];
      if (first.isIntersecting) {
        loader.current();
      }
    },
    { threshold: 1 }
  )
);
  
//USE EFFECT
useEffect(() => {
  console.log("home")
  
  // Get post list 
      getPosts(pagination)

  return () => {
  }
}, [])


// pagination counter 
useEffect(() => {
  //assign the ref's current value to the count Hook
  prevCountRef.current = pagination;
}, [pagination]); //r


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
                  <button onClick={() => updatePosts()}>{pagination}</button>
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
