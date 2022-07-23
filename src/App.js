import './assets/css/App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginView from './pages/Accounts/Login';
import RegisterView from './pages/Accounts/Register';
import HomeView from './pages/Home';
import PostView from './pages/Post';
import PageNotFound from './pages/Error/404';

import useEffectHook from "./utils/useEffectHook";


function App() {

  // The return render  
  return (
    <Router>
      <useEffectHook/>

      <div className="App">
        <Routes>

          {/* Home  */}
          <Route path="/" element={<HomeView/>}/>

          {/* Post view  */}
          <Route path="/post/:id" element={<PostView/>}/>

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
