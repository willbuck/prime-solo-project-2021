import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import MountainFooter from '../Mountains/MountainFooter'

export default function AdminEvent() {

    //reducer for events in DB, called on load and put on DOM
    const eventList = useSelector(store=>store.event)

    const dispatch = useDispatch();

    //state to hold user input for date/time and duration
    const [dateTime, setDateTime] = useState('')
    const [duration, setDuration] = useState(0)

    //handles form submit, packages data for DB
    const handleClick = (eventDate, eventTime, event) => {

        event.preventDefault();
        //form validation
        if(!eventDate || !eventTime ){
            alert('please enter all the event information')
        }

        else{
        //if all information is present, makes new Date() based on user input, then newEvent packages it to be stored in the database
        const dateOfEvent = new Date(eventDate)

        //object for sever
        const newEvent = {
            date: eventDate,
            human_readable: dateOfEvent.toDateString(),
            human_readable_time: dateOfEvent.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
            start: dateOfEvent.getTime(),
            duration: eventTime,
        }
        //sends new event to event.saga.js, resets values
        dispatch({type: 'POST_EVENT', payload: newEvent})
        setDateTime('')
        setDuration(0)
    }
}

//delete event from user view
const handleDelete = (eventID) => {
    console.log('in delete for ID', eventID)
    dispatch({type: 'DELETE_EVENT', payload: eventID})
}

//this moment in time, used to sort events on page, send as payload
const now = new Date().getTime()
//loads events as page loads
useEffect(()=>{
    dispatch({type:'GET_EVENTS', payload: now})
}, [])



    return (
        <div>
            <div className="display-box">
            <h2>Schedule New Event:</h2>
            <form className="event-form">
                <label htmlFor="start">Start date:</label>

                <input
                    required
                    type="datetime-local"
                    id="start"
                    name="start"
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
                    <option value={1 * 60000}>1</option>
                    <option value={15 * 60000}>15</option>
                    <option value={30 * 60000}>30</option>
                    <option value={45 * 60000}>45</option>
                    <option value={60 * 60000}>60</option>
                </select>
                <button className="submit" onClick={(event) => handleClick(dateTime, duration, event)}>Submit</button>
            </form>
            </div>
            <div>
            <table className="event-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>Duration (m)</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {eventList.map((single)=>{
                        return(
                            <tr key={single.id}>
                                <td>{single.human_readable}</td>
                                <td>{single.human_readable_time}</td>
                                <td>{single.duration / 60000}</td>
                                <td><button className="delete" onClick={()=>handleDelete(single.id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
            <MountainFooter/>
        </div>
    )
}
