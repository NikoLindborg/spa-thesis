<template>
  <div className="card-wrapper">
    <div className="dropdown-card-wrapper" v-if="dropDownCityList.length !== 0">
      <Dropdown
        :cities="dropDownCityList"
        :chosenCity="chosenCity"
        @set-city="(it) => setChosenCity(it)"
      />

      <div className="city-wrapper" v-if="cities != undefined && cities.length !== 0">
        <City v-for="(city, index) in listOfCities" v-bind:key="{ index }" :city="city" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import Dropdown from './Drop-Down.vue'
import City from './City-View.vue'
import { cities as cityList } from '../utils/cities'

const store = useStore()

const cities = ref([])

const chosenCity = ref('All cities')

const watchedCities = computed(() => store.state.cities)
const dropDownCityList = ref([])

watch(watchedCities, (newValue, oldValue) => {
  // Do something when the watched value changes
  console.log('Value changed:', newValue, oldValue)
  cities.value = newValue
})

onMounted(() => {
  initializeDropdownCityList()
})

const updateDropdownCityList = (cityToDelete, cityToAdd) => {
  const copy = dropDownCityList.value.filter(it => it != cityToDelete)
  copy.push(cityToAdd)
  dropDownCityList.value = copy
}

const initializeDropdownCityList = () => {
  dropDownCityList.value = cityList.filter((it) => it.city != chosenCity.value).map((it) => it.city)
}

const listOfCities = computed(() => {
  if (chosenCity.value === 'All cities') return cities.value
  return cities.value.filter((it) => it.name == chosenCity.value)
})

const setChosenCity = (newCity) => {
  updateDropdownCityList(newCity, chosenCity.value)
  chosenCity.value = newCity
}
</script>

<style></style>
