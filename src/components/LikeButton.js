import React from 'react'
import usePosts from "../utils/usePostHook";



export default function LikeButton({id}) {

// STATES 
const {likeButtonFunction} = usePosts()



  return (
    <span onClick={likeButtonFunction}>Like</span>
  )
}
