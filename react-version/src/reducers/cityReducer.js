import { createSlice } from '@reduxjs/toolkit'
import getAllWeatherData from '../services/weatherService'
import { cities } from '../utils/cities'

const citySlice = createSlice({
  name: 'cities',
  initialState: [],
  reducers: {
    setCities(state, action) {
      return action.payload
    },
  },
})

export const { setCities } = citySlice.actions

export const initializeCities = () => {
  return async (dispatch) => {
    const filteredMappedCities = cities
      .map((it) => it.id)
      .filter((it) => it != 0)
    const citiesWeather = await getAllWeatherData(filteredMappedCities)
    dispatch(setCities(citiesWeather))
  }
}

export default citySlice.reducer
