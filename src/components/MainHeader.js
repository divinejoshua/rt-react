import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


export default function MainHeader() {

  //STATES
  const [isLoading, setisLoading] = useState(false);

  // React hook form 
const { register, handleSubmit, formState: { errors, isDirty }  } = useForm({mode: 'all'});


//USE EFFECT
useEffect(() => {
  // Validate the form on page load
  handleSubmit(handleLogin)

  return () => {
  }
}, [])


  return (

 
    // Nav bar 
    <nav className='mainheader border-b w-full'>

      <div className='header-content w-full flex flex-row'>
        <Link to="/" className='basis-1/3'><h1 className='text-3xl mt-5 '>Wetro<span className='text-3xl text-default font-bold'>/verse</span></h1></Link>

        {/* Search box  */}
        <div className=' basis-1/3 pt-4'>
          <center>
             <form onSubmit={handleSubmit()} noValidate>
              <input className='search-box pl-5 rounded-lg focus:outline-none focus:border-default focus:ring-default focus:ring-0.5 focus:border-100 transition duration-0 hover:duration-150' 
                      type='text' placeholder='Search'
                      {...register('search', { required: true})}
                      >
              </input>
            </form>
            </center>
        </div>

          <div className='basis-1/3'>
            <Link to="/accounts/register">
              <button className='header-btn-full float-right mt-4 pl-5 pr-5 rounded-lg bg-default text-white'>Register</button>
            </Link>

            <Link to="/accounts/login">
              <button className='header-btn-float float-right mt-4 pl-5 pr-5 rounded-lg border mr-6'>Login</button>
            </Link>
          </div>
      </div>

      <div className='header-content mt-4'>
      <div className='suggestion-box'>
        {errors.search ? 'true' : 'false'}
        </div>
      </div>



    </nav>

    
  )
}
