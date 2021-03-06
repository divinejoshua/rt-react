import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import MainSidebar from "../components/MainSidebar";
import { useForm } from "react-hook-form"

export default function PostView() {

// STATES 
const [isLoadingPage, setisLoadingPage] = useState(true);

const [stories, setstories] = useState([]);

// Comment form 
const { register, handleSubmit, formState: { errors, isValid }  } = useForm({mode: 'all'});


//METHODS
const handleError = (errors) => {}

const handleComment = (errors) => {}

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
                <Link to="/post/1"><div className="float-right mt-3 text-sky-400 mr-5 cursor-pointer">View</div></Link>
              </div>

              {/* Post image  */}
              <div>
                <br></br>
                <img src="https://picsum.photos/300/300?" className="post-img mt-4" alt="wetroverse"></img>
              </div>

              {/* Likes and caption */}
              <div className="p-6">
                  <div className="mb-3 font-color-777 mr-5 cursor-pointer">Like &nbsp;&nbsp;???&nbsp;&nbsp;200 </div>
                  His mother had always taught him 
                <br></br>
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span> 
                <span className="text-default">#endregion&nbsp;&nbsp;</span>
              </div>
            </div>

            <form  onSubmit={handleSubmit(handleComment, handleError)} noValidate>
                <input type="text" autoFocus name="comment" autoComplete="off"  aria-autocomplete="off" placeholder="Add comment" {...register('coment')}
                    className={"none mt-3 form-control w-full pl-6 border border-gray-300 focus:outline-none focus:border-default focus:ring-default focus:ring-0.5 focus:border-100 transition duration-0 hover:duration-150"}
                />
              <button className='mt-6 ml-20 add-post-btn hover:border-default hover:bg-default hover:text-white transition duration-0 hover:duration-150 float-right mt-4 pl-5 pr-5 rounded-lg border'>Add comment</button>


            </form>
            

          </div>


          {/* second column  */}
          <div className="mt-4">

            
           <h4 className="ml-4 mt-1 font-color-777">Comments</h4>

                {/* Comments  */}
                <div className="flex">
                    <img src="https://robohash.org/quisequienim.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full comment-card-image"></img>
                    <div>
                    <h4 className="font-bold mt-7 ml-2">divine.er</h4>
                    <h4 className="ml-2 font-color-777 font-size-x-small">You amaze me!</h4>
                    </div>
                </div>

                <div className="flex">
                    <img src="https://robohash.org/quisequienim.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full comment-card-image"></img>
                    <div>
                    <h4 className="font-bold mt-7 ml-2">divine.er</h4>
                    <h4 className="ml-2 font-color-777 font-size-x-small">You amaze me!</h4>
                    </div>
                </div>

                <div className="flex">
                    <img src="https://robohash.org/quisequienim.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full comment-card-image"></img>
                    <div>
                    <h4 className="font-bold mt-7 ml-2">divine.er</h4>
                    <h4 className="ml-2 font-color-777 font-size-x-small">You amaze me!</h4>
                    </div>
                </div>

                <div className="flex">
                    <img src="https://robohash.org/quisequienim.png" className="cursor-pointer mt-6 border-2 p-1 rounded-full comment-card-image"></img>
                    <div>
                    <h4 className="font-bold mt-7 ml-2">divine.er</h4>
                    <h4 className="ml-2 font-color-777 font-size-x-small">Divine Erhomonsele</h4>
                    </div>
                    <p className='ml-36 font-color-c4 float-right mt-8 mr-6 cursor-pointer'>Delete</p>

                </div>




          </div>



          {/* Users list  */}
          <MainSidebar/>

        </div>

      </div>
     
    </div>
    
  )
}
