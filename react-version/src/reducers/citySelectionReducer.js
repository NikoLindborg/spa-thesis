import { createSlice } from '@reduxjs/toolkit'

const citySelectionSlice = createSlice({
  name: 'selectedCity',
  initialState: 'All cities',
  reducers: {
    setSelectedCity(state, action) {
      return action.payload
    },
  },
})

export const { setSelectedCity } = citySelectionSlice.actions

export const selectCity = (newCity) => {
  return (dispatch) => {
    dispatch(setSelectedCity(newCity))
  }
}

export default citySelectionSlice.reducer
