import React, { useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import LikeButton from "../components/LikeButton";


export default function PostFeed({post, fromList, likeButtonFunction, updatePosts}) {

  // pagination elements 


  return (
    <div>
           <div className="post-card border rounded-lg pt-3 mb-4 col-span-1">
            {/* {lastElement ? <div ref={lastElementRef}>{String(lastElement)}</div> : ''} */}
                {/* Post user  */}
                <div className="mb-5">
                <div className="float-left"><img src="https://robohash.org/namquaerataut.png" className="ml-3 border-2 p-1 rounded-full user-post-img"></img></div>
                <div className="float-left mt-3 font-bold ml-2">divine.er</div>
               <Link to={"/post/"+post.id}><div className="float-right mt-3 text-sky-400 mr-5 cursor-pointer">View {post.id}</div></Link> 
                </div>

                {/* Post image  */}
                <div>
                <br></br>
                {post.id ? <img src={'https://picsum.photos/id/'+post.id+2+'/200/300'} className="post-img mt-4" alt="wetroverse"></img>: ''}
                </div>

                {/* Likes and caption */}
                <div className="p-6">
                    <div className="mb-3 font-color-777 mr-5 cursor-pointer"><LikeButton id={post.id} fromList={fromList} likeButtonFunction={likeButtonFunction}/> &nbsp;&nbsp;•&nbsp;&nbsp;{post.reactions} </div>
                    {post.body} 
                <br></br>

                {Array.isArray(post.tags) ? post.tags.map(tags => (
                    <span className="text-default" key={tags}>#{tags}&nbsp;&nbsp;</span> 
                )) : ''}
                

                </div>

            </div>
    </div>
  )
}
