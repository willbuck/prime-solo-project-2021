import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AdminEvent() {


    const history = useHistory();
    const dispatch = useDispatch();

    const [dateTime, setDateTime] = useState(new Date())
    const [durationTime, setDurationTime] = useState(0)

    const handleClick = (dateChecker, timeChecker, event) => {
        //still rough, pare down after GET/.map showing up right
        event.preventDefault();

        const dateOfEvent = new Date(dateChecker)

        const timeStart =
            ((dateOfEvent.getHours() * 3600000) + (dateOfEvent.getMinutes() * 60000) +
            (dateOfEvent.getSeconds() * 1000) + dateOfEvent.getMilliseconds())

        const newEvent = {
            date: dateChecker,
            start: timeStart,
            duration: timeChecker,
        }
        //sends new event to event.saga.js
        dispatch({type: 'POST_EVENT', payload: newEvent})
    }



    return (
        <div>
            <p></p>
            <form>
                <label htmlFor="start">Start date:</label>

                <input
                    type="datetime-local"
                    id="start"
                    name="start"
                    min={new Date()}
                    max="2040-12-31"
                    value={dateTime}
                    onChange={(event) => setDateTime(event.target.value)} />

                <label htmlFor="duration">Duration:</label>

                <select
                    name="duration"
                    id="duration"
                    value={durationTime}
                    onChange={(event)=>setDurationTime(event.target.value)}>
                    <option value={0} disabled>Minutes:</option>
                    <option value={15 * 60000}>15</option>
                    <option value={30 * 60000}>30</option>
                    <option value={45 * 60000}>45</option>
                    <option value={60 * 60000}>60</option>
                </select>
                <button onClick={(event) => handleClick(dateTime, durationTime, event)}>Submit</button>
            </form>
        </div>
    )
}
