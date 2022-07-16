import { useState } from "react";

// Dashboard Route 
const DashboardRoute = () => {
    const [Route, setRoute] = useState("/");
    return Route;
}
 

// Login Route 
const LoginRoute = () => {
    const [Route, setRoute] = useState("/accounts/login");
    return Route;

}

export {DashboardRoute, LoginRoute };