import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FlightAvailable from './available/FlightAvailable'
import FlightSearch from './search/FlightSearch'
import './Flights.css'

const Flights = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights')
            .then(res => setData(res.data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='flights'>
            <div className="search">
                <FlightSearch />
            </div>
            <div className="available">
                <h2 className='title'>Available Tickets</h2>
                <FlightAvailable data={data} />
            </div>

        </div>
    )
}

export default Flights