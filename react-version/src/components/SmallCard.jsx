import React from 'react'
import { precipitationMap } from '../utils/precipitationMapper'

const SmallCard = ({ dt, main, weather, wind, snow, rain }) => {
  const time = new Date(dt * 1000).toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
  })

  const precipitation = precipitationMap({ snow: snow, rain: rain })

  return (
    <div className="smallCardContainer">
      <div className="time">{time}</div>
      <img
        className="weatherImg"
        src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
        alt="weather icon"
      />
      <div className="smallWeather">{Math.round(main.temp)} °C</div>
      <div className="bottomPart">
        <div>{wind.speed.toFixed(1)} m/s</div>
        <div>{main.humidity}%</div>
        <div>{Math.round(precipitation?.amount)}mm</div>
      </div>
    </div>
  )
}

export default SmallCard
