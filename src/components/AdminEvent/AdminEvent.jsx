import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AdminEvent() {


    const history = useHistory();
    const dispatch = useDispatch();

    const [dateTime, setDateTime] = useState(new Date())

    const checkCalendar = (checker, event) => {
        event.preventDefault();
        console.log(checker)
        const start = new Date(checker)
        console.log('start:', start)
        console.log('start to string:', start.toLocaleString())
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
                    onChange={(event)=>setDateTime(event.target.value)}/>
                <button onClick={(event)=>checkCalendar(dateTime, event)}>Submit</button>
            </form>
        </div>
    )
}
