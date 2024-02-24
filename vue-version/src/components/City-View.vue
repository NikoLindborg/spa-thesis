<template>
  <div className="mainContainer">
    <div className="cardContainer">
      <div className="leftContainer">
        <div className="topLeft">
          <div className="cityName">{{ city.city.name }}</div>
          <div className="weatherConditions">
            {{ city.city.weather[0].description }}
          </div>
        </div>
        <div className="bottomLeft">
          <div className="day">{{ day }}</div>
          <div className="time">{{ time }}</div>
        </div>
      </div>
      <div className="rightContainer">
        <div className="topRight">
          <img className="weatherImg" :src="imageUri.value" alt="weather icon" />

          {{ Math.round(city.city.main.temp) }} °C
        </div>
        <div className="bottomRight">
          <div>Wind: {{ city.city.wind.speed.toFixed(1) }} m/s</div>
          <div>Humidity: {{ city.city.main.humidity }}%</div>
          <div>Precipitation ({{ precipitation.length }}): {{ precipitation.amount }}mm</div>
        </div>
      </div>
    </div>
    <div
      className="smallCardsContainer"
      v-if="smallCardList != undefined && smallCardList.length !== 0"
    >
      <SmallCard
        v-for="(it, index) in smallCardList"
        v-bind:key="{ index }"
        :dt="it.dt"
        :main="it.main"
        :weather="it.weather[0]"
        :wind="it.wind"
        :snow="it.rain"
        :rain="it.snow"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { precipitationMap } from '../utils/precipitationMapper'
import SmallCard from './SmallCard.vue'

const city = defineProps({
  city: {
    weather: [
      {
        main: String,
        description: String,
        icon: String
      }
    ],
    name: String,
    dt: String,
    main: {
      temp: String,
      humidity: String
    },
    wind: {
      speed: String
    },
    snow: {
      '1h': Number | undefined,
      '3h': Number | undefined
    },
    rain: {
      '1h': Number | undefined,
      '3h': Number | undefined
    },
    list: [
      {
        dt: Number,
        main: {
          temp: Number,
          humidity: Number
        },
        weather: [
          {
            id: Number,
            main: String,
            description: String,
            icon: String
          }
        ],
        wind: {
          speed: String
        },
        snow: {
          '1h': String | undefined,
          '3h': String | undefined
        },
        rain: {
          '1h': String | undefined,
          '3h': String | undefined
        }
      }
    ]
  }
})

const imageUri = ref(`http://openweathermap.org/img/wn/${city.city.weather[0].icon}@2x.png`)

const date = new Date(city.city.dt * 1000)

const day = computed(() =>
  date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric'
  })
)
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

const smallCardList = ref([])

const updatePrecipitation = () => {
  const newPrecipitationData = precipitationMap(city.city)
  precipitation.value.length = newPrecipitationData.length
  precipitation.value.amount = newPrecipitationData.amount
}

const updateSmallCardList = () => {
  smallCardList.value = city.city.list.slice(0, 5)
}

onMounted(() => {
  updatePrecipitation()
  updateSmallCardList()
})


</script>
<style></style>
