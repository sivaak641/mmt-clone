import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HotelAvailable from './available/HotelAvailable'
import HotelSearch from './search/HotelSearch'
import './Hotels.css'

const Hotels = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels')
      .then(res => setData(res.data))
      .catch(error => console.error(error))
  }, [])
  return (
    <div className='hotels'>
      <div className="search">
        <HotelSearch />
      </div>
      <div className="available">
        <h2 className="title">Available Hotels</h2>
        <HotelAvailable data={data} />
      </div>
    </div>
  )
}

export default Hotels