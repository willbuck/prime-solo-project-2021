import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AdminEvent() {

    //reducer for events in DB, called on load and put on DOM
    const eventList = useSelector(store=>store.event)

    const history = useHistory();
    const dispatch = useDispatch();

    //state to hold user input for date/time and duration
    const [dateTime, setDateTime] = useState('')
    const [duration, setDuration] = useState(0)

    //handles form submit, packages data for DB
    const handleClick = (eventDate, eventTime, event) => {
        //still rough, pare down after GET/.map showing up right
        event.preventDefault();
        //form validation
        if(!eventDate || !eventTime ){
            alert('please enter all the event information')
        }
        //packages data and sends to DB
        else{

        const dateOfEvent = new Date(eventDate)

        // const timeStart =
        //     ((dateOfEvent.getHours() * 3600000) + (dateOfEvent.getMinutes() * 60000) +
        //     (dateOfEvent.getSeconds() * 1000) + dateOfEvent.getMilliseconds())

        // console.log('gettime function', dateOfEvent.getTime())


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

//back to dashboard
const handleBack = () => {
    history.push('/admin')
}

//delete event from user view
const handleDelete = (eventID) => {
    console.log('in delete for ID', eventID)
    dispatch({type: 'DELETE_EVENT', payload: eventID})
}

//this moment in time, used for sorting!
const now = new Date().getTime()
//loads events as page loads
useEffect(()=>{
    dispatch({type:'GET_EVENTS', payload: now})
}, [])



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
            <div>
                <button onClick={()=>handleBack()}>Back to Dashboard</button>
            </div>
            <div>
            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Time</td>
                        <td>Duration</td>
                        <td>Delete</td>
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
        </div>
    )
}
