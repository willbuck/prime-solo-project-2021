import {useHistory} from 'react-router-dom'

export default function AdminHome() {

    const history = useHistory()

    //DRY function for routing
    const handleClick = (input) =>{
        switch(input){
            case 'event':
                history.push('/admin/event');
                break;
            case 'koan':
                history.push('/admin/koan');
                break;
            case 'records':
                history.push('/admin/records');
                break;
            default:
                return;
        }
    }

    
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <table>
                <tr>
                    <td>
                        Add/Edit Events
                    </td>
                    <td>
                        <button onClick={()=>handleClick('event')}>Go</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        Add/Edit Koans
                    </td>
                    <td>
                        <button onClick={()=>handleClick('koan')}>Go</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        View Records
                    </td>
                    <td>
                        <button onClick={()=>handleClick('records')}>View</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}
