import React from 'react'

export default function MainHeader() {
  return (
    // Nav bar 
    <nav className='mainheader border-b w-full'>

      <div className='header-content w-full flex flex-row'>
        <h1 className='text-3xl font-bold mt-4 basis-1/3'>Wetroverse</h1>

        {/* Search box  */}
        <div className=' basis-1/3 border pt-2'>
          <center><input className='search-box' type='text' placeholder='Search'></input></center>
        </div>

        <h1 className='text-3xl font-bold mt-4 basis-1/3'>Wetroverse</h1>
      </div>

    </nav>
  )
}
