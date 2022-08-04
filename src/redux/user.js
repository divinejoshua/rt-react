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
    registerEmail: ({state, dispatch}, action) => {
      state.email = action.payload
      dispatch(testEmail("worked"))
    },
    testEmail: (state, action) => {
        console.log(action.payload)
        state.email = "worked"
      },

  },
})

// Action creators are generated for each case reducer function
export const { registerEmail } = userDetails.actions

export default userDetails.reducer