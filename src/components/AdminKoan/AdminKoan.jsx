import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import MountainFooter from '../Mountains/MountainFooter'

//form allows admin to add or delete koans

export default function AdminKoan() {

    //state to store user input
    const [koan, setKoan] = useState('');

    //reducer with all koans
    const koanList = useSelector(store => store.koan)

    const dispatch = useDispatch();

    //dispatch GET to koan.saga.js
    const getKoans = () => {
        dispatch({ type: 'GET_KOANS' })
    }

    //buttons either submit or delete
    const handleClick = (type, event) => {
        event.preventDefault();

        if (type === 'submit') {
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
