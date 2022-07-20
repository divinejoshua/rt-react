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

// import { Link, useParams, useSearchParams } from 'react-router-dom'
// import { DashboardRoute } from '../path';

// export default function LoginView() {
  
//   const DashboardPath = DashboardRoute()

//   const {id} = useParams()
//   const [searchParams, setSearchParams] = useSearchParams()


//   return (
//     // Main view 
//     <div>
//         <h1>This is the login page</h1>
//         <Link to={DashboardPath}>Home</Link>

//         <p>{id}</p>
//         <p>{searchParams.get('query')}</p>
//     </div>
//   )
// }





// const {id} = useParams()
// const [searchParams, setSearchParams] = useSearchParams()


// {/* <p>{id}</p>
// <p>{searchParams.get('query')}</p> */}
