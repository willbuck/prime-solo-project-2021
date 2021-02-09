import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function AdminRecords() {

  const history = useHistory()
  const dispatch = useDispatch()

  const records = useSelector(store => store.event)

  const handleClick = () => {
    history.push('/admin')
  }

  useEffect(()=>{
    dispatch({type: 'GET_RECORDS'})
  }, [])

  return (
    <div>
      <div>
        <button onClick={() => handleClick()}>Back to Dashboard</button>
      </div>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Time</td>
            <td>Duration</td>
            <td>Attended</td>
            <td>Left Early</td>
          </tr>
        </thead>
        <tbody>
          {records.map((record)=>{
            return(
              <tr key={record.id}>
                <td>{record.human_readable}</td>
                <td>{record.human_readable_time}</td>
                <td>{record.duration / 60000}</td>
                <td>{record.attended}</td>
                <td>{record.left_early}</td>
              </tr>

            )
          })}
        </tbody>
      </table>

    </div>


  )
}
