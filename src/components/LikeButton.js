import React, { useState } from 'react'


export default function LikeButton({id, fromList, likeButtonFunction}) {

    const [liked, setliked] = useState(false);

    const updateLikeButton = () =>{
       setliked(!liked)
       likeButtonFunction(id, fromList, liked)
    }

  return (
    <span>
       {!liked 
        ? <span onClick={()=> updateLikeButton()}>Like</span>
        : <span className='text-default underline underline-offset-4 decoration-default' onClick={()=> updateLikeButton()}>Liked</span>
    }
    </span>
   
  )
}
