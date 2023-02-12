import React from 'react'
import { Link } from 'react-router-dom'
import './HotelAvailable.css'

const HotelAvailable = ({ hotels }) => {
    return (
        <>
            {hotels && hotels.map((hotel, index) => (
                <div className="hotel_info" key={index}>
                    <table>
                        <thead>
                            <tr>
                                <th>HOTEL:</th>
                                <th>CHECK-IN</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{hotel.hotel_name}</td>
                                <td>{hotel.check_in}</td>
                                <td>{hotel.price_per_night} per night</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>CITY:</th>
                                <th>CHECK-OUT</th>
                                <th>Room</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{hotel.city}</td>
                                <td>{hotel.check_out}</td>
                                <td>{hotel.room_type}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>RATING:</th>
                                <th></th>
                                <th>Guests</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{hotel.rating} / 10</td>
                                <th></th>
                                <td>{hotel.guests}</td>
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

export default HotelAvailable