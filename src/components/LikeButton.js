import React from 'react'


export default function LikeButton({id, likeButtonFunction}) {

  return (
    <span onClick={likeButtonFunction}>Like</span>
  )
}
