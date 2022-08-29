import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import storiesReducer from './stories'
import accessTokenReducer from './auth'

export const store = configureStore({
  reducer: {
    userDetails : userReducer,
    userStories : storiesReducer,
    userAccessToken : accessTokenReducer,
  },
})