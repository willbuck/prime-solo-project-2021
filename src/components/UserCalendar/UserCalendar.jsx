import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import MountainFooter from '../Mountains/MountainFooter'

export default function UserCalendar() {

    const history = useHistory();
    const calendar = useSelector(store => store.calendar)

    const handleClick = () => {
        history.push('/user')
    }

    return (
        <div>
            <div className="head-container header">
                <h2>Upcoming Events</h2>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {calendar.map((event) => {
                        return (
                            <tr key={event.id}>
                                <td>{event.human_readable}</td>
                                <td>{event.human_readable_time}</td>
                                <td>{event.duration / 60000}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <MountainFooter />
        </div>
    )
}
