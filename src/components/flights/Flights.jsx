import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FlightAvailable from './available/FlightAvailable'
import FlightSearch from './search/FlightSearch'
import './Flights.css'

const Flights = () => {
    const [flights, setFlights] = useState([])
    const [fetch, setFetch] = useState(false)
    useEffect(() => {
        axios.get('https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights')
            .then(res => setFlights(res.data))
            .catch(error => console.error(error))
    }, [fetch])
    return (
        <div className='flights'>
            <div className="search">
                <FlightSearch flights={flights} setFlights={setFlights} setFetch={setFetch} fetch={fetch} />
            </div>
            <div className="available">

                <h2 className='title'>Available Tickets</h2>
                <FlightAvailable flights={flights} />

            </div>

        </div>
    )
}

export default Flights