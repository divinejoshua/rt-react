import { createSlice } from '@reduxjs/toolkit'

// STATES 
const initialState = {
  stories: [],
}

export const userStories = createSlice({
  name: 'userStories',
  initialState,
  reducers: {
    
    // Register user email from login / register 
    registerEmail: (state, action) => {
      state.stories = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { registerEmail } = userStories.actions

export default userStories.reducer