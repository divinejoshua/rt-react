import { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";

export default function PostView() {

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
            <div className="ml-3">
              <div className="flex mt-3">
                <img src="https://robohash.org/namquaerataut.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full profile-card-image"></img>
                <div>
                  <h4 className="font-bold mt-11 ml-2">divine.er</h4>
                  <h4 className="ml-2 font-color-777 font-size-x-small">Divine Erhomonsele</h4>
                </div>
              <button className='mt-12 ml-20 add-post-btn float-right mt-4 pl-5 pr-5 rounded-lg border'>Add post</button>

              </div>
            </div>


          {/* Posts  */}

          {/* First column  */}
          <div className="mt-4">

            {/* Post */}
            <div className="post-card border rounded-lg pt-3 mb-4">

              {/* Post user  */}
              <div className="mb-5">
                <div className="float-left"><img src="https://robohash.org/namquaerataut.png" className="ml-3 border-2 p-1 rounded-full user-post-img"></img></div>
                <div className="float-left mt-3 font-bold ml-2">divine.er</div>
                <div className="float-right mt-3 text-sky-400 mr-5 cursor-pointer">View</div>
              </div>

              {/* Post image  */}
              <div>
                <br></br>
                <img src="https://picsum.photos/300/300?" className="post-img mt-4" alt="wetroverse"></img>
              </div>

              {/* Likes and caption */}
              <div className="p-6">
                  <div className="mb-3 font-color-777 mr-5 cursor-pointer">Like &nbsp;&nbsp;•&nbsp;&nbsp;200 </div>
                  His mother had always taught him 
                <br></br>
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span>
              </div>
            </div>


              {/* Post */}
              <div className="post-card border rounded-lg pt-3 mb-4">

              {/* Post user  */}
              <div className="mb-5">
                <div className="float-left"><img src="https://robohash.org/namquaerataut.png" className="ml-3 border-2 p-1 rounded-full user-post-img"></img></div>
                <div className="float-left mt-3 font-bold ml-2">divine.er</div>
                <div className="float-right mt-3 text-sky-400 mr-5 cursor-pointer">View</div>
              </div>

              {/* Post image  */}
              <div>
                <br></br>
                <img src="https://picsum.photos/300/300?" className="post-img mt-4" alt="wetroverse"></img>
              </div>

              {/* Likes and caption */}
              <div className="p-6">
                  <div className="mb-3 font-color-777 mr-5 cursor-pointer">Like &nbsp;&nbsp;•&nbsp;&nbsp;200 </div>
                  His mother had always taught him 
                <br></br>
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span>
              </div>
              </div>

            
            
            {/* Post */}
            <div className="post-card border rounded-lg pt-3 mb-4">

              {/* Post user  */}
              <div className="mb-5">
                <div className="float-left"><img src="https://robohash.org/namquaerataut.png" className="ml-3 border-2 p-1 rounded-full user-post-img"></img></div>
                <div className="float-left mt-3 font-bold ml-2">divine.er</div>
                <div className="float-right mt-3 text-sky-400 mr-5 cursor-pointer">View</div>
              </div>

              {/* Post image  */}
              <div>
                <br></br>
                <img src="https://picsum.photos/300/300?" className="post-img mt-4" alt="wetroverse"></img>
              </div>

              {/* Likes and caption */}
              <div className="p-6">
                  <div className="mb-3 font-color-777 mr-5 cursor-pointer">Like &nbsp;&nbsp;•&nbsp;&nbsp;200 </div>
                  His mother had always taught him 
                <br></br>
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span>
              </div>
            </div>

            

          </div>


          {/* second column  */}
          <div className="mt-4">

            
            {/* Post */}
            <div className="post-card border rounded-lg pt-3 mb-4">

              {/* Post user  */}
              <div className="mb-5">
                <div className="float-left"><img src="https://robohash.org/namquaerataut.png" className="ml-3 border-2 p-1 rounded-full user-post-img"></img></div>
                <div className="float-left mt-3 font-bold ml-2">divine.er</div>
                <div className="float-right mt-3 text-sky-400 mr-5 cursor-pointer">View</div>
              </div>

              {/* Post image  */}
              <div>
                <br></br>
                <img src="https://picsum.photos/300/300?" className="post-img mt-4" alt="wetroverse"></img>
              </div>

              {/* Likes and caption */}
              <div className="p-6">
                  <div className="mb-3 font-color-777 mr-5 cursor-pointer">Like &nbsp;&nbsp;•&nbsp;&nbsp;200 </div>
                  His mother had always taught him 
                <br></br>
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span>
              </div>
            </div>


              {/* Post */}
              <div className="post-card border rounded-lg pt-3 mb-4">

              {/* Post user  */}
              <div className="mb-5">
                <div className="float-left"><img src="https://robohash.org/namquaerataut.png" className="ml-3 border-2 p-1 rounded-full user-post-img"></img></div>
                <div className="float-left mt-3 font-bold ml-2">divine.er</div>
                <div className="float-right mt-3 text-sky-400 mr-5 cursor-pointer">View</div>
              </div>

              {/* Post image  */}
              <div>
                <br></br>
                <img src="https://picsum.photos/300/300?" className="post-img mt-4" alt="wetroverse"></img>
              </div>

              {/* Likes and caption */}
              <div className="p-6">
                  <div className="mb-3 font-color-777 mr-5 cursor-pointer">Like &nbsp;&nbsp;•&nbsp;&nbsp;200 </div>
                  His mother had always taught him 
                <br></br>
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span>
              </div>
              </div>

            
            
            {/* Post */}
            <div className="post-card border rounded-lg pt-3 mb-4">

              {/* Post user  */}
              <div className="mb-5">
                <div className="float-left"><img src="https://robohash.org/namquaerataut.png" className="ml-3 border-2 p-1 rounded-full user-post-img"></img></div>
                <div className="float-left mt-3 font-bold ml-2">divine.er</div>
                <div className="float-right mt-3 text-sky-400 mr-5 cursor-pointer">View</div>
              </div>

              {/* Post image  */}
              <div>
                <br></br>
                <img src="https://picsum.photos/300/300?" className="post-img mt-4" alt="wetroverse"></img>
              </div>

              {/* Likes and caption */}
              <div className="p-6">
                  <div className="mb-3 font-color-777 mr-5 cursor-pointer">Like &nbsp;&nbsp;•&nbsp;&nbsp;200 </div>
                  His mother had always taught him 
                <br></br>
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span>
              </div>
            </div>


            
          </div>



          {/* Users list  */}
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

      </div>
     
    </div>
    
  )
}