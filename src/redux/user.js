import { createSlice } from '@reduxjs/toolkit'

// STATES 
const initialState = {
  email: 'divine@gmail.com',
}

export const userDetails = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    
    registerEmail: (state, action) => {
      state.email += action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { registerEmail } = userDetails.actions

export default userDetails.reducer