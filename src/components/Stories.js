import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useUsersList from '../utils/useUsersListHook'



export default function Stories() {

  // STATES 
  const {getUsers, data : users, isPending, messageSuccess, messageError} = useUsersList("/users?limit=8")

  // Redux
const userStories = useSelector((state) => state.userStories)
const dispatch = useDispatch()



  // METHODS 


  //USE EFFECT
  useEffect(() => {

    // Get users list 
    if(!Array.isArray(users.users)){
      getUsers()
      dispatch(users.users[0].username) 
    }
   

    return () => {
    };
  }, []);



  return (
    <div className="stories-card border rounded-lg col-span-2 flex pl-4">
        {Array.isArray(users.users) ? users.users.map(user => (
            <div className="mr-4" key={user.id}>
                <img src={user.image} className="cursor-pointer mt-6 border-2 p-1 rounded-full story-image"></img>
                <p className="text-center mt-2">{user.username}</p>
            </div>

        )) : null }
        
                  
    </div>
  )
}
