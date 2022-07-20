import React from 'react'

import authlogo from '../assets/icons/authlogo.svg'
import authpaper from '../assets/icons/authpaper.svg'

export default function AuthSidebar() {
  return (
    <div className='authsidebar'>
        <div className='container pl-16 pr-16'>

            {/* Logo and brand  */}
            <div className='flex'>
                <img src={authlogo} className=""/>
                <p className='font-size-large font-weight-medium mt-2 ml-3'>Runtransfer</p>
            </div>


            {/* Sidebar info */}
            <div>
                <div className='auth-info-box border border-gray-100 shadow-md pt-5 pl-5 border-radius-10 pb-5 flex'>
                    <img src={authpaper} className="ml-2" width={50} height={50} alt="Runtransfer"/>
                    <div className='mt-1 ml-5'>
                        <p className='font-size-x-small font-color-777'>Transactions verified</p>
                        <p className='font-size-medium'>72</p>
                    </div>
                </div>
                <p className='font-color-777 font-size-medium'>
                    You’re a few clicks away from accepting and verifying transfers.
                </p>

            </div>
           
            
            </div>
        </div>
   
  )
}
