/* eslint-disable indent */
import React, { useState } from 'react'
import City from './City'
import DropDown from './Dropdown'
import { useSelector } from 'react-redux'
import { cities as cityList } from '../utils/cities'


const CityList = () => {
  const cities = useSelector((state) => state.cities)
  const [chosenCity, setChosenCity] = useState("All cities")

  return (
    <div className="card-wrapper">
      <div className="dropdown-card-wrapper">
        <DropDown
          cities={cityList.filter(it => it.city != chosenCity).map((e) => e.city)}
          chosenCity={chosenCity}
          setChosenCity={setChosenCity}
        />
        {chosenCity == "All cities"
          ? cities.map((e, i) => <City key={i} city={e} />)
          : cities
              .filter((e) => e.name == chosenCity)
              .map((e, i) => <City key={i} city={e} />)}
      </div>
    </div>
  )
}

export default CityList
