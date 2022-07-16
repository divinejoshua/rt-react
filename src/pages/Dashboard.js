import { Link } from "react-router-dom";
import { LoginRoute } from '../path';

export default function DashboardView() {

  const LoginPath = LoginRoute()

  return (
    <div className="page-wrapper">
        <h1>This is the Dashboard page1</h1>
        <Link to={LoginPath}>Login</Link>
    </div>
    
  )
}
