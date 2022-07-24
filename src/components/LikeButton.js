import React, { useState } from 'react'


export default function LikeButton({id, likeButtonFunction}) {

    const [liked, setliked] = useState(false);

  return (
    <span onClick={()=> likeButtonFunction(setliked(true))}>Like</span>
  )
}
