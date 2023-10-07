import React, {useEffect, useState} from 'react'


const DropDown = ({cities, chosenCity, setChosenCity}) => {
  const [display, setDisplay] = useState('none')

  const handleClick = () => {
    if (display == 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }
  const handleChange = (city) => {
    setChosenCity(city)
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
