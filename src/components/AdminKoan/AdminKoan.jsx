import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import MountainFooter from '../Mountains/MountainFooter'


//page needs to GET koans on load, arm them with a DELETE button
//DISPATCH get request for all koans to SAGA
//store GET in REDUCER -> RENDER REDUCER contents on page LOAD

//BUILD FORM to POST new koan
//PROTECT POST, GET, DELETE routes on SERVER from KOAN ROUTER

export default function AdminKoan() {

    //state to store user in put
    const [koan, setKoan] = useState('');
    //reducer with all koans
    const koanList = useSelector(store => store.koan)

    const history = useHistory();
    const dispatch = useDispatch();

    //dispatch GET to koan.saga.js
    const getKoans = () => {
        dispatch({ type: 'GET_KOANS' })
    }

    //buttons send user back on to dashboard OR post

    //ADD DELETE ROUTE
    const handleClick = (type, event) => {
        event.preventDefault();

        if (type === 'back') {
            history.push('/admin');
        }
        else if (type === 'submit') {
            console.log('submitting')
            dispatch({ type: 'POST_KOAN', payload: { koan: koan } })
            setKoan('');
        }
        else if (type) {
            dispatch({ type: 'DELETE_KOAN', payload: type })
        }
    }

    //loads koans on page load
    useEffect(() => {
        getKoans();
    }, [])

    return (
        <div>
            <div>
                <form className="koan-form">
                    <label htmlFor="koan">Add a New Koan:</label>
                    <textarea
                        name="koan"
                        id="koan"
                        placeholder="new koan text..."
                        maxlength="1000"
                        value={koan}
                        required
                        onChange={(event) => setKoan(event.target.value)}
                    >
                    </textarea>
                        <button className="submit" onClick={(event) => handleClick('submit', event)}>Submit</button>
                </form>
            </div>

            <div>
                <table className="koan-table">
                    <thead>
                        <tr>
                            <th>Koan Text</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {koanList.map((entry) => {
                            return (
                                <tr key={entry.id}>

                                    <td>{entry.koan_text}</td>
                                    <td><button className="delete" onClick={(event) => handleClick(entry.id, event)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <MountainFooter />
        </div>

    )
}
