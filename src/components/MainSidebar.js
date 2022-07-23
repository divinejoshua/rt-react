import React, { useEffect } from 'react'
import useUsersList from '../utils/useUsersList'

export default function MainSidebar() {

  // STATES 
  const {getUsers, data : users, isPending, messageSuccess, messageError} = useUsersList("/users?limit=8&skip=5")
  // METHODS 


  //USE EFFECT
  useEffect(() => {

    // Get users list 
    getUsers()

    return () => {
    };
  }, []);




  return (
    <div>
        <div className="mt-4 ml-3 main-sidebar">
            <p className="font-color-777 mb-3">Suggestions for you</p>

          {/* Map through the users list  */}
          
            {Array.isArray(users.users) ? users.users.map(user => (
              <div className="" key={user.id}>
                    <img src={user.image} className="float-left cursor-pointer mt-6 border-2 p-1 rounded-full users-card-image"></img>
                    <div className='float-left'>
                      <h4 className="font-bold mt-6 ml-2">{user.username}</h4>
                      <h4 className="ml-2 font-color-777 font-size-x-small">{user.firstName} {user.lastName}</h4>
                    </div>
                  <p className='ml-36 text-sky-400 font-bold float-right mt-8 mr-6 cursor-pointer'>Follow</p>
                  <br></br>
                  <br></br>
                  <br></br>
              <br></br>

              </div>
             )) : null }
              


          </div>

    </div>
  )
}
