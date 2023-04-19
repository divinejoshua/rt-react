import React from 'react'
import { useState, useEffect } from 'react'
import useMockData from "../utils/usePostHook";


export default function DataView() {

  const [user, setuser] = useState("");
  const { getUserData, userData } = useMockData("https://dummyjson.com/posts/")



  //USE EFFECT
  useEffect(() => {
    getUserData()
    
    return () => {
    }
  }, [])



  return (
    <div>DataView</div>
  )
}
