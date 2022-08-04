import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import storiesReducer from './stories'

export const store = configureStore({
  reducer: {
    userDetails : userReducer,
    userStories : storiesReducer,
  },
})