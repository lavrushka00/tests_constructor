import { configureStore, getDefaultMiddleware   } from '@reduxjs/toolkit'



import {fetchTests} from './slices/testsSlice'
import {auth} from './slices/auth'

import { tests } from './slices/testsSlice'

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export const store = configureStore({
  reducer: {

    tests: tests,
    auth: auth,
   
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(
  // {
  //   serializableCheck: false
  // }
  // ),
})