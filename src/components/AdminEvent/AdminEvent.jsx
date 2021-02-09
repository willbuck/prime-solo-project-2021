import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AdminEvent() {
    // console.log('start:', dateOfEvent)
    //     console.log('start to string:', dateOfEvent.toString())
    //     console.log('start to ISO:', dateOfEvent.toISOString())
    //     console.log('start to Locale string:', dateOfEvent.toLocaleString())

    const events = useSelector(store=>store.event)


    const history = useHistory();
    const dispatch = useDispatch();

    const [dateTime, setDateTime] = useState('')
    const [duration, setDuration] = useState(0)

    const handleClick = (eventDate, eventTime, event) => {
        //still rough, pare down after GET/.map showing up right
        event.preventDefault();
        if(!eventDate || !eventTime ){
            alert('please enter all the event information')
        }
        else{
        const dateOfEvent = new Date(eventDate)

        const timeStart =
            ((dateOfEvent.getHours() * 3600000) + (dateOfEvent.getMinutes() * 60000) +
            (dateOfEvent.getSeconds() * 1000) + dateOfEvent.getMilliseconds())

        const newEvent = {
            date: eventDate,
            start: timeStart,
            duration: eventTime,
        }
        //sends new event to event.saga.js
        dispatch({type: 'POST_EVENT', payload: newEvent})
        setDateTime('')
        setDuration(0)
    }
}



    return (
        <div>
            <p></p>
            <form>
                <label htmlFor="start">Start date:</label>

                <input
                    required
                    type="datetime-local"
                    id="start"
                    name="start"
                    min={new Date()}
                    max="2040-12-31"
                    value={dateTime}
                    onChange={(event) => setDateTime(event.target.value)} />

                <label htmlFor="duration">Duration:</label>

                <select
                    required
                    name="duration"
                    id="duration"
                    value={duration}
                    onChange={(event)=>setDuration(event.target.value)}>
                    <option value={0} disabled>Minutes:</option>
                    <option value={15 * 60000}>15</option>
                    <option value={30 * 60000}>30</option>
                    <option value={45 * 60000}>45</option>
                    <option value={60 * 60000}>60</option>
                </select>
                <button onClick={(event) => handleClick(dateTime, duration, event)}>Submit</button>
            </form>
            <p>{JSON.stringify(events)}</p>
        </div>
    )
}
