import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import useUsersList from '../utils/useUsersListHook';


export default function MainHeader() {

  //STATES
const [isLoading, setisLoading] = useState(false);
const [clickSearchFirst, setclickSearchFirst] = useState(true);





  // React hook form 
const { register, handleSubmit, watch, formState: { errors, isDirty }  } = useForm({mode: 'all'});
const watchFields = watch(["search"]);

const {getUsers, data : users, isPending, messageSuccess, messageError} = useUsersList("/users?limit=8&search?q="+watchFields[0])

//METHODS
const isDoneTyping = (event) =>{
  console.log("Done")
}

//USE EFFECT
useEffect(() => {
  // Validate the form on page load
  handleSubmit()

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
             <form onSubmit={handleSubmit()} noValidate >
              <input  className='search-box pl-5 rounded-lg focus:outline-none focus:border-default focus:ring-default focus:ring-0.5 focus:border-100 transition duration-0 hover:duration-150' 
                      type='text' placeholder='Search' onKeyUp={isDoneTyping}
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

      {watchFields[0] ? 
      <div className='header-content mt-4'>
      <div className='suggestion-box pl-6 pr-6 pt-4 pb-4'>
        {watchFields[0] ? 'true' : "false"}
        </div>
      </div>
      : ''
      }


    </nav>

    
  )
}
