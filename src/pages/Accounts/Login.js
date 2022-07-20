import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthSidebar from '../../components/AuthSidebar';
import { useForm } from "react-hook-form"

export default function LoginView() {
  

const [isLoading, setisLoading] = useState(false);

// Form Details
const [formEmail, setformEmail] = useState("");
const [formPassword, setformPassword] = useState("");

// React hook form 
const { register, handleSubmit, formState: { errors }  } = useForm();
const handleError = (errors) => {};

// Login Function
const handleLogin = (data) => { 
  console.log(data);
}


// Form validation 
const formValidation = {
  email: { required: "Email is required" },
  password: {required: "Password is required",}
};


useEffect(() => {
  console.log("login")
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
          <form onSubmit={handleSubmit(handleLogin, handleError)}>

            <div className='mt-8'>
              <label className="mt-8 text-secondary">Email address</label>
              <input type="email" autoFocus name="email" autoComplete="off"  aria-autocomplete="off" placeholder="afolabi@email.com" {...register('email', formValidation.email)}
                  className="mt-3 form-control w-full pl-6 border border-gray-300
                  focus:outline-none focus:border-default
                  focus:ring-default
                  focus:ring-0.5
                  focus:border-100
                  transition duration-0 hover:duration-150
                " />

            </div>


            <div className='mt-8'>
              <label className="mt-8 text-secondary">Password</label>
              <input type="password" name="password" autoComplete="off"  aria-autocomplete="off" placeholder="Enter password" {...register('password', formValidation.password)}
                  className="mt-3 form-control w-full pl-6 border border-gray-300
                  focus:outline-none focus:border-default
                  focus:ring-default
                  focus:ring-0.5
                  focus:border-100
                  transition duration-0 hover:duration-150
                " />

            </div>

            <p className="mt-8 font-color-777 font-size-small">Forgot Password? <Link className="text-default underline decoration-default" to="/">Reset it here</Link></p>


            {errors?.password && errors.password.message}



            <div className="mt-3">
              <button 
              className="inline-flex items-center font-weight-medium w-full place-content-center mt-6  form-auth-btn
                bg-default border text-white border-default
              ">

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
