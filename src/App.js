import './assets/css/App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginView from './pages/Accounts/Login';
import RegisterView from './pages/Accounts/Register';
import HomeView from './pages/Home';
import PostView from './pages/Post';
import DataView from './pages/Data'
import PageNotFound from './pages/Error/404';
import AuthToken from './components/AuthToken';
import { AuthProvider} from './context/AuthContext';
import UseEffectHook from "./utils/UseEffectHook";

function App() {





 // The return render  
  return (
    <Router>

      <UseEffectHook/>

      <div className="App" >

        {/* Auth provider  */}
          <AuthProvider>
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

                       {/* Mock Data  */}
                      <Route path="/data" element={<DataView/>}/>

                      {/* <Route path="accounts/login/:id" element={<LoginView/>}/> Optional Paramater */}

                      {/* 404  */}
                      <Route path="*" element={<PageNotFound/>}/>

                </Routes>
          </AuthProvider>
   
      </div>
      

    </Router>


  );
}

export default App;
