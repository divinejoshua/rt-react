import { useEffect, useState } from "react";

const LeftTab = () => {

// Variable First 
  const [first, setfirst] = useState([1,2,3,4,5,6])


  // Use Effect hook 
  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  


// Return render 
  return ( 

    <nav className="left-tab">
      Left Tab
      
    </nav>

   );
}
 
export default LeftTab;

// import React, { useEffect, useState } from 'react'

// export default function test() {

//   const [first, setfirst] = useState([1, 2, 3])

//   useEffect(() => {
//     return () => {}
//   },[first])
  

//   return (
//     <div>test</div>
    
//   )
// }
