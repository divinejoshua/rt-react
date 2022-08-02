import { useEffect, useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import AuthSidebar from '../../components/AuthSidebar';
import { useForm } from "react-hook-form"


export default function RegisterView() {  

//STATES
const [isLoading, setisLoading] = useState(false);
const [isDisabled, setisDisabled] = useState(false);
const [formAuthBtnError, setformAuthBtnError] = useState(false);
const [firstValidation, setfirstValidation] = useState(false);

// Use navigate 
const navigate = useNavigate();

// React hook form 
const { register, handleSubmit, watch, formState: { errors, isValid }  } = useForm({mode: 'all'});

const watchFields = watch(["fullname", "email", "password"]);

// METHODS
// Login Function on success
const handleRegister = (data) => {

    // Submit the form...This is to Simulate an api call for 3 seconds 
    setisLoading(true)
    setisDisabled(true)
  
    setTimeout(() => { 
      setisLoading(false)
      setisDisabled(false)
      navigate("/accounts/login", { replace: true });
    }, 3000)
  
    // Submit 
    console.log(data);
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
    fullname: {required: "Fullname is required",
        validate: {
            containCharacters: v => /\S/.test(v) || "Fullname is required",
        }
    },
    email: { required: "Email is required" ,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Enter a valid email address"
      }
    },
    password: {required: "Password is required",
        validate: {
            containLowercase: v => /[a-z]/.test(v) || "Password must contain lowercase",
            containUppercase: v => /[A-Z]/.test(v) || "Password must contain uppercase",
            containNumber: v => /[0-9]/.test(v) || "Password must contain number",
            containSpecialCharacter: v => /[#?!@$%^&*-]/.test(v) || "Must contain special characters",
        }
    },
    confirmPassword: {required: "Confirm password is required",
        validate: {
            containUpperspace: v => v == watchFields[2] || "Passwords does not match"
        }
    }
  };
  
  
  //USE EFFECT
  useEffect(() => {
    console.log("register")

    // Validate the form on page load
    handleSubmit(handleRegister)
  
    return () => {
    }
  }, [])
  

//   Check if value exist
  useEffect(() => {
    if(watchFields[0]){
        watchFields[0].length === 0 || watchFields[1].length === 0 || watchFields[2].length === 0 ? setisDisabled(true) : setisDisabled(false)
    } else{
        setisDisabled(true)
    }
  
    return () => {
    }
  }, [watchFields])
  


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
                <p className="font-size-large text-secondary font-weight-medium">Create an account</p>
                <p className="font-size-small font-color-777 mt-3 mb-9">Let’s get you started</p>

                </div>

            {/* The form  */}   

            <form onSubmit={handleSubmit(handleRegister, handleError)} noValidate>
                <div className='grid grid-cols-2 gap-6'>
                    
                    {/*Form input  */}
                    <div className='mt-2 col-span-2'>
                    <label className="mt-8 text-secondary">Full name</label>
                    <input type="text" autoFocus name="fullname" autoComplete="off"  aria-autocomplete="off" placeholder="John Doe" {...register('fullname', formValidation.fullname)}
                        className={(errors.fullname && firstValidation ? 'border-red-500 none' : '') + "none mt-3 form-control w-full pl-6 border border-gray-300 focus:outline-none focus:border-default focus:ring-default focus:ring-0.5 focus:border-100 transition duration-0 hover:duration-150"}
                    />

                        {/* If errors  */}
                        {errors?.fullname && firstValidation && 
                        <div className="absolute text-red-500 float-left font-size-small pt-1">
                            {errors.fullname.message}
                        </div>
                        }
                    
                    </div>


                    {/*Form input  */}
                    <div className='mt-2 col-span-2'>
                    <label className="mt-8 text-secondary">Email address</label>
                    <input type="email" name="email" autoComplete="off"  aria-autocomplete="off" placeholder="afolabi@email.com" {...register('email', formValidation.email)}
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
                    <div className='mt-2 col-span-2 sm:col-span-1'>
                    <label className="mt-8 text-secondary">Password</label>
                    <input type="password" name="password" autoComplete="off"  aria-autocomplete="off" placeholder="Enter password" {...register('password', formValidation.password)}
                        className={(errors.password && firstValidation ? 'border-red-500 none' : '') + "none mt-3 form-control w-full pl-6 border border-gray-300 focus:outline-none focus:border-default focus:ring-default focus:ring-0.5 focus:border-100 transition duration-0 hover:duration-150"}
                    />
                    
                    
                        {/* If errors  */}
                        {errors?.password && firstValidation && 
                        <div className="absolute text-red-500 float-left font-size-small pt-1">
                            {errors.password.message}
                        </div>
                        }

                    </div>

                    
                    
                    {/*Form input  */}
                    <div className='mt-2 col-span-2 sm:col-span-1'>
                    <label className="mt-8 text-secondary">Confirm password</label>
                    <input type="password" name="confirmPassword" autoComplete="off"  aria-autocomplete="off" placeholder="Confirm password" {...register('confirmPassword', formValidation.confirmPassword)}
                        className={(errors.confirmPassword && firstValidation ? 'border-red-500 none' : '') + "none mt-3 form-control w-full pl-6 border border-gray-300 focus:outline-none focus:border-default focus:ring-default focus:ring-0.5 focus:border-100 transition duration-0 hover:duration-150"}
                    />
                    
                    
                        {/* If errors  */}
                        {errors?.confirmPassword && firstValidation && 
                        <div className="absolute text-red-500 float-left font-size-small pt-1">
                            {errors.confirmPassword.message}
                        </div>
                        }

                    </div>

                </div>

               

                <p className="mt-10 font-color-777 font-size-small">By registering, you agree to our <Link className="text-default underline decoration-default" to="/">Terms of Service</Link> and <Link className="text-default underline decoration-default" to="/">Privacy Policy</Link></p>

                {/* Submit button  */}
                <div className="mt-3">
                <button 
                    className={(!isDisabled && !isLoading ? "none bg-default border text-white border-default none" : "none form-auth-btn-disabled font-color-777 cursor-not-allowed none")+ (formAuthBtnError ? "none form-auth-btn-error none none" : "") +"none inline-flex items-center font-weight-medium w-full place-content-center mt-6 form-auth-btn"}
                    onClick={() => setfirstValidation(true)}
                    disabled={isLoading || formAuthBtnError || isDisabled}
                >
                    {isLoading
                    ? <div className="dot-falling"></div>
                    : <span>Next</span>
                    }
                
                </button>
                </div>

                <div className="text-center"><p className="mt-8 font-size-small">Have an account? <span className="text-default underline decoration-default"> <Link to="/accounts/login">Login</Link></span> </p></div>

            </form>


            </div>

            </div>



    </div>
  )
}
