import { useSelector } from 'react-redux'

import MountainFooter from '../Mountains/MountainFooter'

//shows user a simple calendar of upcoming events

export default function UserCalendar() {

    const calendar = useSelector(store => store.calendar)


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
