import { createSlice } from '@reduxjs/toolkit'

// STATES 
const initialState = {
  email: '',
}

export const userDetails = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    
    // Register user email from login / register 
    registerEmail: (state, action) => {
      state.email = action.payload

    //   Calling another reducer function in a reducer function 
      userDetails.caseReducers.testEmail(state, action);

    },

    // This reducer function is a test whic is called immediately a reducer function is done 
    testEmail: (state, action) => {
        // console.log(action.payload)
      },

  },
})

// Action creators are generated for each case reducer function
export const { registerEmail } = userDetails.actions

export default userDetails.reducer