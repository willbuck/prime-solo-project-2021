// import LogOutButton from '../LogOutButton/LogOutButton';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'


function UserPage() {
  //user stores user info n page
  const user = useSelector(store=> store.user);
  const events = useSelector(store=>store.event);
  const koan = useSelector(store=>store.koan)

  const dispatch = useDispatch()

  const history = useHistory()

  //dispatches event details along with koan to it's own reducer that
  //stores all information for the upcoming event

  //START HERE TOMORROW
  const enterZendo = (singleEvent) => {
    console.log('lone event in dispatch', singleEvent)
    dispatch({type: 'ZENDO_DETAILS', payload:{
        id: singleEvent.id,
        start: Number(singleEvent.start),
        duration: singleEvent.duration,
        time: singleEvent.human_readable_time,
        koan: koan[0]
    }})
    //button sends you into the zendo
    //it gets you to Stage0, where the timers begin
    history.push('/zendo')
  }

  const handleClick = (destination) => {
    if(destination){
      dispatch({type: 'REFLECTION'})
      history.push('/user/koan')
    }
    else {
      dispatch({type: 'GET_CALENDAR'})
      history.push('/user/calendar')
    }
  }

  //getSchedule sends the current time in ms from 1970 to the server
  //it returns the nearest upcoming events
  function getSchedule() {
    const now = new Date();
    dispatch({type: 'GET_USER', payload: now.getTime()})
    dispatch({type: 'GET_KOAN'})
  }

  useEffect(() => {
    getSchedule();
  }, [])


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" /> */}
      <div className="App">
      <header className="App-header">
        <div className="splash-container">
          <h2>User Portal</h2>
          <h4>Other views from this page: list of all saved koans, full calendar view</h4>
          <table>
            <thead>
              <tr>
                <td>Date</td>
                <td>Start Time</td>
                <td>Duration</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {(events.map((detail) => {
                return (
                  <tr key={detail.id}>
                    <td>{detail.human_readable}</td>
                    <td>{detail.human_readable_time}</td>
                    <td>{detail.duration / 60000}</td>
                    <td><button onClick={()=>enterZendo(detail)}>Enter Zendo</button></td>
                  </tr>
                )
              }))}
            </tbody>
          </table>
          <div className="button-container">
            <button onClick={()=>handleClick(true)}>View all Koans</button>
            <button onClick={()=>handleClick(false)}>View Calendar</button>
          </div>
        </div>
      </header>
    </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
