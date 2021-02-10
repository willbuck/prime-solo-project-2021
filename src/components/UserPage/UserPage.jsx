// import LogOutButton from '../LogOutButton/LogOutButton';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'


function UserPage() {
  //user stores user info n page
  const user = useSelector((store) => store.user);
  const events = useSelector(store=>store.event)
  const dispatch = useDispatch()

  const history = useHistory()

  //
  const enterZendo = (singleEvent) => {
    console.log('lone event in dispatch', singleEvent)
    dispatch({type: 'MEDITATION', payload:{
        id: singleEvent.id,
        hour: singleEvent.start_time_hour,
        minute: singleEvent.start_time_minute,
        duration: singleEvent.duration,
        koan: singleEvent.koan
    }})
    //button sends you into the zendo
    //it gets you to Stage0, where the timers begin
    history.push('/zendo')
  }

  //getEvents sends the current time to the server
  //it returns the nearest upcoming event to the splash page
  function getEvents() {
    const now = new Date();
    dispatch({type: 'GET_USER', payload: now.getTime()})
  }

  useEffect(() => {
    getEvents();
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
            <button onClick={()=>console.log('nav to Koan view')}>View all Koans</button>
            <button onClick={()=>console.log('nav to Calendar view')}>View Calendar</button>
          </div>
        </div>
      </header>
    </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
