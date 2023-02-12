import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TrainAvailable from './available/TrainAvailable'
import TrainSearch from './search/TrainSearch'
import './Trains.css'

const Trains = () => {
  const [trains, setTrains] = useState([])
  const [fetch, setFetch] = useState(false)
  useEffect(() => {
    axios.get('https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains')
      .then(res => setTrains(res.data))
      .catch(error => console.error(error))
  }, [fetch])
  return (
    <div className='trains'>
      <div className="search">
        <TrainSearch
          trains={trains}
          setTrains={setTrains}
          fetch={fetch}
          setFetch={setFetch}
        />
      </div>
      <div className="available">
        <h2 className="title">Available Tickets</h2>
        <TrainAvailable trains={trains} />
      </div>

    </div>
  )
}

export default Trains