import { createStore } from 'vuex'


const state = {
  cities: []
}

const setCities = (state, cities) => {
  state.cities = cities
}


export const store = createStore({
  state,
  mutations: { setCities },
})
