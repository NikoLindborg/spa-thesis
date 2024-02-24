import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { selectCity } from '../reducers/citySelectionReducer'

const DropDown = ({ cities, chosenCity }) => {

  const dispatch = useDispatch()
  const [display, setDisplay] = useState('none')

  const handleClick = () => {
    if (display == 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }
  const handleChange = (city) => {
    dispatch(selectCity(city))
    handleClick()
  }

  return (
    <div className="dropdown-wrapper">
      <button className="dropdown-button" onClick={handleClick}>
        <div className="buttonText">{chosenCity}</div>{' '}
        <div className="arrow">^</div>
      </button>
      <div style={{display: display}}>
        {cities.map((e, i) => (
          <button
            className="dropdown-list"
            key={i}
            onClick={() => {
              handleChange(e.toString())
            }}
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  )
}

export default DropDown
