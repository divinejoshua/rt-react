import React from 'react'
import useUsersList from '../utils/useUsersList'

export default function MainSidebar() {

  // STATES 
  const {getUsers, data : users, isPending, messageSuccess, messageError} = useUsersList()


  return (
    <div>
        <div className="mt-4 ml-3">
            <p className="font-color-777 mb-3">Suggestions for you</p>
              <div className="flex">
                    <img src="https://robohash.org/quisequienim.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full users-card-image"></img>
                    <div>
                      <h4 className="font-bold mt-6 ml-2">divine.er</h4>
                      <h4 className="ml-2 font-color-777 font-size-x-small">Divine Erhomonsele</h4>
                    </div>
                  <p className='ml-36 text-sky-400 font-bold float-right mt-8 mr-6 cursor-pointer'>Follow</p>

              </div>

              <div className="flex">
                    <img src="https://robohash.org/quisequienim.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full users-card-image"></img>
                    <div>
                      <h4 className="font-bold mt-6 ml-2">divine.er</h4>
                      <h4 className="ml-2 font-color-777 font-size-x-small">Divine Erhomonsele</h4>
                    </div>
                  <p className='ml-36 text-sky-400 font-bold float-right mt-8 mr-6 cursor-pointer'>Follow</p>

              </div>

              <div className="flex">
                    <img src="https://robohash.org/quisequienim.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full users-card-image"></img>
                    <div>
                      <h4 className="font-bold mt-6 ml-2">divine.er</h4>
                      <h4 className="ml-2 font-color-777 font-size-x-small">Divine Erhomonsele</h4>
                    </div>
                  <p className='ml-36 text-sky-400 font-bold float-right mt-8 mr-6 cursor-pointer'>Follow</p>

              </div>

              <div className="flex">
                    <img src="https://robohash.org/quisequienim.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full users-card-image"></img>
                    <div>
                      <h4 className="font-bold mt-6 ml-2">divine.er</h4>
                      <h4 className="ml-2 font-color-777 font-size-x-small">Divine Erhomonsele</h4>
                    </div>
                  <p className='ml-36 text-sky-400 font-bold float-right mt-8 mr-6 cursor-pointer'>Follow</p>

              </div>

              <div className="flex">
                    <img src="https://robohash.org/quisequienim.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full users-card-image"></img>
                    <div>
                      <h4 className="font-bold mt-6 ml-2">divine.er</h4>
                      <h4 className="ml-2 font-color-777 font-size-x-small">Divine Erhomonsele</h4>
                    </div>
                  <p className='ml-36 text-sky-400 font-bold float-right mt-8 mr-6 cursor-pointer'>Follow</p>

              </div>

              <div className="flex">
                    <img src="https://robohash.org/quisequienim.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full users-card-image"></img>
                    <div>
                      <h4 className="font-bold mt-6 ml-2">divine.er</h4>
                      <h4 className="ml-2 font-color-777 font-size-x-small">Divine Erhomonsele</h4>
                    </div>
                  <p className='ml-36 text-sky-400 font-bold float-right mt-8 mr-6 cursor-pointer'>Follow</p>

              </div>
          </div>
    </div>
  )
}
