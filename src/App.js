import './assets/css/App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginView from './pages/Accounts/Login';
import RegisterView from './pages/Accounts/Register';
import HomeView from './pages/Home';
import PostView from './pages/Post';
import PageNotFound from './pages/Error/404';
import AuthToken from './components/AuthToken';
import UseEffectHook from "./utils/UseEffectHook";


import { useDispatch } from 'react-redux'
import { registerAccessToken, registerAccess_token_loader } from './redux/auth';
import { useSelector } from 'react-redux'
import axios from "./api/axios";
import { useLocation, useNavigate } from "react-router-dom";



 // Axios interceptors
 axios.interceptors.response.use(null, (error) => { 

  const { pathname }  = useLocation()   
  
  // Use navigate 
  const navigate = useNavigate();

   // Redux 
  const dispatch = useDispatch()
  const access_token = useSelector((state) => state.userAccessToken.access_token)
  // const access_token_loader = useSelector((state) => state.userAccessToken.access_token_loader)

  let response = null

  

  // if the access token is expired
    if (error.config && error.response && error.response.status === 401) {
  console.log("GBes")


      // if the url is froms the refresh token
      if (error.config.url == "accounts/auth/token/refresh/") { 
        dispatch(registerAccessToken(null)).then(() =>{
            dispatch(registerAccess_token_loader(false))
       })
        localStorage.setItem('refresh', null)
        return
      }


      // if There is no access token 
      if (!access_token){ return  navigate("/accounts/login", { from: pathname }, { replace: true })}
      // Get a new access token 
      return axios.post("/accounts/auth/token/refresh/", {'refresh': localStorage.getItem('refresh')}).then(() =>{
                dispatch(registerAccessToken(response.data.access)).then(() =>{
                  console.log("yooo")
                  error.config.headers.Authorization = `Bearer ${access_token}`
                  return axios.request(error.config);
           })

      })

  }
    return Promise.reject(error);
    
});

function App() {



 // The return render  
  return (
    <Router>

      <UseEffectHook/>

      <div className="App">


          <Routes>

          
      <Route element={<AuthToken/>}>
            {/* Home  */}
            <Route path="/" element={<HomeView/>}/>
            {/* Post view  */}
            <Route path="/post/:id" element={<PostView/>}/>
      </Route>

            {/* Login  */}
            <Route path="/accounts/login" element={<LoginView/>}/>


            {/* Register  */}
            <Route path="/accounts/register" element={<RegisterView/>}/>

            {/* <Route path="accounts/login/:id" element={<LoginView/>}/> Optional Paramater */}

            {/* 404  */}
            <Route path="*" element={<PageNotFound/>}/>


          </Routes>
   
      </div>
      

    </Router>


  );
}

export default App;
