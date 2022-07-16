import React, { useEffect, useState } from 'react'

export default function test() {

  const [first, setfirst] = useState([1, 2, 3])

  useEffect(() => {
    return () => {}
  },[first])
  

  return (
    <div>test</div>
    
  )
}
