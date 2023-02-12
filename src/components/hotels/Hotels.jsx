import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HotelAvailable from './available/HotelAvailable'
import HotelSearch from './search/HotelSearch'
import './Hotels.css'

const Hotels = () => {
  const [hotels, setHotels] = useState([])
  const [fetch, setFetch] = useState(false)
  useEffect(() => {
    axios.get('https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels')
      .then(res => setHotels(res.data))
      .catch(error => console.error(error))
  }, [fetch])
  return (
    <div className='hotels'>
      <div className="search">
        <HotelSearch hotels={hotels} setHotels={setHotels} fetch={fetch} setFetch={setFetch} />
      </div>
      <div className="available">
        <h2 className="title">Available Hotels</h2>
        <HotelAvailable hotels={hotels} />
      </div>
    </div>
  )
}

export default Hotels