import React from 'react'
import SmallCard from './SmallCard'
import { precipitationMap } from '../utils/precipitationMapper'


const City = ({ city }) => {
  const date = new Date(city.dt * 1000)
  const day = date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  })
  const time = date.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
  })

  

  const precipitation = precipitationMap(city)

  return (
    <div className="mainContainer">
      <div className="cardContainer">
        <div className="leftContainer">
          <div className="topLeft">
            <div className="cityName">{city.name}</div>
            <div className="weatherConditions">
              {city.weather[0].description}
            </div>
          </div>
          <div className="bottomLeft">
            <div className="day">{day}</div>
            <div className="time">{time}</div>
          </div>
        </div>
        <div className="rightContainer">
          <div className="topRight">
            <img
              className="weatherImg"
              src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
            {Math.round(city.main.temp)} °C
          </div>
          <div className="bottomRight">
            <div>Wind: {city.wind.speed.toFixed(1)} m/s</div>
            <div>Humidity: {city.main.humidity}%</div>
            <div>
              Precipitation ({precipitation?.length}): {precipitation?.amount}mm
            </div>
          </div>
        </div>
      </div>
      <div className="smallCardsContainer">
        {city.list.slice(0, 5).map((el, i) => (
          <SmallCard
            key={i}
            dt={el.dt}
            main={el.main}
            weather={el.weather}
            wind={el.wind}
            snow={el.rain}
            rain={el.snow}
          />
        ))}
      </div>
    </div>
  )
}

export default City
