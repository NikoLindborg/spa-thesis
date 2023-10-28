<template>
  <div className="dropdown-wrapper">
    <button className="dropdown-button" @click="toggleList">
      <div className="buttonText">{{ chosenCity }}</div>
      <div className="arrow">^</div>
    </button>
    <div :style="{ display: display}">
      <button
        className="dropdown-list"
        v-for="(city, index) in props.cities"
        v-bind:key="index"
        @click="$emit('set-city', city)"
      >
        {{ city }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({ cities: [String], chosenCity: String })

const display = ref('none')

const toggleList = () => {
  display.value = display.value === 'none' ? 'block' : 'none'
   console.log('clicked')
}

</script>
<script>
export default {
  name: 'DropDown'
}
</script>
<style></style>
