import cityReducer from './reducers/cityReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    cities: cityReducer
  },
})

export default store
