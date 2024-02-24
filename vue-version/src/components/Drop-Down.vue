<template>
  <div className="dropdown-wrapper">
    <button className="dropdown-button" @click="toggleList">
      <div className="buttonText">{{ chosenCity }}</div>
      <div className="arrow">^</div>
    </button>
    <div :style="{ display: display }">
      <button
        className="dropdown-list"
        v-for="(city, index) in props.cities"
        v-bind:key="index"
        @click="selectCity(city)"
      >
        {{ city }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({ cities: [String], chosenCity: String })
const store = useStore()

const display = ref('none')

const selectCity = (newCity) => {
  store.commit('setSelectedCity', newCity)
}

const toggleList = () => {
  display.value = display.value === 'none' ? 'block' : 'none'
}
</script>
<script>
export default {
  name: 'DropDown'
}
</script>
<style></style>
