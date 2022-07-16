import { Link } from 'react-router-dom'
import { DashboardRoute } from '../path';

export default function LoginView() {
  
  const DashboardPath = DashboardRoute()


  return (
    // Main view 
    <div>
        <h1>This is the login page</h1>
        <Link to="/">Home</Link>
    </div>
  )
}
