import { useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom'
import AuthSidebar from '../../components/AuthSidebar';

export default function LoginView() {
  

useEffect(() => {
  console.log("login")
  return () => {
    
  }
}, [])

  return (
    // Main view 
    <div>
      
      {/* The sidebar  */}
      <AuthSidebar/>


    </div>
  )
}
