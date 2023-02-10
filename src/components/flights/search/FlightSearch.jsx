import React from 'react'
import './FlightSearch.css'

const FlightSearch = () => {
    return (
        <>
            <div className='trip-type'>
                <label htmlFor="trip-type">Trip type:</label>
                <select name="trip-type" id="trip-type">
                    <option value="oneway">Oneway</option>
                </select>
            </div>
            <div className="search-container">
                <div className="input">
                    <label htmlFor="from">FROM</label>
                    <input type="text" id='from' />
                </div>
                <div className="input">
                    <label htmlFor="to">TO</label>
                    <input type="text" id='to' />
                </div>
                <div className="input">
                    <label htmlFor="departure">DEPARTURE</label>
                    <input type="date" name="departure" id="departure" />
                </div>
                <div className="input">
                    <label htmlFor="return">RETURN</label>
                    <input type="date" name="return" id="return" />
                </div>
            </div>
        </>
    )
}

export default FlightSearch