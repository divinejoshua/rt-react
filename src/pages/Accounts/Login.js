import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import AuthSidebar from '../../components/AuthSidebar';
import { useForm } from "react-hook-form"
import { registerEmail } from '../../redux/user';
import axios from 'axios';
import { registerAccessToken } from '../../redux/auth';

export default function LoginView() {
  
//STATES
const [isLoading, setisLoading] = useState(false);
const [isDisabled, setisDisabled] = useState(false);
const [formError, setformError] = useState(false);
const [formAuthBtnError, setformAuthBtnError] = useState(false);
const [firstValidation, setfirstValidation] = useState(false);
const [showPassword, setshowPassword] = useState(false);

// Use navigate 
const navigate = useNavigate();

// React hook form 
const { register, handleSubmit, formState: { errors, isValid }  } = useForm({mode: 'all'});

// Redux
const dispatch = useDispatch()


// METHODS
// Login Function on success
const handleLogin = async (data) => {

  // Submit the form...This is to Simulate an api call for 3 seconds 
  setisLoading(true)
  setisDisabled(true)
  setformError(false)


  let form = {
    username: data.email,
    password: data.password,
  }

  try {

    let response = await axios.post("/accounts/auth/login/", form)

    // Storing the data in redux
    dispatch(registerEmail(data.email))
    dispatch(registerAccessToken(response.data.access_token))

    // Redirect to home page 
    axios.defaults.headers.common['Authorization'] = " your fresh authorization token available for all requests";

    let res = await axios.get('/accounts/user')
    // navigate("/", { replace: true });
    
  
  } catch (e){

    setformError(true)
    handleError()
  
  } finally {

    setisLoading(false)
    setisDisabled(false)
  }

}




// Function if error on react form handling
const handleError = (errors) => {

  // On error, uodate form btn error state to allow animation
  setformAuthBtnError(true)

  setTimeout(() => { 
    setformAuthBtnError(false)
    console.log("Validation error")
  }, 200)
  
};

// Form validation 
const formValidation = {
  email: { required: "Email is required" ,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Enter a valid email address"
    }
  },
  password: {required: "Password is required",}
};


//USE EFFECT
useEffect(() => {
  console.log("login")

  // Validate the form on page load
  handleSubmit(handleLogin)

  return () => {
  }
}, [])



  return (
    // Main view 
    <div>

        {/* The sidebar  */}
        <AuthSidebar/>

        {/* Main section  */}
        <div className='form-box auth-mainbar'>


          {/* Form Box */}
          <div className="p-10 form-box mx-auto transition-in-bottom-top">

            <div className="w-full">
              <p className="font-size-large text-secondary font-weight-medium">Welcome Back</p>
              <p className="font-size-small font-color-777 mt-3 mb-11">Log in to continue</p>
            </div>

        {/* The form  */}

          <form onSubmit={handleSubmit(handleLogin, handleError)} noValidate>

            {/* If there is any form error  */}
            { formError && <p className='text-danger'>An error occured</p> }

            {/*Form input  */}
            <div className='mt-8'>
              <label className="mt-8 text-secondary">Email address</label>
              <input type="email" autoFocus name="email" autoComplete="off"  aria-autocomplete="off" placeholder="afolabi@email.com" {...register('email', formValidation.email)}
                className={(errors.email && firstValidation ? 'border-red-500 none' : '') + "none mt-3 form-control w-full pl-6 border border-gray-300 focus:outline-none focus:border-default focus:ring-default focus:ring-0.5 focus:border-100 transition duration-0 hover:duration-150"}
              />

                {/* If errors  */}
                {errors?.email && firstValidation && 
                  <div className="absolute text-red-500 float-left font-size-small pt-1">
                    {errors.email.message}
                  </div>
                }
              
            </div>

            {/*Form input  */}
            <div className='mt-8'>
              <label className="mt-8 text-secondary">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} name="password" autoComplete="off"  aria-autocomplete="off" placeholder="Enter password" {...register('password', formValidation.password)}
                    className={(errors.password && firstValidation ? 'border-red-500 none' : '') + "none mt-3 form-control w-full pl-6 border border-gray-300 focus:outline-none focus:border-default focus:ring-default focus:ring-0.5 focus:border-100 transition duration-0 hover:duration-150"}
                />
                <div className="absolute inset-y-2 right-0 pr-3 pt-4 cursor-pointer flex items-center text-sm leading-5" onClick={() => setshowPassword(!showPassword)}>
                      <span v-if="show" className="mr-3 text-sm font-color-777">{showPassword ? "Hide" : "Show"}</span>
                </div>
              </div>
             
                {/* If errors  */}
                {errors?.password && firstValidation && 
                  <div className="absolute text-red-500 float-left font-size-small pt-1">
                    {errors.password.message}
                  </div>
                }

            </div>

            <p className="mt-10 font-color-777 font-size-small">Forgot Password? <Link className="text-default underline decoration-default" to="/">Reset it here</Link></p>


            {/* Submit button  */}
            <div className="mt-3">
              <button 
                className={(isValid && !isLoading ? "bg-default border text-white border-default none" : "form-auth-btn-disabled font-color-777 cursor-not-allowed none")+ (formAuthBtnError ? "none form-auth-btn-error form-auth-btn-disabled font-color-777 cursor-not-allowed none" : "") +"none inline-flex items-center font-weight-medium w-full place-content-center mt-6 form-auth-btn"}
                onClick={() => setfirstValidation(true)}
                disabled={!isValid || isLoading || formAuthBtnError}
              >
                {isLoading
                  ? <div className="dot-falling"></div>
                  : <span>Login</span>
                }
              
              </button>
            </div>

            <div className="text-center"><p className="mt-8 font-size-small">Don’t have an account?  <span className="text-default underline decoration-default"> <Link to="/accounts/register">Sign up</Link></span> </p></div>

          </form>


        </div>
      </div>


    </div>
  )
}
