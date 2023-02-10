import React from 'react'
import { Link } from 'react-router-dom'
import './TrainAvailable.css'

const TrainAvailable = ({ data }) => {
    return (
        <>
            {data && data.map((train, index) => (
                <div className="train_info" key={index}>
                    <table>
                        <thead>
                            <tr>
                                <th>FROM:</th>
                                <th>DEPARTURE</th>
                                <th>Price:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{train.from}</td>
                                <td>
                                    {train.departure.departureTime} | {train.departure.departureDate}
                                </td>
                                <td>{train.price}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>TO:</th>
                                <th>TRAIN NUMBER</th>
                                <th>KILOMETERS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{train.to}</td>
                                <td>{train.train_number}</td>
                                <td>{train.kilometers}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>Duration:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{train.duration}</td>
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

export default TrainAvailable