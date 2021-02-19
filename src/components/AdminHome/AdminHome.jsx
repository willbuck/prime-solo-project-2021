import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import MountainAbout from'../Mountains/MountainAbout'

export default function AdminHome() {

    const dispatch = useDispatch();

    const history = useHistory()

    //routes admin to three different views
    const handleClick = (input) => {
        switch (input) {
            case 'event':
                history.push('/admin/event');
                break;
            case 'koan':
                dispatch({type: 'GET_KOANS'})
                history.push('/admin/koan');
                break;
            case 'records':
                dispatch({type: 'GET_RECORDS'})
                history.push('/admin/records');
                break;
            default:
                return;
        }
    }


    return (
        <>
        <div className="dashboard">
            <h2>Admin Dashboard</h2>
            <table>
                <tbody>
                    <tr>
                        <td>
                            Add/Edit Events
                    </td>
                        <td>
                            <button className="submit" onClick={() => handleClick('event')}>Go</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Add/Edit Koans
                    </td>
                        <td>
                            <button className="submit" onClick={() => handleClick('koan')}>Go</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            View Records
                    </td>
                        <td>
                            <button className="submit" onClick={() => handleClick('records')}>Go</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        <div className="bumper"></div>
        </div>
        <MountainAbout/>
        </>
    )
}
