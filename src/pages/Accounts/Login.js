import { useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom'


export default function LoginView() {
  

  const {id} = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  
{/* <p>{id}</p>
<p>{searchParams.get('query')}</p> */}

useEffect(() => {
  console.log("login")
  return () => {
    
  }
}, [])

  return (
    // Main view 
    <div>


    </div>
  )
}
