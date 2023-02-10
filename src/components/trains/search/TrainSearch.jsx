import React from 'react'
import './TrainSearch.css'

const TrainSearch = () => {
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
                    <input type="text" id='from' name='from'/>
                </div>
                <div className="input">
                    <label htmlFor="to">TO</label>
                    <input type="text" id='to' name='to'/>
                </div>
                <div className="input">
                    <label htmlFor="travel-date">TRAVEL DATE</label>
                    <input type="date" name="travel-date" id="travel-date" />
                </div>
                <div className="input">
                    <label htmlFor="class">CLASS</label>
                    <input type="text" name="class" id="class" />
                </div>
            </div>
        </>
    )
}

export default TrainSearch