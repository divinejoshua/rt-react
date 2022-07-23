import React from 'react'
import { Link } from 'react-router-dom'

export default function PostFeed() {
  return (
    <div>
           <div className="post-card border rounded-lg pt-3 mb-4 col-span-1">

                {/* Post user  */}
                <div className="mb-5">
                <div className="float-left"><img src="https://robohash.org/namquaerataut.png" className="ml-3 border-2 p-1 rounded-full user-post-img"></img></div>
                <div className="float-left mt-3 font-bold ml-2">divine.er</div>
                <Link to="/post/1"><div className="float-right mt-3 text-sky-400 mr-5 cursor-pointer">View</div></Link>
                </div>

                {/* Post image  */}
                <div>
                <br></br>
                <img src="https://picsum.photos/300/300?" className="post-img mt-4" alt="wetroverse"></img>
                </div>

                {/* Likes and caption */}
                <div className="p-6">
                    <div className="mb-3 font-color-777 mr-5 cursor-pointer">Like &nbsp;&nbsp;•&nbsp;&nbsp;200 </div>
                    His mother had always taught him 
                <br></br>
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span>
                </div>

            </div>
    </div>
  )
}
