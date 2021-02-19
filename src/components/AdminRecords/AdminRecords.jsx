import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import MountainFooter from '../Mountains/MountainFooter'

export default function AdminRecords() {

  const dispatch = useDispatch()

  const records = useSelector(store => store.event)

  //now used to sort records from database
  const now = new Date().getTime()

  useEffect(()=>{
    dispatch({type: 'GET_RECORDS', payload: now})
  }, [])

  return (
    <div>
      <div className="header">
      <h2>Zendo Records</h2>
      </div>

      <table className="records-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Start Time</th>
            <th>Duration (m)</th>
            <th>Attended</th>
            <th>Left Early</th>
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
                <td>{record.leave_early}</td>
              </tr>

            )
          })}
        </tbody>
      </table>
          <MountainFooter/>
    </div>


  )
}
