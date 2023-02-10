import React from 'react'
import { Link } from 'react-router-dom'
import './FlightAvailable.css'

const FlightAvailable = ({ data }) => {
    return (
        <>
            {data && data.map((flight, index) => (
                <div className="flight_info" key={index}>
                    <table>
                        <thead>
                            <tr>
                                <th>FROM:</th>
                                <th>DEPARTURE</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{flight.from}</td>
                                <td>
                                    {flight.departure.departureTime} | {flight.departure.departureDate}
                                </td>
                                <td>{flight.price}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>TO:</th>
                                <th>RETURN</th>
                                <th>Via</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{flight.to}</td>
                                <td>
                                    {flight.return.returnTime} | {flight.return.returnDate}
                                </td>
                                <td>{flight.via != '' ? flight.via : '-'}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>Airline:</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{flight.airlineName}</td>
                                <td>{flight.duration}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="booknow">
                        <Link to='/checkout'><button className='btn-booknow' type='button'>Book</button></Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default FlightAvailable