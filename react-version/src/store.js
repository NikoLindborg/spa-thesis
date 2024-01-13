import cityReducer from './reducers/cityReducer'
import { configureStore } from '@reduxjs/toolkit'
import citySelectionReducer from './reducers/citySelectionReducer'

const store = configureStore({
  reducer: {
    cities: cityReducer,
    selectedCity: citySelectionReducer
  },
})

export default store
