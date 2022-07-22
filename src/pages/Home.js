import { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";

export default function HomeView() {

// STATES 
const [isLoadingPage, setisLoadingPage] = useState(true);

const [stories, setstories] = useState([]);


//METHODS

// Get story images
const getUsers = () => {

  // Submit 
}




  
//USE EFFECT
useEffect(() => {
  console.log("home")

  //Set loding page to false
  setTimeout(() => {  setisLoadingPage(false) }, 3000);


  return () => {
  }
}, [])


  return (
    <div>

      {/* Top loader  */}
      {isLoadingPage && 
        <div className="linear-activity">
          <div className="indeterminate"></div>
        </div>
      }

      {/* Main header  */}
      <MainHeader/>

      <div className="container mainbody">

        {/* Posts and side bar  */}
        <div className="grid grid-cols-3 gap-4 mt-10">


            {/* Stories  */}
            <div className="stories-card border rounded-lg col-span-2 flex pl-4">
              <div className="mr-4 ">
                <img src="https://robohash.org/consequunturautconsequatur.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full story-image"></img>
                <p className="text-center mt-2">Divine</p>
              </div>
              <div className="mr-4 ">
                <img src="https://robohash.org/consequunturautconsequatur.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full story-image"></img>
                <p className="text-center mt-2">Divine</p>
              </div>
              <div className="mr-4 ">
                <img src="https://robohash.org/consequunturautconsequatur.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full story-image"></img>
                <p className="text-center mt-2">Divine</p>
              </div>
              <div className="mr-4 ">
                <img src="https://robohash.org/consequunturautconsequatur.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full story-image"></img>
                <p className="text-center mt-2">Divine</p>
              </div>
              <div className="mr-4 ">
                <img src="https://robohash.org/consequunturautconsequatur.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full story-image"></img>
                <p className="text-center mt-2">Divine</p>
              </div>
              <div className="mr-4 ">
                <img src="https://robohash.org/consequunturautconsequatur.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full story-image"></img>
                <p className="text-center mt-2">Divine</p>
              </div>
              <div className="mr-4 ">
                <img src="https://robohash.org/consequunturautconsequatur.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full story-image"></img>
                <p className="text-center mt-2">Divine</p>
              </div>
              <div className="mr-4 ">
                <img src="https://robohash.org/consequunturautconsequatur.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full story-image"></img>
                <p className="text-center mt-2">Divine</p>
              </div>
              
                  
            </div>

            {/* Profile card */}
            <div class="ml-3">
              <div className="flex">
                <img src="https://robohash.org/namquaerataut.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full profile-card-image"></img>
                <div>
                  <h4 className="font-bold mt-11 ml-2">divine.er</h4>
                  <h4 className="ml-2 font-color-777">Divine Erhomonsele</h4>
                </div>
              <button className='mt-12 ml-12 add-post-btn bg-blue-400 text-white float-right mt-4 pl-5 pr-5 rounded-lg border mr-6'>Add post</button>

              </div>
            </div>


          {/* Posts  */}
          <div class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <div class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

          {/* Users list  */}
          <div class="mt-4 ml-3">
              <div className="flex">
                    <img src="https://robohash.org/namquaerataut.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full users-card-image"></img>
                    <div>
                      <h4 className="font-bold mt-11 ml-2">divine.er</h4>
                      <h4 className="ml-2 font-color-777">Divine Erhomonsele</h4>
                    </div>
                  <button className='mt-12 ml-12 add-post-btn bg-blue-400 text-white float-right mt-4 pl-5 pr-5 rounded-lg border mr-6'>Add post</button>

              </div>
          </div>
        </div>

      </div>
     
    </div>
    
  )
}
