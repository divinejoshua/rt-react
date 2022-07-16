import './assets/css/App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import LoginView from './pages/Login';
import DashboardView from './pages/Dashboard';
import { DashboardRoute, LoginRoute } from './path';


function App() {

  const DashboardPath = DashboardRoute()
  const LoginPath = LoginRoute()


  // The return render  
  return (
    <Router>
      <div className="App">
        <Routes>

          {/* Dashboard  */}
          <Route exact path={DashboardPath} element={<DashboardView/>}/>

           {/* Login  */}
           <Route exact path={LoginPath} element={<LoginView/>}/>



        </Routes>
      </div>
    </Router>
  );
}

export default App;
