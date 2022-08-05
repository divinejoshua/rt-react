import { createSlice } from '@reduxjs/toolkit'

// STATES 
const initialState = {
  stories: [],
}

export const userStories = createSlice({
  name: 'userStories',
  initialState,
  reducers: {
    
    //User stories list 
    registerStories: (state, action) => {
      state.stories = action.payload
      console.log(state.stories)
    },

  },
})

// Action creators are generated for each case reducer function
export const { registerStories } = userStories.actions

export default userStories.reducer