import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function AdminRecords() {

  const records = useSelector(store => store.event)

  const handleClick = () => {
    historypush('/admin')
  }


  return (
    <div>
      <table>
        <thead>
          <td>Date</td>
          <td>Time</td>
          <td>Duration</td>
          <td>Attended</td>
          <td>Left Early</td>
        </thead>
      </table>
      <div>
        <button onClick={() => handleClick()}>Back to Dashboard</button>
      </div>
    </div>


  )
}
