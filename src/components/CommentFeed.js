import React from 'react'

export default function CommentFeed({comment}) {
  return (

    <div className="flex">
        <img src="https://robohash.org/quisequienim.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full comment-card-image"></img>
        <div>
        <h4 className="font-bold mt-7 ml-2">divine.er</h4>
        <h4 className="ml-2 font-color-777 font-size-x-small">{comment.body}</h4>
        <p className='ml-2 font-color-c4 mt-2 mr-6 cursor-pointer'>Delete</p>

        </div>

    </div>

  )
}
