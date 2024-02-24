/* eslint-disable indent */
import React, { useState } from 'react'
import City from './City'
import DropDown from './Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { cities as cityList } from '../utils/cities'


export default function CityList()  {
  const cities = useSelector((state) => state.cities)
  const selectedCity = useSelector((state) => state.selectedCity)
 
  return (
    <div className="card-wrapper">
      <div className="dropdown-card-wrapper">
        <DropDown
          cities={cityList
            .filter((it) => it.city != selectedCity)
            .map((e) => e.city)}
          chosenCity={selectedCity}
        />
        {selectedCity == 'All cities'
          ? cities.map((e, i) => <City key={i} city={e} />)
          : cities
              .filter((e) => e.name == selectedCity)
              .map((e, i) => <City key={i} city={e} />)}
      </div>
    </div>
  )
}
