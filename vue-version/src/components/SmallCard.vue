<template>
  <div className="smallCardContainer">
    <div className="time">{{ time }}</div>
    <img className="weatherImg" :src="imageUri.valueOf" alt="weather icon" />
    <div className="smallWeather">{{ Math.round(city.main.temp) }} °C</div>
    <div className="bottomPart">
      <div>{{ city.wind.speed.toFixed(1) }} m/s</div>
      <div>{{ city.main.humidity }}%</div>
      <div>{{ Math.round(precipitation.amount) }}mm</div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { precipitationMap } from '../utils/precipitationMapper'

const city = defineProps({
  dt: Number,
  main: {
    temp: Number,
    humidity: Number
  },
  weather: {
    id: Number,
    main: String,
    description: String,
    icon: String
  },
  wind: {
    speed: Number
  },
  snow: {
    '1h': String | undefined,
    '3h': String | undefined
  },
  rain: {
    '1h': String | undefined,
    '3h': String | undefined
  }
})

const imageUri = computed(() => `http://openweathermap.org/img/wn/${city.weather.icon}.png`)

const date = new Date(city.dt * 1000)

const time = computed(() =>
  date.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: 'numeric'
  })
)

const precipitation = ref({
  amount: '',
  length: ''
})

const updatePrecipitation = () => {
  const newPrecipitationData = precipitationMap({ snow: city.snow, rain: city.rain })
  precipitation.value.length = newPrecipitationData.length
  precipitation.value.amount = newPrecipitationData.amount
}

onMounted(() => {
  updatePrecipitation()
})
</script>

<style></style>
