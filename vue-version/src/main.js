import './assets/main.css'
import './assets/App.css'
import CityList from './components/CityList.vue'

import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'

const app = createApp(App)
app.component('CityList', CityList)
app.use( store)

app.mount('#app')
