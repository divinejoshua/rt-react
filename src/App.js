import './assets/css/App.css';
import LoginPage from './views/Login';

function App() {

  const title = "Hey there"


  // The return render  
  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <LoginPage/>
      </header>
    </div>
  );
}

export default App;
