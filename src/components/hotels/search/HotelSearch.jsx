import React from 'react'
import './HotelSearch.css'

const HotelSearch = () => {
    return (
        <>
            <div className='room-type'>
                <label htmlFor="room-type">Room type:</label>
                <select name="room-type" id="room-type">
                    <option value="single">Single</option>
                </select>
            </div>
            <div className="search-container">
                <div className="input">
                    <label htmlFor="from">CITY OR LOCATION</label>
                    <input type="text" id='from' name='from' />
                </div>
                <div className="input">
                    <label htmlFor="check-in">CHECK-IN</label>
                    <input type="date" id='check-in' name='check-in' />
                </div>
                <div className="input">
                    <label htmlFor="check-out">CHECK-OUT</label>
                    <input type="date" name="check-out" id="check-out" />
                </div>
                <div className="input">
                    <label htmlFor="guests">GUESTS</label>
                    <input type="text" name="guests" id="guests" />
                </div>
            </div>
        </>
    )
}

export default HotelSearch