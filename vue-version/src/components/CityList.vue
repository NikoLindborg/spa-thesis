<template>
  <div className="card-wrapper">
    <div className="dropdown-card-wrapper" v-if="dropDownCityList.length !== 0">
      <Dropdown
        :cities="dropDownCityList"
        :chosenCity="chosenCity"
      />

      <div className="city-wrapper" v-if="cities != undefined && cities.length !== 0">
        <City v-for="(city, index) in cities" v-bind:key="{ index }" :city="city" />
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


const chosenCity = computed(() => store.state.selectedCity)
const dropDownCityList = ref([])


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

const cities = computed(() => {
  if (chosenCity.value === 'All cities') return store.state.cities
  return store.state.cities.filter((it) => it.name == chosenCity.value)
})

watch(chosenCity, (newValue, oldValue) => {
  updateDropdownCityList(newValue, oldValue)
})


</script>

<style></style>
