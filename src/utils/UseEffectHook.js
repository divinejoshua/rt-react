import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UseEffectHook = () => {


    const { pathname }  = useLocation()


    // Use Effect hook 
    useEffect(() => {
        return () => {
    
        // Scroll to top for all pages
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }
    }, [pathname])

    
   
    return null;
}
 
export default UseEffectHook;