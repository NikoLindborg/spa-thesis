import React from 'react'
import './App.css'
import CityList from './components/CityList'
import { initializeCities } from './reducers/cityReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeCities())
  }, [dispatch])

  return (
    <div className="App">
      <header className="header">Weather radar</header>
      <CityList />
    </div>
  )
}
