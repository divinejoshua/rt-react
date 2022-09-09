import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { Provider } from 'react-redux';


axios.interceptors.response.use(null, (error) => { 
    

  // if the access token is expired
    if (error.config && error.response && error.response.status === 401) {
      console.log("yopooo")

      // // if the url is froms the refresh token
      // if (error.config.url == "/accounts/auth/token/refresh/") { 


          
      //   dispatch(registerAccessToken(null)).then(() =>{
      //       dispatch(registerAccess_token_loader(false))

      //  })

         
      //   localStorage.setItem('refresh', null)
      //   return
      // }


      // // if There is no access token 
      // if (!access_token){ return  navigate("/accounts/login", { from: pathname }, { replace: true })}
      // // Get a new access token 
      // return axios.post("/accounts/auth/token/refresh/", {'refresh': localStorage.getItem('refresh')}).then(() =>{
      //           dispatch(registerAccessToken(response.data.access)).then(() =>{
      //             console.log("yooo")
      //             error.config.headers.Authorization = `Bearer ${access_token}`
      //             return axios.request(error.config);
      //      })

      // })

  }
    return Promise.reject(error);

    
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>

      <App />
    </Provider>,
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
