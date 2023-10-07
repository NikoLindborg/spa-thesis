import { doFetch } from '../utils/http'


const getAllWeatherData = async (cityIds) => {
  const cityList = cityIds.map(async (cityId) => {
    try {
      const forecastData = await doFetch(
        // eslint-disable-next-line max-len
        `data/2.5/forecast?id=${cityId}&units=metric`
      )

      const weatherData = await doFetch(
        // eslint-disable-next-line max-len
        `data/2.5/weather?id=${cityId}&units=metric`
      )
      const allData = {
        weather: [
          {
            main: weatherData.weather[0].main,
            description: weatherData.weather[0].description,
            icon: weatherData.weather[0].icon,
          },
        ],
        name: weatherData.name,
        dt: weatherData.dt,
        main: {
          temp: weatherData.main.temp,
          humidity: weatherData.main.humidity,
        },
        wind: {
          speed: weatherData.wind.speed,
        },
      }

      allData.list = forecastData.list
      if (weatherData.rain) {
        allData.rain = weatherData.rain
      }
      if (weatherData.snow) {
        allData.snow = weatherData.snow
      }
      return allData
    } catch (error) {
      console.error('error', error)
    }
  })
  const results = await Promise.all(cityList)
  return results
}

export default getAllWeatherData
