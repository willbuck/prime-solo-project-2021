import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AdminEvent() {


    const history = useHistory();
    const dispatch = useDispatch();

    const [date, setDate] = useState(new Date())

    const checkCalendar = (checker, event) => {
        event.preventDefault();
        console.log(checker)
    }



    return (
        <div>
            <p></p>
            <form>
                <label htmlFor="start">Start date:</label>

                <input
                    type="date"
                    id="start"
                    name="trip-start"
                    value="2018-07-22"
                    min={new Date()}
                    max="2040-12-31"
                    value={date}
                    onChange={(event)=>setDate(event.target.value)}/>
                <button onClick={(event)=>checkCalendar(date, event)}>Submit</button>
            </form>
        </div>
    )
}
