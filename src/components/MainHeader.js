import React from 'react'

export default function MainHeader() {
  return (
    // Nav bar 
    <nav className='mainheader border-b w-full'>

      <div className='header-content w-full flex flex-row'>
        <h1 className='text-3xl  mt-4 basis-1/3'>Wetro<span className='text-3xl text-default font-bold'>/verse</span></h1>

        {/* Search box  */}
        <div className=' basis-1/3 pt-3'>
          <center>
            <input className='search-box pl-5 rounded-lg focus:outline-none focus:border-default focus:ring-default focus:ring-0.5 focus:border-100 transition duration-0 hover:duration-150' 
                    type='text' placeholder='Search'>
            </input>
            </center>
        </div>

          <div className='basis-1/3'>
            <button className='header-login-btn float-right mt-4 pl-5 pr-5'>Login</button>
          </div>
      </div>

    </nav>
  )
}
