import axios from 'axios'
import React, { useEffect } from 'react'

const Flights = () => {
    useEffect(() => {
        axios.get('https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights')
            .then(res => console.log(res))
    }, [])
    return (
        <div>Flights</div>
    )
}

export default Flights