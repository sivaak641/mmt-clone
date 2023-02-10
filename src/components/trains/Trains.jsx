import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TrainAvailable from './available/TrainAvailable'
import TrainSearch from './search/TrainSearch'
import './Trains.css'

const Trains = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get('https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains')
      .then(res => setdata(res.data))
      .catch(error => console.error(error))
  }, [])
  return (
    <div className='trains'>
      <div className="search">
        <TrainSearch />
      </div>
      <div className="available">
        <h2 className="title">Available Tickets</h2>
        <TrainAvailable data={data} />
      </div>

    </div>
  )
}

export default Trains