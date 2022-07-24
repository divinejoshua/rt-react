import React, { useState } from 'react'


export default function LikeButton({id, likeButtonFunction}) {

    const [liked, setliked] = useState(false);

    const updateLikeButton = () =>{
       setliked(!liked)
       likeButtonFunction(null, liked)
    }

  return (
    // <span onClick={()=> updateLikeButton()}>Like</span>
    <span className='text-default underline decoration-default' onClick={()=> updateLikeButton()}>Like</span>
  )
}
