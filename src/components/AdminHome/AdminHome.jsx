import {useHistory} from 'react-router-dom'

export default function AdminHome() {

    const history = useHistory()

    //DRY function for routing
    const handleClick = () =>{

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
                        <button onClick={()=>handleClick()}>Go</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        Add/Edit Koans
                    </td>
                    <td>
                        <button onClick={()=>handleClick()}>Go</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        View Records
                    </td>
                    <td>
                        <button onClick={()=>handleClick()}>View</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}
