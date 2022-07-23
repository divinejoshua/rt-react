import React from 'react'

export default function CommentFeed() {
  return (

    <div className="flex">
        <img src="https://robohash.org/quisequienim.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full comment-card-image"></img>
        <div>
        <h4 className="font-bold mt-7 ml-2">divine.er</h4>
        <h4 className="ml-2 font-color-777 font-size-x-small">Divine Erhomonsele</h4>
        </div>
        <p className='ml-36 font-color-c4 float-right mt-8 mr-6 cursor-pointer'>Delete</p>

    </div>

  )
}
