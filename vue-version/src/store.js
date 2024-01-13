import { createStore } from 'vuex'


const state = {
  cities: [],
  selectedCity: "All cities"
}

const setCities = (state, cities) => {
  state.cities = cities
}

const setSelectedCity = (state, city) => {
  state.selectedCity = city
}


export const store = createStore({
  state,
  mutations: { setCities, setSelectedCity },
})
