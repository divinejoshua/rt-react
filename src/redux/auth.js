import { createSlice } from '@reduxjs/toolkit'
import axios from '../api/axios';


// STATES 
const initialState = {
    access_token: '',
    access_token_loader: false,
}

export const userAccessToken = createSlice({
    name: 'userAccessToken',
    initialState,
    reducers: {
      
      //User stories list 
      registerAccessToken: (state, action) => {
        state.access_token = action.payload

        // Add axios token to axios headers 
        if(state.access_token){
            // Set axios authorisation headers 
            axios.defaults.headers.common['Authorization'] = `Bearer ${state.access_token}`
        } else {
            axios.defaults.headers.common['Authorization'] = null
        }
      },


    //   Get a new access token from refresh token 
      registerGetNewToken: (state, action) =>{
        console.log(state.access_token+"ererere")

      }

  
    },
  })

// Action creators are generated for each case reducer function
export const { registerAccessToken, registerGetNewToken } = userAccessToken.actions

export default userAccessToken.reducer